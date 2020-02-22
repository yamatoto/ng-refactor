import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pre-product-new-smart',
  template: `
  <form
    [formGroup]="form"
    (ngSubmit)="onSubmit()">
    <app-pre-product-new [form]="form"></app-pre-product-new>
    <button type="submit">登録</button>
  </form>
  `
})
export class PreProductNewSmartComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('formVal:', this.form.value);
  }
}
