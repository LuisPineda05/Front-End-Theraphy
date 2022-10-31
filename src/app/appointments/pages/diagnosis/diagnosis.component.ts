import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, take} from "rxjs";
import {Appointments} from "../../model/appointments";
import {Patient} from "../../../security/model/patient";
import {AppointmentsService} from "../../services/appointments.service";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {PatientsService} from "../../../security/services/patients.service";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  patient$: Observable<Patient> | undefined
  physiotherapist$: Observable<Physiotherapist> | undefined
  appointmentData$!: Appointments


  currentUser: number;

  @ViewChild('appointmentForm', {static: false})
  appointmentForm!: NgForm;

  constructor(private appointmentsService: AppointmentsService, private route:ActivatedRoute, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));

  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.patient$ = this.patientsService.getById(id);
      console.log(id)
     // this.appointmentData.patient_id=Math.floor(id);
      //console.log(this.appointmentData)
      this.appointmentsService.getById(id).subscribe((response:any)=>{
        this.appointmentData$ = response;
      })

    })

    /* this.physiotherapistsService.getById(this.currentUser).subscribe((response: any) =>{
     this.appointmentData.physiotherapist_name=response.first_name+' '+response.paternal_surname;
    })

    this.patientsService.getById(this.appointmentData.patient_id).subscribe((response: any) =>{
      this.appointmentData.patient_name=response.first_name+' '+response.last_name;
    })*/
  }

 /* addDiagnosis(){
    this.appointmentData.id = 0;
    this.appointmentData.physiotherapist_id=this.currentUser;

    this.appointmentData.done=false;

    this.appointmentsService.create(this.appointmentData).subscribe((response:any) =>{})
  }*/

  updateDiagnosis(){
   this.appointmentData$.done = true;
   this.appointmentsService.update(this.appointmentData$.id, this.appointmentData$) //escucharte a esta hora debería ser grabado <3 xddd
      .subscribe((response:any) => {
      });
  }

  onSubmit(){
    if(this.appointmentForm.form.valid){
      console.log(' about to update');
      this.updateDiagnosis();
    }
  }

}
