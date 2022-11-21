import { Component, OnInit } from '@angular/core';
import {Treatment} from "../../../patient/model/treatment";
import {TreatmentsService} from "../../../patient/services/treatments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrls: ['./new-treatment.component.css']
})
export class NewTreatmentComponent implements OnInit {

  treatments: Treatment[]=[];

  constructor(private treatmentsService: TreatmentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
