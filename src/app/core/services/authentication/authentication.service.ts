import { Injectable } from '@angular/core';
import { LoginInputModel } from '../../models/input-models/login.input.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  redirectUrl: string;
  message: string;
  data: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(loginModel: LoginInputModel): void {
    this.http.post('http://127.0.0.1:3001/login', loginModel, {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
      console.log(resp);
      localStorage.setItem('username', this.data.username);
      this.router.navigate(['']);
    }, err => {
      this.message = err.error.msg;
    });
  }

  register(registerData): void {
    this.http.post('http://127.0.0.1:3001/register', registerData, {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
      console.log(resp);
      localStorage.setItem('username', this.data.username);
      this.router.navigate(['']);
    }, err => {
      this.message = err.error.msg;
    });
  }

  logout(): void {
    localStorage.setItem('username', '');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('username') !== '') {
      return true;
    } else {
      return false;
    }
  }

  tryNavigate() {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } else {
      this.router.navigate(['']);
    }
  }
}
