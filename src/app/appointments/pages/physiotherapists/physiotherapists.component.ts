import { Component, OnInit } from '@angular/core';
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {Treatment} from "../../../treatments/model/treatment";
import {UsersService} from "../../../security/services/users.service";
import {User} from "../../../security/model/user";

@Component({
  selector: 'app-physiotherapists',
  templateUrl: './physiotherapists.component.html',
  styleUrls: ['./physiotherapists.component.css']
})
export class PhysiotherapistsComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[];
  user: User[]=[];

  constructor(private physiotherapistsService: PhysiotherapistsService, private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllPhysiotherapists()
  }

  getAllPhysiotherapists(){
    this.physiotherapistsService.getAll().subscribe((response: any) =>{
      this.physiotherapists = response.content;
    })
  }


    getPhysiotherapistByQuery(name: string, physiotherapistsFiltered: Physiotherapist[] = [], found: boolean = false) {

    for(let i = 0; i < this.physiotherapists.length; i++) {
      this.userService.getById(this.physiotherapists[i].userId).subscribe((response: any) =>
        {
          this.user.push(response.content);
        }
      );
      if(this.user[0].firstname.includes(name) ||
        this.user[0].lastname.includes(name)){
        physiotherapistsFiltered.push(this.physiotherapists[i]);
        found = true;
      } else{
        this.user = [];
      }
    }

    if(found && name!="") {
      this.physiotherapists=  physiotherapistsFiltered;
    } else{
      this.getAllPhysiotherapists();
    }



  }
}
