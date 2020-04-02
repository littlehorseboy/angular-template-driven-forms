import { Directive, Injectable, forwardRef } from '@angular/core';
import {
  AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS
} from '@angular/forms';
import { HeroesService } from './heroes.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(
    private heroesService: HeroesService,
  ) { }

  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.heroesService.isAlterEgoTaken(control.value)
      .pipe(
        map((isTaken) => (isTaken ? { isUnique: false } : null)),
        catchError(() => of(null)),
      );
  }
}

@Directive({
  selector: '[appUniqueAlterEgoValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UniqueAlterEgoValidator),
    multi: true,
  }],
})
export class UniqueAlterEgoValidatorDirective {
  constructor(
    private validator: UniqueAlterEgoValidator
  ) { }

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
