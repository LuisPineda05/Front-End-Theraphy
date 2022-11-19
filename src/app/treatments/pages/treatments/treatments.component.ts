import { Component, OnInit} from '@angular/core';
import {Treatment} from "../../model/treatment";
import {TreatmentsService} from "../../services/treatments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../security/services/users.service";




@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments: Treatment[]=[];
  userType: String;
  types:String []=["patient", "physiotherapist"]


  constructor(private usersService: UsersService, private treatmentsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {
  this.userType="";
  }

  ngOnInit(): void {

    this.usersService.getById(Number(sessionStorage.getItem("userId"))).subscribe((response:any)=>{
     this.userType= String(response.type);
    })


    this.getAllTreatments();
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{
      this.treatments = response;
    })
  }

  getTreatmentByQuery(title: string){
    if(title?.length) {
      this.treatmentsService.getItemByField('title',title).subscribe((response: any)=> {
          this.treatments = response;
        }
      )}else{
      this.getAllTreatments();
    }
  }

}
