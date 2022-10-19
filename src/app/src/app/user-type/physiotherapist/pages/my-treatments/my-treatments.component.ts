import { Component, OnInit } from '@angular/core';
import {Treatment} from "../../../patient/model/treatment";
import {TreatmentsService} from "../../../patient/services/treatments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-treatments',
  templateUrl: './my-treatments.component.html',
  styleUrls: ['./my-treatments.component.css']
})
export class MyTreatmentsComponent implements OnInit {

  treatments: Treatment[]=[];

  constructor(private treatmentsService: TreatmentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllTreatments();
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response;
    })
  }

}
