import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistsComponent} from "./user-type/patient/pages/physiotherapists/physiotherapists.component";
import {PaymentsComponent} from "./user-type/patient/pages/payments/payments.component";
import {ScheduleAppointmentsComponent} from "./user-type/patient/pages/schedule-appointments/schedule-appointments.component";
import {TreatmentsComponent} from "./user-type/patient/pages/treatments/treatments.component";
import {
  MedicalAppointmentsComponent
} from "./user-type/patient/pages/medical-appointments/medical-appointments.component";
import {VideoSessionsComponent} from "./user-type/patient/pages/video-sessions/video-sessions.component";

const routes: Routes = [
  {path:'physiotherapists', component: PhysiotherapistsComponent},
  {path:'treatments/:id', component: TreatmentsComponent},
  {path:'payments', component: PaymentsComponent},
  {path:'schedule-appointments', component: ScheduleAppointmentsComponent},
  {path: 'medical-appointments', component: MedicalAppointmentsComponent},
  {path: 'video-sessions/:id', component: VideoSessionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
