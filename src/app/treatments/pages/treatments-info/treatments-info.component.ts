import {Component, Inject, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {Treatment} from "../../model/treatment";
import {ActivatedRoute, Router} from "@angular/router";
import {TreatmentsService} from "../../services/treatments.service";
import {TreatmentsByPatient} from "../../model/treatments-by-patient";
import {TreatmentsByPatientService} from "../../services/treatments-by-patient.service";


@Component({
  selector: 'app-treatments-info',
  templateUrl: './treatments-info.component.html',
  styleUrls: ['./treatments-info.component.css']
})
export class TreatmentsInfoComponent implements OnInit {
  treatment$: Observable<Treatment> | undefined;
  treatmentsByPatient: TreatmentsByPatient[]=[];
  newTreatmentByPatient: TreatmentsByPatient;
  currentUser: number;
  treatmentInfoId: number=0;

  constructor(private route: ActivatedRoute,private navigator:Router, private treatmentsService: TreatmentsService, private treatmentsByPatientService: TreatmentsByPatientService ) {
    this.newTreatmentByPatient={}as TreatmentsByPatient;
    this.currentUser = Number(sessionStorage.getItem("userId"));

  }


  ngOnInit(): void {
     this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.treatmentInfoId=id;
      this.treatment$ = this.treatmentsService.getById(id);

      //Filling NewTreatmentByPatient

       this.treatmentsService.getById(id).subscribe((response:any)=>{
         this.newTreatmentByPatient.title= response.title;
         this.newTreatmentByPatient.description= response.description;
         this.newTreatmentByPatient.sessions_quantity= response.sessions_quantity;
         this.newTreatmentByPatient.physiotherapist_id= response.physiotherapist_id;
         this.newTreatmentByPatient.photo= response.photo;
         this.newTreatmentByPatient.videos_sessions= response.videos_sessions;
       })

       this.newTreatmentByPatient.id=0;
       this.newTreatmentByPatient.treatment_id=Math.floor(id);
       this.newTreatmentByPatient.patient_id=this.currentUser;
       this.newTreatmentByPatient.registration_date=new Date().toLocaleDateString();
       this.newTreatmentByPatient.progress=0;




    });

    this.treatmentsByPatientService.getAll().subscribe((response:any)=>{
      this.treatmentsByPatient = response;

    });

  }

  addTreatmentByPatient(){

      if(this.treatmentsByPatient.find(treatmentByPatient =>treatmentByPatient.patient_id===this.newTreatmentByPatient.patient_id && treatmentByPatient.treatment_id===this.newTreatmentByPatient.treatment_id)){
        this.navigator.navigate(['/video-sessions', this.newTreatmentByPatient.treatment_id]);
      }else{
        this.treatmentsByPatientService.create(this.newTreatmentByPatient).subscribe((response: any) => {});
        this.navigator.navigate(['/video-sessions', this.newTreatmentByPatient.treatment_id]);
      }

    }

}
