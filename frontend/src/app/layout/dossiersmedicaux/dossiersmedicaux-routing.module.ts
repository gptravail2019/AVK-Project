import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DossiersmedicauxComponent } from './dossiersmedicaux.component';


const routes: Routes = [
  {
    path: '',
    component: DossiersmedicauxComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossiersmedicauxRoutingModule { }
