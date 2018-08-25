import { Injectable } from '@angular/core';
import { LoginInputModel } from '../../models/input-models/login.input.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  message: string;
  data: any;
  user;
  waiting = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(loginModel: LoginInputModel): void {
    this.http.post('http://127.0.0.1:3001/login', loginModel, {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
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
      if (this.data.type === 'info') {
        this.login(registerData);
      }
    }, err => {
      this.message = err.error.msg;
    });
  }

  logout(): void {
    localStorage.setItem('username', '');
    this.user = '';
    if (this.router.url !== '/') {
      this.router.navigate(['']);
    }
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('username') !== '') {
      if (!this.user && !this.waiting) {
        this.waiting = true;
        this.http.get('http://127.0.0.1:3001/roles', {withCredentials: true})
        .subscribe(resp => {
          this.user = resp;
          this.waiting = false;
          console.log(resp);
        }, err => {
          this.logout();
          this.waiting = false;
          this.message = err.error.msg;
        });
      }
      return true;
    } else {
      this.user = '';
      return false;
    }
  }
  isAdmin(): boolean {
    if (this.user) {
      if (this.user.roles.includes('admin')) {
        return true;
      }
    }
    return false;
  }
}
