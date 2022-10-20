import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {NgFor} from "@angular/common";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {PatientsService} from "../../services/patients.service";
import {PhysiotherapistsService} from "../../services/physiotherapists.service";
import {Patient} from "../../model/patient";
import {Physiotherapist} from "../../model/physiotherapist";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData!: User;
  patientData: Patient;
  doctorData: Physiotherapist;

  submitted: boolean = false;
  isEditMode: boolean = false;
  types: string[] = [
    "patient", "physiotherapist"
  ]

  typee: string ="";


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
              private router: Router, private patientService: PatientsService, private physiotherapistService: PhysiotherapistsService) {
    this.userData = {} as User;
    this.patientData = {} as Patient;
    this.doctorData = {} as Physiotherapist;
  }

  ngOnInit(): void {
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
    this.usersService.create(this.registerForm.value).subscribe(response=>{
      if(this.userData.type == "patient") {
        this.patientData.user_id = this.userData.id;
        this.patientData.email = this.userData.email;
        this.patientData.appointment_quantity = 0;
        this.patientData.first_name = this.userData.first_name;
        this.patientData.last_name = this.userData.paternal_surname + " " + this.userData.maternal_surname;
        this.patientData.birthday = this.userData.birthday;
        this.patientData.age = 2022 - Number(this.userData.birthday.split('/')[2]);
        this.patientData.photo = "https://clinicamg.com/wp-content/uploads/2016/01/Jose.jpg";
        this.patientData.created_at = new Date().getDate().toString();
        this.patientData.id = 0;

        this.patientService.create(this.patientData).subscribe((response: any) => {});
      } else {
        this.doctorData.id = 0;
        this.doctorData.first_name = this.userData.first_name;
        this.doctorData.paternal_surname = this.userData.paternal_surname;
        this.doctorData.maternal_surname = this.userData.maternal_surname;
        this.doctorData.specialization = "Physiotherapy";
        this.doctorData.age = 2022 - Number(this.userData.birthday.split('/')[2]);
        this.doctorData.location = "Peru";
        this.doctorData.birthdate = this.userData.birthday;
        this.doctorData.email = this.userData.email;
        this.doctorData.rating = 0;
        this.doctorData.consultations_quantity = 0;
        this.doctorData.photo = "https://clinicamg.com/wp-content/uploads/2016/01/Jose.jpg";

        this.physiotherapistService.create(this.doctorData).subscribe((response: any) => {});
      }



      this.registerForm.reset();
      this.router.navigate(['login']);

    })




  }

}
