import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistsComponent} from "./user-type/patient/pages/physiotherapists/physiotherapists.component";
import {PaymentsComponent} from "./user-type/patient/pages/payments/payments.component";
import {ScheduleAppointmentsComponent} from "./user-type/patient/pages/schedule-appointments/schedule-appointments.component";
import {TreatmentsComponent} from "./user-type/patient/pages/treatments/treatments.component";

const routes: Routes = [
  {path:'physiotherapists', component: PhysiotherapistsComponent},
  {path:'treatments/:id', component: TreatmentsComponent},
  {path:'payments', component: PaymentsComponent},
  {path:'schedule-appointments', component: ScheduleAppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
