import { createReducer, on } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { AuthActions } from '../actions/action.types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (_, action) => ({user: action.user})),
  on(AuthActions.logout, () => ({user: undefined}))
);
