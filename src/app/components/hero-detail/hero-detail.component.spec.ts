import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockHeroService = {
  getHero: jest.fn(),
};

const mockActivatedRoute = {
  snapshot: { paramMap: { get: jest.fn() } },
};

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA], // Ignores errors from unrecognized template elements
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display an existing hero', () => {
    const hero = { id: 1, name: 'Superman' };
    mockHeroService.getHero.mockReturnValue(of(hero));
    mockActivatedRoute.snapshot.paramMap.get.mockReturnValue('1');

    fixture.detectChanges();

    const nameElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(nameElement.textContent).toContain(`${hero.name} details!`);
  });

  it('should handle non-existing hero', () => {
    mockHeroService.getHero.mockReturnValue(of(undefined)); // Hero not found
    mockActivatedRoute.snapshot.paramMap.get.mockReturnValue('2');

    fixture.detectChanges(); // Trigger ngOnInit

    const nameElement = fixture.debugElement.query(By.css('h2'));
    expect(nameElement).toBeNull(); // Check that hero details are not rendered
  });
});
