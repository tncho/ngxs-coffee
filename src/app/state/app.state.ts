import { State, StateContext, Action, Selector } from '@ngxs/store';
import { AppStateModel } from '../models/appstate.model';

import { SetText, ResetText, DummySetState } from './app.actions';

// defaults
export const getAppInitialState = (): AppStateModel => ({
  text: 'default'
});

// feature 'selector'
const getStateText = (state): AppStateModel => {
  return state.text;
};

// state
@State<AppStateModel>({
  name: 'App',
  defaults: getAppInitialState()
})
export class AppState {
    @Selector()
    static getText(state: AppStateModel) {
      return getStateText(state);
    }
    @Action(SetText)
    setText(ctx: StateContext<AppStateModel>, action: SetText) {
      const currentState = ctx.getState();
      const newState = {
        text: action.payload
      };

      ctx.setState({
        ...currentState,
        ...newState
      });
    }
    @Action(ResetText)
    ResetText(ctx: StateContext<AppStateModel>, action: ResetText) {
      const state = ctx.getState();
      const newState = getAppInitialState();
      ctx.setState({
        ...state,
        ...newState
      });
    }
    // Dummy set state action decorator for testing purposes
    @Action(DummySetState)
    dummySetState(ctx: StateContext<AppStateModel>, action: DummySetState) {
        const state = ctx.getState();

        const current = {
            ...action.payload
        };

        ctx.setState({
            ...state,
            ...current
        });
    }
}
