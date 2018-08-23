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

  constructor(private http: HttpClient) { }

  @ViewChild('myCanvas') myCanvas: ElementRef;

  ngOnInit() {
    this.animation = new splashScreen();
  }
  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.animation.init(canvas);
  }
}
