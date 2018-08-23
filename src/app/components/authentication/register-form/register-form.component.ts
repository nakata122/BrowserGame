import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerData = { username: '', password: '', password2: '' };
  message = '';
  data: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.registerData);
  }
}
