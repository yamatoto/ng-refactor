import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

const homeRoutes: Routes = [
    {
        path: '',
        data: { breadcrumb: 'ホーム' },
        children: [
            {
                path: '',
                component: HomeComponent,
                // data: { breadcrumb: null },
            },
            {
                path: 'news/:id',
                component: NewsComponent,
                data: { breadcrumb: 'お知らせ' },
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomesRoutingModule { }
