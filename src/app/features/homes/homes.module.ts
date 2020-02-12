import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    TranslateModule.forChild({})
  ],
  declarations: [
    HomeComponent,
    NewsListComponent,
    NewsComponent,
    ContactInfoComponent
  ],
  exports: [
    HomeComponent,
    NewsListComponent,
    NewsComponent,
    ContactInfoComponent
  ]
})
export class HomesModule { }
