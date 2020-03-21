import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ProductFormService {

  constructor(private fb: FormBuilder) {
  }

  getInitialFormGroup(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      childGroup: this.getDefaultFormGroupA()
    });
  }

  getDefaultFormGroupA(): FormGroup {
    return this.fb.group({
      id: [null],
      productName: [null, [Validators.required]],
      productNameKana: [null, [Validators.required]]
    });
  }

  getDefaultFormGroupB(): FormGroup {
    return this.fb.group({
      makerCode: [null]
    });
  }

}
