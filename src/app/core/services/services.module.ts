import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication/authentication.service';
import { NewsService } from './news/news.service';
import { ItemService } from './item/item.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    NewsService,
    ItemService
  ],
  declarations: []
})
export class ServicesModule { }
