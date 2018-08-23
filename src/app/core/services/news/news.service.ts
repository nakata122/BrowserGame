import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { News } from '../../models/view-models/news.view.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  redirectUrl: string;
  message: string;
  data: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAll() {
    this.http.get('http://127.0.0.1:3001/news', {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
      console.log(resp);
    }, err => {
      this.message = err.error.msg;
    });
  }

  getById(id) {

  }
}
