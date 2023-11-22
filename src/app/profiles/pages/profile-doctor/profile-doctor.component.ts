import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {User} from "../../../security/model/user";
import {UsersService} from "../../../security/services/users.service";

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.css']
})
export class ProfileDoctorComponent implements OnInit {

  physiotherapists: Physiotherapist[]=[]
  currentUser: number;
  user: User[] =[];

  constructor(private physiotherapistsService: PhysiotherapistsService, private userService: UsersService) {
    this.currentUser = Number(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.physiotherapistsService.getItemByField('userId',this.currentUser).subscribe((response:any)=>{
      this.physiotherapists.push(response);
      this.userService.getById(response.userId).subscribe(
        (res: any) => {
          this.user.push(res);
        }
      )
    });
  }

}
