import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.modules';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, HeroDetailRoutingModule, FormsModule],
})
export class HeroDetailModule {}
