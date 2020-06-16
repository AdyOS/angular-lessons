import * as moment from 'moment';

import {AbstractControl, ValidatorFn} from '@angular/forms';

export function dateValueValidator(format: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const forbidden = moment(control.value, format).format(format) !== control.value;
    console.log('FORMAT', moment(control.value, format).format(format));
    console.log('VALIDATOR', forbidden,  control.value, 'formatted',  moment(control.value).format(format), control.value);
    return forbidden ? { error: true } : null;
  };
}
