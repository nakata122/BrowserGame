import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { NewsComponent } from '../components/news/news/news.component';
import { ArticleComponent } from '../components/news/article/article.component';
import { CreateNewsComponent } from '../components/news/create-news/create-news.component';
import { EditNewsComponent } from '../components/news/edit-news/edit-news.component';
import { AuthGuard } from '../core/guards/authentication/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'createNews', component: CreateNewsComponent, canActivate: [ AuthGuard ],
    data: {
      expectedRole: 'admin'
  }},
  { path: 'editNews/:id', component: EditNewsComponent, canActivate: [ AuthGuard ],
    data: {
      expectedRole: 'admin'
  }},
  { path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
