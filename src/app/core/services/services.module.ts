import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication/authentication.service';
import { NewsService } from './news/news.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    NewsService
  ],
  declarations: []
})
export class ServicesModule { }
