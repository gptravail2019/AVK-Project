import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    LayoutRoutingModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class LayoutModule { }
