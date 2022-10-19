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
import {
  ProfessionalProfileComponent
} from "./user-type/patient/pages/professional-profile/professional-profile.component";
import {TreatmentsInfoComponent} from "./user-type/patient/pages/treatments-info/treatments-info.component";
import {ReviewsComponent} from "./user-type/patient/pages/reviews/reviews.component";
import {NewReviewComponent} from "./user-type/patient/pages/reviews/new-review/new-review.component";
import {
  TreatmentsByPatientComponent
} from "./user-type/patient/pages/treatments-by-patient/treatments-by-patient.component";
import {ProfileComponent} from "./user-type/patient/pages/profile/profile.component";
import {MedicalHistoryComponent} from "./user-type/patient/pages/profile/medical-history/medical-history.component";
import {HomePatientComponent} from "./user-type/patient/pages/home-patient/home-patient.component";
import {HomeDoctorComponent} from "./user-type/doctor/pages/home-doctor/home-doctor.component";
import {SignupComponent} from "./shared/pages/signup/signup.component";
import {LoginComponent} from "./shared/pages/login/login.component";

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path:'physiotherapists', component: PhysiotherapistsComponent},
  {path:'treatments', component: TreatmentsComponent},
  {path:'treatments-info/:id', component: TreatmentsInfoComponent},
  {path:'payments', component: PaymentsComponent},
  {path:'schedule-appointments/:id', component: ScheduleAppointmentsComponent},
  {path: 'medical-appointments', component: MedicalAppointmentsComponent},
  {path: 'video-sessions/:id', component: VideoSessionsComponent},
  {path: 'professional-profile/:id', component: ProfessionalProfileComponent},
  {path: 'reviews/:id', component: ReviewsComponent},
  {path: 'new-review/:id', component: NewReviewComponent},
  {path: 'my-treatments', component: TreatmentsByPatientComponent},
  {path: 'medical-history', component: MedicalHistoryComponent},


  {path: 'home-patient', component: HomePatientComponent},
  {path: 'home-doctor', component: HomeDoctorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: '', redirectTo: 'login', pathMatch: 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
