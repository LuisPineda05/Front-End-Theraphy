import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../security/services/patients.service";
import {Patient} from "../../../security/model/patient";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  patient$: Observable<Patient> | undefined;
  currentUser: number=1;
  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patient$=this.patientsService.getById(this.currentUser)
  }

}
