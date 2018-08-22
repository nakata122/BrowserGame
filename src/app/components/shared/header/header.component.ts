import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestOptions, RequestMethod, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginData = { username: '', password: '' };
  message = '';
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('Accept', 'application/json');
    this.http.post('http://127.0.0.1:3001/login', this.loginData, {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
      console.log(resp);
      localStorage.setItem('username', this.data.username);
      // this.router.navigate(['/']);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
