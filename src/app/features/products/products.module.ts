import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { FormAComponent } from './components/form-a/form-a.component';
import { FormBComponent } from './components/form-b/form-b.component';
import { SearchListFormComponent } from './components/search-list-form/search-list-form.component';
import { PreProductEditComponent } from './pages/pre-product-edit/pre-product-edit.component';
import { PreProductEditSmartComponent } from './pages/pre-product-edit/pre-product-edit.smart.component';
import { PreProductNewComponent } from './pages/pre-product-new/pre-product-new.component';
import { PreProductNewSmartComponent } from './pages/pre-product-new/pre-product-new.smart.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductEditSmartComponent } from './pages/product-edit/product-edit.smart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductListSmartComponent } from './pages/product-list/product-list.smart.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductViewSmartComponent } from './pages/product-view/product-view.smart.component';
import { ProductComponent } from './product.component';
import { ProductsRoutingModule } from './products-routing.module';

const COMPONENTS = [
  ProductComponent,
  PreProductNewComponent,
  PreProductNewSmartComponent,
  PreProductEditComponent,
  PreProductEditSmartComponent,
  ProductEditComponent,
  ProductEditSmartComponent,
  ProductViewComponent,
  ProductViewSmartComponent,
  ProductListComponent,
  ProductListSmartComponent,
  FormAComponent,
  FormBComponent,
  SearchListFormComponent
];

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule,
    TranslateModule.forChild({})
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ProductsModule { }
