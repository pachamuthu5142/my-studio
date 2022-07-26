import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata = { FullName: "", mobile: "",email:"",password:"" };
  submit = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
console.log(this.formdata);
  }
}
