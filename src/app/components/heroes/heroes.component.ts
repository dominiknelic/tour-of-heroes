import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  // heroForm: FormGroup;
  heroes: Hero[] = [];

  readonly destroyRef = inject(DestroyRef);

  constructor(
    private readonly fb: FormBuilder,
    private readonly heroService: HeroService,
  ) {
    // this.heroForm = new FormGroup({
    //   id: new FormControl<number>(1),
    //   name: new FormControl<string>('Windstorm', [Validators.required]),
    // });
  }

  // get name() {
  //   return this.heroForm.get('name');
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService
      .getHeroes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((heroes) => {
        this.heroes = heroes;
      });
  }
}
