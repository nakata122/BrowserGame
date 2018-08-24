import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../core/services/news/news.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  news;
  constructor(
    private News: NewsService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.News.getById(params['id']);
      this.news = this.News.data;
    });
  }

  editNews(id) {
    this.router.navigate(['editNews/' + id]);
  }

  deleteNews(id) {
    this.News.deleteNews(id);
    this.router.navigate(['news']);
  }

}
