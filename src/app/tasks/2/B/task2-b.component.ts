import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'app-task2-b',
  templateUrl: './task2-b.component.html',
  styleUrls: ['./task2-b.component.less'],
})
export class Task2BComponent {
  date: Date = new Date();
  modalIsVisible = false;

  form = new FormGroup(
    {
      licenseKey: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /(^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$)|(^[A-Z0-9]{6}-[A-Z0-9]{6}$)/
        ),
      ]),
      limitedValidity: new FormControl(false),
      expiryDate: new FormControl(''),
    },
    { validators: expiryDateValidator() }
  );

  formError(): boolean {
    return this.form.hasError('invalidExpiry');
  }

  showModal() {
    if (this.form.valid) {
      this.modalIsVisible = true;
    }
  }

  constructor() {}
}

export function expiryDateValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null =>
    group.get('limitedValidity')?.value && !group.get('expiryDate')?.value
      ? { invalidExpiry: true }
      : null;
}
