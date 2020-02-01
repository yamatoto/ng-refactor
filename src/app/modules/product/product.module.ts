import { NgModule } from '@angular/core';
import { PreProductEditComponent } from './pages/pre-product-edit/pre-product-edit.component';
import { PreProductNewComponent } from './pages/pre-product-new/pre-product-new.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

@NgModule({
    declarations: [
        PreProductNewComponent,
        PreProductEditComponent,
        ProductEditComponent,
        ProductViewComponent
    ],
    imports: [
    ],
    providers: [],
    bootstrap: []
})
export class ProductModule { }
