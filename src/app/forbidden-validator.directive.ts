import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbidden: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenValidatorDirective,
    multi: true,
  }],
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenValidator') forbiddenString: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenString
      ? forbiddenValidator(new RegExp(this.forbiddenString, 'i'))(control)
      : null;
  }
}
