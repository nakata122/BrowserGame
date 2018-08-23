import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  topTen;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:3001/topTen', {withCredentials: true})
    .subscribe(resp => {
      this.topTen = resp;
      console.log(this.topTen);
    }, err => {
      this.message = err.error.msg;
    });
  }

}
