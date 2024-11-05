import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHeroNameModifier]',
})
export class HeroNameModifierDirective implements OnInit {
  @Input('appHeroNameModifier') heroName: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.heroName.length > 10) {
      this.el.nativeElement.textContent = `${this.heroName}_alza`;
    } else {
      this.el.nativeElement.textContent = this.heroName;
    }
  }
}
