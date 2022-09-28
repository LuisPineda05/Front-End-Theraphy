import { Component, OnInit } from '@angular/core';
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {Physiotherapist} from "../../model/physiotherapist";

@Component({
  selector: 'app-medical-appointments',
  templateUrl: './medical-appointments.component.html',
  styleUrls: ['./medical-appointments.component.css']
})
export class MedicalAppointmentsComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];
  constructor(private physiotherapistsService: PhysiotherapistsService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists()
  }
  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response;
    })
  }
}
