import { NgModule } from '@angular/core';

import { DossiersmedicauxRoutingModule } from './dossiersmedicaux-routing.module';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DossiersmedicauxComponent } from './dossiersmedicaux.component';



@NgModule({
  declarations: [
    DossiersmedicauxComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    DossiersmedicauxRoutingModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class DossiersmedicauxModule { }
