import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsListSmartComponent } from './pages/news-list/news-list.smart.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsSmartComponent } from './pages/news/news.smart.component';

const COMPONENTS = [
  HomeComponent,
  NewsListSmartComponent,
  NewsListComponent,
  NewsSmartComponent,
  NewsComponent,
  ContactInfoComponent
];

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    TranslateModule.forChild({})
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class HomesModule { }
