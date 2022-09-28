import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-appointments',
  templateUrl: './schedule-appointments.component.html',
  styleUrls: ['./schedule-appointments.component.css']
})
export class ScheduleAppointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getInputValue(inputValue:string) {
    return inputValue;
  }

}
