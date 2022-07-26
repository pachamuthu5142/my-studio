import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata={email:"",password:""};
  submit=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
