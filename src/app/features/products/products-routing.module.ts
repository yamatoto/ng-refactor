import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreProductEditSmartComponent } from './pages/pre-product-edit/pre-product-edit.smart.component';
import { PreProductNewSmartComponent } from './pages/pre-product-new/pre-product-new.smart.component';
import { ProductEditSmartComponent } from './pages/product-edit/product-edit.smart.component';
import { ProductListSmartComponent } from './pages/product-list/product-list.smart.component';
import { ProductViewSmartComponent } from './pages/product-view/product-view.smart.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {
        path: 'list',
        component: ProductListSmartComponent,
      },
      {
        path: 'new',
        component: PreProductNewSmartComponent,
      },
      {
        path: 'pre-edit/:id',
        component: PreProductEditSmartComponent,
      },
      {
        path: 'edit/:id',
        component: ProductEditSmartComponent,
        data: {
          // , authFn: AuthUtils.isInternalUser
        }
      },
      {
        path: 'view/:id',
        component: ProductViewSmartComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
