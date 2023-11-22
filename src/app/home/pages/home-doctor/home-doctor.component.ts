import { Component, OnInit } from '@angular/core';
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {Treatment} from "../../../treatments/model/treatment";
import {Patient} from "../../../security/model/patient";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {PatientsService} from "../../../security/services/patients.service";
import {TreatmentsService} from "../../../treatments/services/treatments.service";
import {Appointments} from "../../../appointments/model/appointments";
import {AppointmentsService} from "../../../appointments/services/appointments.service";
import {UsersService} from "../../../security/services/users.service";
import {User} from "../../../security/model/user";

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
  currentUser: number;
  aea:number = 0;

  constructor(private physiotherapistsService: PhysiotherapistsService, private treatmentsService: TreatmentsService,
              private patientsService: PatientsService, private appointmentsService: AppointmentsService,
              private userService: UsersService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));
    //this.currentUser = 1;
  }

  ngOnInit(): void {
    this.getAllPhysiotherapists();
    this.getAllTreatments();
    this.getAllPatients();
    this.getAllAppointments();
  }

  getName(patient3: Patient): any {
    this.userService.getById(patient3.userId).subscribe(
      (response: any) => {
        return response;
      }
    )
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response.content;
      for(let i = 0; i<this.physiotherapists.length;i++){
        if(this.physiotherapists[i].userId == this.currentUser) {
          this.currentUser = this.physiotherapists[i].id;
        }
      }
    })
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response.content;
    })


  }

  getAllPatients(){
    this.patientsService.getAll().subscribe((response: any)=>{
      this.patients=response.content;
    })
  }

  getAllAppointments() {
    this.appointmentsService.getAll().subscribe((response: any)=>{
      this.appointments=response.content;
      this.getMyPatients();
    })

  }

  getMyPatients() {
    this.appointments.forEach(element => {
      if(this.currentUser == element.physiotherapistId) {
        this.patients.forEach(element2 => {
          if(element2.id == element.patientId) {
            this.myPatients.push(element2);
          }
        })
      }
    })

  }
}
