import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../services/patients.service";
import {Patient} from "../../model/patient";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  patient$: Observable<Patient> | undefined;
  currentUser: number=1;
  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patient$=this.patientsService.getById(this.currentUser)
  }

}
