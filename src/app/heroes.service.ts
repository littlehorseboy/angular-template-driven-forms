import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = ['Otis'].includes(alterEgo);

    return of(isTaken)
      .pipe(
        delay(1000),
      );
  }
}
