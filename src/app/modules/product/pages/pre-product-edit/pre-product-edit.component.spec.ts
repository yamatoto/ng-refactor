import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreProductEditComponent } from './pre-product-edit.component';

describe('PreProductEditComponent', () => {
    let component: PreProductEditComponent;
    let fixture: ComponentFixture<PreProductEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PreProductEditComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreProductEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
