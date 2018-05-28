import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RouteOneComponent,
  RouteTwoComponent,
  RouteThreeComponent
} from './components';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RouteOneComponent },
  { path: 'one', component: RouteOneComponent },
  { path: 'two', component: RouteTwoComponent },
  { path: 'three', component: RouteThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
