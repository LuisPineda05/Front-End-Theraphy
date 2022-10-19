import { Component, OnInit } from '@angular/core';
import {Physiotherapist} from "../../../patient/model/physiotherapist";
import {Treatment} from "../../../patient/model/treatment";
import {Patient} from "../../model/patient";
import {PhysiotherapistsService} from "../../../patient/services/physiotherapists.service";
import {PatientsService} from "../../services/patients.service";
import {TreatmentsService} from "../../../patient/services/treatments.service";
import {Appointments} from "../../../../shared/model/appointments";
import {AppointmentsService} from "../../../../shared/services/appointments.service";

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];
  treatments: Treatment[]=[];
  patients: Patient[] = [];
  appointments: Appointments[]=[];
  myPatients: Patient[]=[];
  currentUser: number = 1;
  aea:number = 0;

  constructor(private physiotherapistsService: PhysiotherapistsService, private treatmentsService: TreatmentsService,
              private patientsService: PatientsService, private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists();
    this.getAllTreatments();
    this.getAllPatients();
    this.getAllAppointments();
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
    this.getMyPatients();

  }

  getAllPatients(){
    this.patientsService.getAll().subscribe((response: any)=>{
      this.patients=response;
    })
  }

  getAllAppointments() {
    this.appointmentsService.getAll().subscribe((response: any)=>{
      this.appointments=response;
    })
  }

  getMyPatients() {
    this.appointments.forEach(element => {
      if(this.currentUser == element.physiotherapist_id) {
        this.patients.forEach(element2 => {
          if(element2.id == element.patient_id) {
            this.myPatients.push(element2);
          }
        })
      }
    })

  }
}
