import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../security/services/patients.service";
import {Patient} from "../../../security/model/patient";
import {Observable} from "rxjs";
import {User} from "../../../security/model/user";
import {UsersService} from "../../../security/services/users.service";

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  patients: Patient[]=[];
  currentUser: number;
  user: User[] =[];

  constructor(private patientsService: PatientsService, private userService: UsersService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));

  }

  ngOnInit(): void {
   this.patientsService.getItemByField("userId",this.currentUser).subscribe((response:any)=>{
     this.patients.push(response);
     this.userService.getById(response.userId).subscribe(
       (res: any) => {
         this.user.push(res);
       }
     )
   });
  }

}
