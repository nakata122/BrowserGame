import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  newsData = {title: '', imageUrl: '', content: ''};
  constructor(private News: NewsService) { }

  ngOnInit() {
  }

  createNews() {
    this.News.createNew(this.newsData);
  }
}
