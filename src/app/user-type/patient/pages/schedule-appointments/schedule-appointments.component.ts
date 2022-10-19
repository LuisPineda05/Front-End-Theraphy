import {Component, OnInit, ViewChild} from '@angular/core';
import {Appointments} from "../../../../shared/model/appointments";
import {AppointmentsService} from "../../../../shared/services/appointments.service";
import {NgForm} from "@angular/forms";
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {PatientsService} from "../../services/patients.service";

@Component({
  selector: 'app-schedule-appointments',
  templateUrl: './schedule-appointments.component.html',
  styleUrls: ['./schedule-appointments.component.css']
})
export class ScheduleAppointmentsComponent implements OnInit {
  physiotherapist$: Observable<Physiotherapist> | undefined

  appointmentData: Appointments;

  currentUser: number=1;
  date: string;

  //slicedate: string;





  @ViewChild('appointmentForm', {static: false})
  appointmentForm!: NgForm;


  constructor(private appointmentsService: AppointmentsService, private route:ActivatedRoute, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) {
    this.appointmentData = {} as Appointments;
    this.date = "";

  }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getById(id);
      console.log(id)
      this.appointmentData.physiotherapist_id=Math.floor(id);
    })

    this.patientsService.getById(this.currentUser).subscribe((response: any) =>{
      this.appointmentData.patient_name=response.first_name+' '+response.last_name;
    })

    this.physiotherapistsService.getById(this.appointmentData.physiotherapist_id).subscribe((response: any) =>{
      this.appointmentData.physiotherapist_name=response.first_name+' '+response.paternal_surname;
    })
  }


  addAppointment(){
    this.appointmentData.id = 0;
    this.appointmentData.patient_id=this.currentUser;

    const slicedate = new Date(this.date).toLocaleString();
    this.appointmentData.date = slicedate.split(',')[0];
    this.appointmentData.done=false;
    this.appointmentData.diagnosis="";

    this.appointmentsService.create(this.appointmentData).subscribe((response:any) =>{})
  }


  onSubmit(){
    if(this.appointmentForm.form.valid){
      console.log(' about to add');
      this.addAppointment();
    }
  }

}
