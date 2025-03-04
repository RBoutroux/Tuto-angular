import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent {
  loginData: FormGroup;

  constructor(private _authenticate: AuthenticateService, private router: Router) {
    this.loginData = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.loginData = new FormGroup({login : new FormControl(), password : new FormControl()});
  }

  authenticateUser(): void {
    var loginValue = this.loginData.value.login;
    var passwordValue = this.loginData.value.password;
    var res = JSON.parse(this._authenticate.checkAuthenticate(loginValue, passwordValue));
    console.log(res);
    var ok = res.ok;
    if(ok == 1) {
      // DO SOMETHING
      this.router.navigate(["users"]);
    }
  }
}
