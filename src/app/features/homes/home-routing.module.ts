import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewsListSmartComponent } from './pages/news-list/news-list.smart.component';
import { NewsSmartComponent } from './pages/news/news.smart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'news-list', pathMatch: 'full'},
      {
        path: 'news-list',
        component: NewsListSmartComponent
      },
      {
        path: 'news/:id',
        component: NewsSmartComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
