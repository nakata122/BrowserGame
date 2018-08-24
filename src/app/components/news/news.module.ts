import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { ArticleComponent } from './article/article.component';
import { EditNewsComponent } from './edit-news/edit-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NewsComponent, CreateNewsComponent, ArticleComponent, EditNewsComponent]
})
export class NewsModule { }
