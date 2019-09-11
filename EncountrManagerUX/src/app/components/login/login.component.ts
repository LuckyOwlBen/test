import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginService } from '../../services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });
  submitted = false;

  constructor(
    private loginService:LoginService
  ){}

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
  }
}
