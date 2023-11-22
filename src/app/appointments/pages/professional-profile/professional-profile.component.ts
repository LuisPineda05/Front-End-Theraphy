import { Component, OnInit } from '@angular/core';
import {Observable, take} from "rxjs";
import {Physiotherapist} from "../../../security/model/physiotherapist";
import {ActivatedRoute} from "@angular/router";
import {PhysiotherapistsService} from "../../../security/services/physiotherapists.service";
import {User} from "../../../security/model/user";
import {UsersService} from "../../../security/services/users.service";

@Component({
  selector: 'app-professional-profile-patient',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {
  physiotherapist$: Observable<Physiotherapist> | undefined
  user: User[]=[];
  constructor(private route:ActivatedRoute, private physiotherapistsService: PhysiotherapistsService, private userService: UsersService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=> {
      const id = params['id'];
      this.physiotherapist$ = this.physiotherapistsService.getById(id);
      this.physiotherapist$.subscribe(
        (response: any) =>
        {
          this.userService.getById(response.userId).subscribe(
            (res:any) => {
              this.user.push(res);
            }
          );
        }
      );
    })
  }

}
