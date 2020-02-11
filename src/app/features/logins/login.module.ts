import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { AuthEffects } from './auth.effects';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { authReducer } from './reducers/index';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}
