import { Component } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';


@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html'
})  
export class LoginComponent {}
