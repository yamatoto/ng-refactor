import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreProductEditComponent } from './pages/pre-product-edit/pre-product-edit.component';
import { PreProductNewComponent } from './pages/pre-product-new/pre-product-new.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    declarations: [
        PreProductNewComponent,
        PreProductEditComponent,
        ProductEditComponent,
        ProductViewComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class ProductsModule { }
