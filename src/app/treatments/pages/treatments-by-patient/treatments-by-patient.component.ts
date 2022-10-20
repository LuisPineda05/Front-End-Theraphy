import { Component, OnInit } from '@angular/core';
import {TreatmentsByPatient} from "../../model/treatments-by-patient";
import {TreatmentsByPatientService} from "../../services/treatments-by-patient.service";

@Component({
  selector: 'app-treatments-by-patient',
  templateUrl: './treatments-by-patient.component.html',
  styleUrls: ['./treatments-by-patient.component.css']
})
export class TreatmentsByPatientComponent implements OnInit {

 treatmentsByPatient: TreatmentsByPatient[]=[];
 currentUser: number = 1;

  constructor(private treatmentsByPatientService: TreatmentsByPatientService) { }

  ngOnInit(): void {
  this.getAllTreatmentsByPatient()
  }

  getAllTreatmentsByPatient(){
    this.treatmentsByPatientService.getAll().subscribe((response:any)=>{
      this.treatmentsByPatient = response;
    })
  }

}
