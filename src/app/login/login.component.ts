import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "login";
  input_email = "gebruikersnaam";
  input_password = "wachtwoord";

  constructor() { }

  ngOnInit() {
  }

  login() { }

}
