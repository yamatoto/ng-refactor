import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { AuthHttpService } from '../http/auth-http.service';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthEffects } from './auth.effects';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { authReducer } from './reducers/index';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule,
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: [
        LoginComponent
    ]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [
                AuthHttpService,
                AuthGuard
            ]
        };
    }
}
