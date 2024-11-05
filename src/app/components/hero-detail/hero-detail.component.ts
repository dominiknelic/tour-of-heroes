import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../hero';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  heroForm: FormGroup = this.fb.group({
    id: [{ value: '', disabled: true }],
    name: ['', { validators: Validators.required, updateOn: 'blur' }],
  });
  readonly destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly heroService: HeroService,
    private readonly location: Location,
    private readonly fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getHero();
    this.listenForNameChanges();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.heroService
      .getHero(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((hero) => {
        if (hero) {
          this.heroForm.patchValue({
            id: hero.id,
            name: hero.name,
          });
          this.cdr.markForCheck();
        }
      });
  }

  listenForNameChanges() {
    this.heroForm
      .get('name')
      ?.valueChanges.pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((newName) => {
          const updatedHero: Hero = {
            ...this.heroForm.getRawValue(),
            name: newName,
          };
          return this.heroService.updateHero(updatedHero);
        }),
      )
      .subscribe();
  }

  goBack() {
    if (this.heroForm.valid) {
      this.location.back();
    }
  }
}
