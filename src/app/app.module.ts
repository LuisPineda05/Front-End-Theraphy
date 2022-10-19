import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import { PhysiotherapistsComponent } from './user-type/patient/pages/physiotherapists/physiotherapists.component';
import {PhysiotherapistsService} from "./user-type/patient/services/physiotherapists.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { TreatmentsComponent } from './user-type/patient/pages/treatments/treatments.component';
import {TreatmentsService} from "./user-type/patient/services/treatments.service";
import { VideoSessionsComponent } from './user-type/patient/pages/video-sessions/video-sessions.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ScheduleAppointmentsComponent } from './user-type/patient/pages/schedule-appointments/schedule-appointments.component';
import { PaymentsComponent } from './user-type/patient/pages/payments/payments.component';
import { MedicalAppointmentsComponent } from './user-type/patient/pages/medical-appointments/medical-appointments.component';
import { TreatmentsInfoComponent } from './user-type/patient/pages/treatments-info/treatments-info.component';
import {
  ProfessionalProfileComponent
} from "./user-type/patient/pages/professional-profile/professional-profile.component";
import {HeaderComponent} from "./components/header/header.component";
import { ReviewsComponent } from './user-type/patient/pages/reviews/reviews.component';
import { NewReviewComponent } from './user-type/patient/pages/reviews/new-review/new-review.component';
import { TreatmentsByPatientComponent } from './user-type/patient/pages/treatments-by-patient/treatments-by-patient.component';
import { ProfileComponent } from './user-type/patient/pages/profile/profile.component';
import { MedicalHistoryComponent } from './user-type/patient/pages/profile/medical-history/medical-history.component';
import { HomeDoctorComponent } from './user-type/doctor/pages/home-doctor/home-doctor.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { SignupComponent } from './shared/pages/signup/signup.component';
import { HomePatientComponent } from './user-type/patient/pages/home-patient/home-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    PhysiotherapistsComponent,
    TreatmentsComponent,
    VideoSessionsComponent,
    SidenavComponent,
    ScheduleAppointmentsComponent,
    PaymentsComponent,
    MedicalAppointmentsComponent,
    TreatmentsInfoComponent,
    ProfessionalProfileComponent,
    HeaderComponent,
    ReviewsComponent,
    NewReviewComponent,
    TreatmentsByPatientComponent,
    ProfileComponent,
    MedicalHistoryComponent,
    HomeDoctorComponent,
    LoginComponent,
    SignupComponent,
    HomePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [TreatmentsService,PhysiotherapistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
