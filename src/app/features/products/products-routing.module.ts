import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/auth/auth.guard';
import { PreProductEditComponent } from './pages/pre-product-edit/pre-product-edit.component';
import { PreProductNewComponent } from './pages/pre-product-new/pre-product-new.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

const productRoutes: Routes = [
  {
    path: '',
    data: { breadcrumb: '商品一覧' },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: { breadcrumb: null }
      },
      {
        path: 'new',
        component: PreProductNewComponent,
        data: { breadcrumb: '仮品番登録' }
      },
      {
        path: 'pre-edit/:id',
        component: PreProductEditComponent,
        data: { breadcrumb: '仮品番編集' }
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
        data: {
          breadcrumb: '品番編集'
          // , authFn: AuthUtils.isInternalUser
        }
      },
      {
        path: 'view/:id',
        component: ProductViewComponent,
        data: { breadcrumb: '品番参照' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
