import { Component, OnInit } from '@angular/core';
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {Physiotherapist} from "../../model/physiotherapist";

@Component({
  selector: 'app-physiotherapists',
  templateUrl: './physiotherapists.component.html',
  styleUrls: ['./physiotherapists.component.css']
})
export class PhysiotherapistsComponent implements OnInit {

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
