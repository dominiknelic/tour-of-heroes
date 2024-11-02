import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
