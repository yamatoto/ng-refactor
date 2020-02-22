import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-list-form',
  templateUrl: './search-list-form.component.html',
  styleUrls: ['./search-list-form.component.scss']
})
export class SearchListFormComponent implements OnInit {

  @Output()
  private search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearch(searchForm: NgForm): void {
    this.search.emit(searchForm);
  }
}
