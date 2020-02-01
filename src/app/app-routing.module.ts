import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '**',
        redirectTo: '/'
    },
    {
        path: 'products',
        loadChildren: () => import('./modules/product/product-routing.module').then(m => m.ProductRoutingModule)
    },
    {
        path: 'orders',
        loadChildren: () => import('./modules/order/order-routing.module').then(m => m.OrderRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
