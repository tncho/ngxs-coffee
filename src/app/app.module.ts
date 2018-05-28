import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { SuiModule } from 'ng2-semantic-ui';

import { AppState } from './state/app.state';
import { AppComponent } from './app.component';
import { DashboardComponent, EditorComponent } from '@sharedComponents';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';
import { RouteThreeComponent } from './components/route-three/route-three.component';

const COMPONENTS = [DashboardComponent, EditorComponent];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SuiModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
