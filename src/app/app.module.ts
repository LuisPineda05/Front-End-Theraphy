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
import { TreatmentsComponent } from './user-type/patient/pages/treatments/treatments.component';
import {TreatmentsService} from "./user-type/patient/services/treatments.service";
import { VideoSessionsComponent } from './user-type/patient/pages/video-sessions/video-sessions.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ScheduleAppointmentsComponent } from './user-type/patient/pages/schedule-appointments/schedule-appointments.component';
import { PaymentsComponent } from './user-type/patient/pages/payments/payments.component';
import { MedicalAppointmentsComponent } from './user-type/patient/pages/medical-appointments/medical-appointments.component';
import { TreatmentsInfoComponent } from './user-type/patient/pages/treatments-info/treatments-info.component';

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
    TreatmentsInfoComponent
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
    MatSelectModule
  ],
  providers: [TreatmentsService,PhysiotherapistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
