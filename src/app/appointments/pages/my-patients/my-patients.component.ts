import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../security/services/users.service";
import {AppointmentsService} from "../../services/appointments.service";
import {Appointments} from "../../model/appointments";
import {Patient} from "../../../security/model/patient";
import {PatientsService} from "../../../security/services/patients.service";
import {User} from "../../../security/model/user";

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {
  currentUser: number;
  appointments: Appointments[]=[];
  patients: Patient[]=[];
  myPatients: Patient[]=[];
  user: User[] = [];

  constructor(private usersService: UsersService, private appointmentsService: AppointmentsService,
              private patientService: PatientsService, private userService: UsersService) {
    this.currentUser = Number(sessionStorage.getItem("typeId"));

  }

  ngOnInit(): void {
    this.appointmentsService.getAll().subscribe((response: any) =>{
      this.appointments = response.content;

      this.patientService.getAll().subscribe((response: any) =>{
          this.patients = response.content;
          this.getPatients();
        }
      )
    })
  }


  getPatients(){

    for(let i = 0; i < this.appointments.length; i++){

      if(this.appointments[i].physiotherapistId == this.currentUser) {

        for(let j = 0; j < this.patients.length; j++) {
          if(this.patients[j].id == this.appointments[i].patientId
          && this.equalElement(this.patients[j].id)) {

            this.myPatients.push(this.patients[j]);

          }
        }
      }
    }
  }

  equalElement(a: number){
    for(let i = 0; i < this.myPatients.length; i++) {
      if(this.myPatients[i].id == a){
        return false;
      }
    }
    return true;
  }

  getPat(name: string, patientsFiltered: Patient[] = [], found: boolean = false) {

    for(let i = 0; i < this.myPatients.length; i++) {
      this.usersService.getById(this.myPatients[i].userId).subscribe(
        (response: any) => {
          this.user.push(response);
        }
      )

      if(this.user[0].firstname.includes(name) ||
        this.user[0].lastname.includes(name)){
        patientsFiltered.push(this.myPatients[i]);
        found = true;
      }else {
        this.user = [];
      }
    }

    if(found && name!="") {
      this.myPatients = patientsFiltered;
    } else{
      this.getPatients();
    }



  }


}
