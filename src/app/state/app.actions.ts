import { AppStateModel } from '../models/appstate.model';
/* Actions */

export class SetText {
  static readonly type = '[Dashboard] SET_TEXT';
  constructor(public payload: string) { }
}

export class ResetText {
  static readonly type = '[Dashboard] RESET_TEXT';
  constructor() { }
}

// Dummy set state for testing purposes
export class DummySetState {
  static readonly type = 'DUMMY_SET_STATE';
  constructor(public payload: AppStateModel) { }
}
