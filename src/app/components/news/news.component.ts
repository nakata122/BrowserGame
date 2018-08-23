import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { NewsService } from '../../core/services/news/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private News: NewsService, private router: Router ) { }

  ngOnInit() {
    this.News.getAll();
  }

  getArticle(article) {
    this.router.navigate(['/article/' + article._id]);
  }
}
