import { Component, OnInit } from '@angular/core';
import {Review} from "../../model/review";
import {ActivatedRoute} from "@angular/router";
import {ReviewsService} from "../../services/reviews.service";
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../model/physiotherapist";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews$: Review[]=[]
  physiotherapist$: Observable<Physiotherapist> | undefined


  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService, private physiotherapistsService: PhysiotherapistsService) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];

      this.physiotherapist$ = this.physiotherapistsService.getById(id);

      this.reviewsService.getItemByField("physiotherapist_id", id).subscribe((response:any)=>{
        this.reviews$=response;
     });

    });
  }

}
