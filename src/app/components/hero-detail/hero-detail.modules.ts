import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroDetailRoutingModule } from './hero-detail-routing.modules';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, HeroDetailRoutingModule, ReactiveFormsModule],
})
export class HeroDetailModule {}
