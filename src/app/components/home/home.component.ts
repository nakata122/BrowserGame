import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import splashScreen from './splashScreen';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, AfterViewInit {
  animation;
  registerData = { username: '', password: '', password2: '' };
  message = '';
  data: any;
  constructor(private http: HttpClient) { }

  @ViewChild('myCanvas') myCanvas: ElementRef;

  ngOnInit() {
    this.animation = new splashScreen();
  }
  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.animation.init(canvas);
  }
  register() {
    this.http.post('http://127.0.0.1:3001/register', this.registerData, {withCredentials: true})
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
