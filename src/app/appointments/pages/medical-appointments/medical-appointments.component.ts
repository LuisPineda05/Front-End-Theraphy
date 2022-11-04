import { Component, OnInit } from '@angular/core';
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {Appointments} from "../../model/appointments";
import {AppointmentsService} from "../../services/appointments.service";
import {UsersService} from "../../../security/services/users.service";
import {Observable, take} from "rxjs";
import {Patient} from "../../../security/model/patient";
import {PatientsService} from "../../../security/services/patients.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-medical-appointments',
  templateUrl: './medical-appointments.component.html',
  styleUrls: ['./medical-appointments.component.css']
})
export class MedicalAppointmentsComponent implements OnInit {

  appointments: Appointments[]=[];
  physiotherapists: Physiotherapist[]=[];
  currentUser: number;
  filter:boolean;

  userType: String;
  types:String []=["patient", "physiotherapist"]


  constructor(private route:ActivatedRoute, private usersService: UsersService, private appointmentsService: AppointmentsService) {
    this.currentUser = Number(sessionStorage.getItem("typeId"));
    this.filter=true;
    this.userType="";

  }

  ngOnInit(): void {
    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
      this.userType= String(response.type);
    })

    this.getAllAppointments();
  }
  getAllAppointments(){
    this.appointmentsService.getAll().subscribe((response: any) =>{
      this.appointments = response;
    })
  }




  filterToDone(){
    this.filter=true;
  }

  filterToToDO(){
    this.filter=false;
  }

  getAppointmentByPhyName(name: string){
    if(name?.length) {
      this.appointmentsService.getItemByField('physiotherapist_name',name).subscribe((response: any)=> {
          this.appointments= response;
        }
      )}else{
      this.getAllAppointments();
    }
  }

  getAppointmentByPatName(name: string){
    if(name?.length) {
      this.appointmentsService.getItemByField('patient_name',name).subscribe((response: any)=> {
          this.appointments= response;
        }
      )}else{
      this.getAllAppointments();
    }
  }
}
