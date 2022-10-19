import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {NgFor} from "@angular/common";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData!: User;
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
              private router: Router) {
    this.userData = {} as User;
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
      this.registerForm.reset();
      this.router.navigate(['login']);
    })
  }

}
