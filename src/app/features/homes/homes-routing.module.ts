import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: '/news/:id',
        component: NewsComponent,
        data: { breadcrumb: 'お知らせ' },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomesRoutingModule { }
