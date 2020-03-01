import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    DashboardRoutingModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class DashboardModule { }
