import { environment } from '@env/environment';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state befor: ', state);
    console.log('action: ', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
