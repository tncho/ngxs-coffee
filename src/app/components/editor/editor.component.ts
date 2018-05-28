import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetText, ResetText } from '../../state/app.actions';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit() {
  }

  onSubmit(elementRef: any) {
    alert('text submitted!');
    this._store.dispatch(new SetText(elementRef.value));
  }

  onReset() {
    alert('state reset');
    this._store.dispatch(new ResetText());
  }

}
