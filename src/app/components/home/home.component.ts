import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import splashScreen from './splashScreen';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, AfterViewInit {
  animation;
  constructor() { }

  @ViewChild('myCanvas') myCanvas: ElementRef;

  ngOnInit() {
    this.animation = new splashScreen();
  }
  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.animation.init(canvas);
  }
}
