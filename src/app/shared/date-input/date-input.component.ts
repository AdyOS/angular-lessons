import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
  ]
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() format: string;
  public val = ''; // this is the updated value that the class accesses

  set value(val) {
    this.val = val;
    console.log('val', val);
    this.onChangeCallback(this.val);
    this.onTouchedCallback();
  }

  get value() {
    return this.val;
  }

  writeValue(value: any) {
    this.value = value;
    console.log('this.value', this.value, 'val', this.val);
  }


  private onTouchedCallback() {
  }

  private onChangeCallback(value: string) {
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
