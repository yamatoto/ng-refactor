import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductFormService } from '@features/products/store/product-form-service';

@Component({
  selector: 'app-pre-product-new',
  templateUrl: './pre-product-new.component.html',
  styleUrls: ['./pre-product-new.component.scss'],
  providers: [ProductFormService]
})
export class PreProductNewComponent implements OnInit {

  @Output()
  private submit = new EventEmitter()

  mainForm: FormGroup;
  showForm = false;
  get fCtrl(): { [key: string]: AbstractControl } {
    return this.mainForm.controls;
  }

  // get fChildCtrl(): { [key: string]: AbstractControl } {
  //   return (this.fCtrl.childGroup as FormGroup).controls;
  // }

  constructor(
    private productFormService: ProductFormService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      id: [null],
      // parentName: [null, [Validators.required]],
      // childGroup: this.getDefaultChildFormGroup(),
      barArray: this.generateFormArray()
    }, {
      updateOn: 'blur'
    });

    this.showForm = true;
  }

  private generateFormArray(): FormArray {
    return this.fb.array([...Array(2)].map(() => this.fb.group({
      hoge: [null, [Validators.required]],
      fuga: [null, [Validators.required]]
    })));
  }

  onAddRow(): void {
    (this.mainForm.get('barArray') as FormArray).insert(0, this.fb.group({
      hoge: [null, [Validators.required]],
      fuga: ['newLine', [Validators.required]]
    }));

  }

  // private getDefaultChildFormGroup(): FormGroup {
  //   return this.fb.group({
  //     childName: [null, [Validators.required]],
  //     childCount: [null, [Validators.required]]
  //   });
  // }

  // onInitChildForm(): void {
  //   this.mainForm.setControl('childGroup', this.getDefaultChildFormGroup());
  // }

  onSubmit(): void {
    if (this.mainForm.invalid) {
      alert('invalid!');
      console.log('this.mainForm', this.mainForm);
      return;
    }
    // this.submit.emit(formValue);
  }
}
