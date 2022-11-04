import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {NgFor} from "@angular/common";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {PatientsService} from "../../services/patients.service";
import {Patient} from "../../model/patient";
import {Physiotherapist} from "../../model/physiotherapist";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData!: User;
  newUser: User;
  users: User[]=[];
  newPatient: Patient;

  newPhysiotherapist: Physiotherapist;
  submitted: boolean = false;
  isEditMode: boolean = false;
  types: string[] = [
    "patient", "physiotherapist"
  ]


  @ViewChild('signupForm', {static: false})
  signupForm!: NgForm;

  registerForm: FormGroup = this.formBuilder.group({
    first_name: ['', {validators: [Validators.required], updatedOn: 'change'}],
    paternal_surname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    maternal_surname: ['', {validators: [Validators.required], updatedOn: 'change'}],
    password: ['', {validators: [Validators.required], updatedOn: 'change'}],
    email: ['', {validators: [Validators.required], updatedOn: 'change'}],
    birthday: ['', {validators: [Validators.required], updatedOn: 'change'}],
    type: ['', {validators: [Validators.required], updatedOn: 'change'}],
  })

  constructor(private usersService: UsersService, private formBuilder: FormBuilder,
              private router: Router, private physiotherapistsService: PhysiotherapistsService, private patientsService: PatientsService) {
    this.userData = {} as User;
    this.newUser={}as User;
    this.newPatient={}as Patient;
    this.newPhysiotherapist={}as Physiotherapist;
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((response: any) =>{
      this.users=response;
      console.log(this.users.length)
    })
  }

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get paternal_surname() {
    return this.registerForm.get('paternal_surname');
  }

  get maternal_surname() {
    return this.registerForm.get('maternal_surname');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get birthday () {
    return this.registerForm.get('birthday');
  }

  get type() {
    return this.registerForm.get('type');
  }

  addUser(){
    this.newUser.id=0;
    this.newUser.email=this.registerForm.value.email;
    this.newUser.password=this.registerForm.value.password;
    this.newUser.type=this.registerForm.value.type;


    this.usersService.create(this.newUser).subscribe(response=>{


      if(this.newUser.type=="patient"){

        this.newPatient.id=0;

        this.newPatient.user_id=Number(this.users.length+1);

        this.newPatient.first_name=this.userData.first_name;
        this.newPatient.last_name=this.userData.paternal_surname+" "+this.userData.maternal_surname;


        this.newPatient.age=Number(new Date().getFullYear())-Number(this.userData.birthday.split('/')[2]);
        this.newPatient.birthday=this.userData.birthday;
        this.newPatient.email=this.userData.email;
        this.newPatient.appointment_quantity=0;
        this.newPatient.photo="https://clinicamg.com/wp-content/uploads/2016/01/Jose.jpg";
        this.newPatient.created_at=new Date().toLocaleDateString();

        this.patientsService.create(this.newPatient).subscribe();
      }else{
        this.newPhysiotherapist.id=0;

        this.newPhysiotherapist.user_id=Number(this.users.length+1);

        this.newPhysiotherapist.first_name=this.userData.first_name;
        this.newPhysiotherapist.paternal_surname=this.userData.paternal_surname
        this.newPhysiotherapist.maternal_surname=this.userData.maternal_surname;
        this.newPhysiotherapist.specialization="";
        this.newPhysiotherapist.age=Number(new Date().getFullYear())-Number(this.userData.birthday.split('/')[2]);
        this.newPhysiotherapist.location="";
        this.newPhysiotherapist.birthdate=this.userData.birthday;
        this.newPhysiotherapist.email=this.userData.email;
        this.newPhysiotherapist.rating=0;
        this.newPhysiotherapist.consultations_quantity=0;
        this.newPatient.photo="https://clinicamg.com/wp-content/uploads/2016/01/Jose.jpg";

        this.physiotherapistsService.create(this.newPhysiotherapist).subscribe();
      }

      this.registerForm.reset();

      this.router.navigate(['login']);
    })






  }

}
