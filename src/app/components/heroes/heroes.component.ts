import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  // heroForm: FormGroup;
  heroes = HEROES;
  selectedHero?: Hero;

  constructor(private readonly fb: FormBuilder) {
    // this.heroForm = new FormGroup({
    //   id: new FormControl<number>(1),
    //   name: new FormControl<string>('Windstorm', [Validators.required]),
    // });
  }

  // get name() {
  //   return this.heroForm.get('name');
  // }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
