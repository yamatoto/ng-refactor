import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class ProductFormService {

  constructor(private fg: FormBuilder) {
  }

  getDefaultFormGroupA(): FormGroup {
    return this.fg.group({
      id: [null],
      productName: [null],
      productNameKana: [null]
    });
  }

  getDefaultFormGroupB(): FormGroup {
    return this.fg.group({
      makerCode: [null]
    });
  }

}
