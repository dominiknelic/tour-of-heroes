import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent {

}
