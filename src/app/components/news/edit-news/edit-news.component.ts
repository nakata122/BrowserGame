import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../core/services/news/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  newsData = {_id: '', title: '', imageUrl: '', content: ''};

  constructor(
    private News: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.News.getById(params['id']);
      this.newsData = this.News.data;
    });
  }

  editNews() {
    this.News.editNews(this.newsData);
  }
}
