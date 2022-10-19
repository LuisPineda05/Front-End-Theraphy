import { Component, OnInit } from '@angular/core';
import {Physiotherapist} from "../../model/physiotherapist";
import {Treatment} from "../../model/treatment";
import {TreatmentsByPatient} from "../../model/treatments-by-patient";
import {Appointments} from "../../../../shared/model/appointments";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {TreatmentsService} from "../../services/treatments.service";
import {TreatmentsByPatientService} from "../../services/treatments-by-patient.service";
import {AppointmentsService} from "../../../../shared/services/appointments.service";

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];
  treatments: Treatment[]=[];
  myTreatments: TreatmentsByPatient[]=[];
  appointments: Appointments[]=[];
  currentUser: number = 1;

  constructor(private physiotherapistsService: PhysiotherapistsService, private treatmentsService: TreatmentsService,
              private myTreatmentsService: TreatmentsByPatientService, private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists();
    this.getAllTreatments();
    this.getAllMyTreatments();
    this.getAllAppointments();
  }

  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) => {
      this.appointments = response;
    })
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response;
    })
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response;
    })
  }

  getAllMyTreatments(){
    this.myTreatmentsService.getAll().subscribe((response: any)=>{
      this.myTreatments = response;
    })
  }
}
