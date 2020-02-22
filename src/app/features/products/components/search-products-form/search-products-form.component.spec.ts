import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchProductsFormComponent } from './search-products-form.component';

describe('SearchProductsFormComponent', () => {
  let component: SearchProductsFormComponent;
  let fixture: ComponentFixture<SearchProductsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductsFormComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
