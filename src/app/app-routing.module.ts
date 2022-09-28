import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistsComponent} from "./user-type/patient/pages/physiotherapists/physiotherapists.component";

const routes: Routes = [
  {path:'physiotherapists', component: PhysiotherapistsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
