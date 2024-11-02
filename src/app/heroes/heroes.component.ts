import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  heroForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.heroForm = new FormGroup({
      id: new FormControl<number>(1),
      name: new FormControl<string>('Windstorm', [Validators.required]),
    });
  }

  get name() {
    return this.heroForm.get('name');
  }
}
