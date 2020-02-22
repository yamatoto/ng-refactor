import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pre-product-new',
  templateUrl: './pre-product-new.component.html',
  styleUrls: ['./pre-product-new.component.scss']
})
export class PreProductNewComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
