import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/auth.guard';
import { PreProductEditComponent } from './pages/pre-product-edit/pre-product-edit.component';
import { PreProductNewComponent } from './pages/pre-product-new/pre-product-new.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'new',
        component: PreProductNewComponent,
      },
      {
        path: 'pre-edit/:id',
        component: PreProductEditComponent,
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
        data: {
          // , authFn: AuthUtils.isInternalUser
        }
      },
      {
        path: 'view/:id',
        component: ProductViewComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
