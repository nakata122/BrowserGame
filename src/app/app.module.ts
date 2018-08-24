import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { NewsModule } from './components/news/news.module';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { AuthGuard } from './core/guards/authentication/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NewsModule,
    HttpClientModule,
    AuthenticationModule,
    RoutesModule,
    SharedModule
  ],
  providers: [
    HttpClientModule,
    AuthenticationService,
    AuthGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
