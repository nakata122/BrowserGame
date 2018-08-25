import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  data;
  auctions;
  splitData = [];
  message;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  addItem() {
    this.http.get('http://127.0.0.1:3001/randomItem', {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
      this.getAll();
    }, err => {
      this.message = err.error.msg;
    });
  }

  getAll() {
    this.http.get('http://127.0.0.1:3001/inventory', {withCredentials: true})
    .subscribe(resp => {
      this.data = resp;
      this.data = this.data.inventory;
      for (let i = 0; i < Math.ceil(this.data.length / 10); i++) {
        this.splitData[i] = [];
      }
      for (let i = 0; i < this.data.length; i++) {
        this.splitData[Math.floor(i / 10)].push(this.data[i]);
      }
      console.log(this.splitData);
      console.log(resp);
    }, err => {
      this.message = err.error.msg;
    });
  }

  createItem(item) {
    this.http.post('http://127.0.0.1:3001/items/', item, {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
      this.router.navigate(['inventory']);
    }, err => {
      this.message = err.error.msg;
    });
  }

  postAuction(item) {
    this.http.post('http://127.0.0.1:3001/auction/', item, {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
    }, err => {
      this.message = err.error.msg;
    });
  }

  getAuctions() {
    this.http.get('http://127.0.0.1:3001/auction', {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
      this.auctions = resp;
      this.auctions = this.auctions.auctions;
    }, err => {
      this.message = err.error.msg;
    });
  }

  bid(id) {
    this.http.post('http://127.0.0.1:3001/bid/' + id, {}, {withCredentials: true})
    .subscribe(resp => {
      console.log(resp);
      this.getAuctions();
    }, err => {
      this.message = err.error.msg;
    });
  }
}
