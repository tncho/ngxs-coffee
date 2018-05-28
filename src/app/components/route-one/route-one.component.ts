import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent implements OnInit {

  @Select(AppState.getText) state$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
