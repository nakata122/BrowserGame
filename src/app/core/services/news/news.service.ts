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
    }, err => {
      this.message = err.error.msg;
    });
  }

  getById(id) {
    this.http.get('http://127.0.0.1:3001/news/' + id, {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
      this.data = this.data.data;
    }, err => {
      this.message = err.error.msg;
    });
  }

  createNew(data) {
    this.http.post('http://127.0.0.1:3001/news/', data, {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
      this.router.navigate(['news']);
    }, err => {
      this.message = err.error.msg;
    });
  }

  editNews(data) {
    this.http.put('http://127.0.0.1:3001/news/' + data._id, data, {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
      this.router.navigate(['news']);
    }, err => {
      this.message = err.error.msg;
    });
  }

  deleteNews(id) {
    this.http.delete('http://127.0.0.1:3001/news/' + id, {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
    }, err => {
      this.message = err.error.msg;
    });
  }
}
