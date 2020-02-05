import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: '/',
    },
    // {
    //     path: 'maintenamce',
    //     component: MaintenanceComponent
    // },
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    {
        path: 'home',
        loadChildren: () => import('./modules/homes/homes.module').then(m => m.HomesModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
    },
    {
        path: 'orders',
        loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
