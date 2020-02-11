import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { HomesRoutingModule } from './homes-routing.module';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
    declarations: [
        HomeComponent,
        NewsListComponent,
        NewsComponent,
        ContactInfoComponent
    ],
    imports: [
        SharedModule,
        HomesRoutingModule,
        TranslateModule.forChild({})
    ],
    providers: []
})
export class HomesModule { }
