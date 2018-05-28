import { SetText, ResetText, DummySetState } from './app.actions';

import { Store, Actions, NgxsModule } from '@ngxs/store';
import { TestBed, async } from '@angular/core/testing';
import { AppState, getAppInitialState } from './app.state';
import { AppStateModel } from '../models/appstate.model';

describe('App Reducer', () => {
  let store: Store;
  let actions: Actions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])]
    }).compileComponents();

    store = TestBed.get(Store);
    actions = TestBed.get(Actions);
  }));

  describe('SET_TEXT', () => {
    it('should set the new state text', () => {
      // arrange
      const currentState = {
        ...getAppInitialState()
      };

      const expectedState = {
        ...getAppInitialState(),
        text: 'tested!'
      };

      store.dispatch(new DummySetState(currentState));

      // action
      const testAction = new SetText('tested!');
      store.dispatch(testAction);

      store.selectOnce((state: any) => state.App).subscribe(updatedState => {
        // assert
        expect(updatedState).toEqual(expectedState);
      });
    });
  });
});
