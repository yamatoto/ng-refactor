import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreProductNewComponent } from './pre-product-new.component';

describe('PreProductNewComponent', () => {
    let component: PreProductNewComponent;
    let fixture: ComponentFixture<PreProductNewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PreProductNewComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreProductNewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
