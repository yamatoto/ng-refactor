import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomesRoutingModule } from './homes-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomesRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class HomesModule { }
