import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/homes/pages/home/home.component';
import { NewsComponent } from '@features/homes/pages/news/news.component';
import { LoginComponent } from '@features/logins/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'news/:id',
        component: NewsComponent,
        data: { breadcrumb: 'お知らせ' },
      }]
  },
  {
    path: 'login',
    component: LoginComponent
  },
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
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
