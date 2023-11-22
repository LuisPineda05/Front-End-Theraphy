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
import {Treatment} from "../../../treatments/model/treatment";
import {User} from "../../../security/model/user";

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

  patient: Patient[] = [];
  physiotherapist: Physiotherapist[] = [];
  user: User[] = [];

  constructor(private route:ActivatedRoute, private usersService: UsersService, private appointmentsService: AppointmentsService,
              private patientService: PatientsService, private physiotherapistService: PhysiotherapistsService) {
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
      this.appointments = response.content;
    })
  }




  filterToDone(){
    this.filter=true;
  }

  filterToToDO(){
    this.filter=false;
  }



  getAppointmentByPhysiotherapistName(name: string, appointmentsFiltered: Appointments[] = [], found: boolean = false) {

    for(let i = 0; i < this.appointments.length; i++) {

      this.physiotherapistService.getById(this.appointments[i].physiotherapistId).subscribe(
        (response: any) => {
          this.physiotherapist.push(response);

          this.usersService.getById(response.userId).subscribe(
            (res: any) =>
            {
              this.user.push(res);
            }
          )

        }
      );


      if(this.user[0].firstname.includes(name)
      || this.user[0].lastname.includes(name) ){
        appointmentsFiltered.push(this.appointments[i]);
        found = true;
      } else {
        this.user = [];
        this.physiotherapist = [];
      }
    }

    if(found && name!="") {
      this.appointments= appointmentsFiltered;
    } else{
      this.getAllAppointments();
    }



  }



    getAppointmentByPatientName(name: string, appointmentsFiltered: Appointments[] = [], found: boolean = false) {

    for(let i = 0; i < this.appointments.length; i++) {
      this.patientService.getById(this.appointments[i].patientId).subscribe(
        (response: any) => {
          this.patient.push(response);

          this.usersService.getById(response.userId).subscribe(
            (res: any) =>
            {
              this.user.push(res);
            }
          )

        }
      );



      if(this.user[0].firstname.includes(name) ||
        this.user[0].lastname.includes(name)
      ){
        appointmentsFiltered.push(this.appointments[i]);
        found = true;
      } else {
        this.patient = [];
        this.user = [];
      }
    }

    if(found && name!="") {
      this.appointments=  appointmentsFiltered;
    } else{
      this.getAllAppointments();
    }



  }


}
