import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { NewsService } from '../../core/services/news/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private News: NewsService, private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
    this.News.getAll();
  }

  getArticle(article) {
    this.router.navigate(['/article/' + article._id]);
  }

  createNews() {
    this.router.navigate(['/createNews']);
  }
}
