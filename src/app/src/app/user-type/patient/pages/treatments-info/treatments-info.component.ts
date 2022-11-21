import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Treatment} from "../../model/treatment";
import {ActivatedRoute} from "@angular/router";
import {TreatmentsService} from "../../services/treatments.service";

@Component({
  selector: 'app-treatments-info',
  templateUrl: './treatments-info.component.html',
  styleUrls: ['./treatments-info.component.css']
})
export class TreatmentsInfoComponent implements OnInit {
  treatment$: Observable<Treatment> | undefined;

  constructor(private route: ActivatedRoute, private treatmentsService: TreatmentsService ) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.treatment$ = this.treatmentsService.getById(id);
    });
  }

}
