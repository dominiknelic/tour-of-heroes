import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesSubject = new BehaviorSubject<Hero[]>(HEROES);

  getHeroes(): Observable<Hero[]> {
    return this.heroesSubject.asObservable();
  }

  getHero(id: number): Observable<Hero> {
    return of(this.heroesSubject.value.find((hero) => hero.id === id) as Hero);
  }

  updateHero(updatedHero: Hero): Observable<void> {
    const heroes = this.heroesSubject.value.map((hero) =>
      hero.id === updatedHero.id ? updatedHero : hero,
    );
    this.heroesSubject.next(heroes);
    return of(void 0);
  }
}
