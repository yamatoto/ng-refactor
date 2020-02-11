import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule),
    canActivate: [AuthGuard],
  },
  // {
  //     path: 'maintenamce',
  //     component: MaintenanceComponent
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
