import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from '../../components/authentication/authentication.module';
import { ServicesModule } from '../../core/services/services.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
    ServicesModule,
    RouterModule
  ],
  providers: [
    HttpClientModule,
    HttpClient
  ],
  declarations: [HeaderComponent, FooterComponent, LeaderboardComponent],
  exports: [HeaderComponent, FooterComponent, LeaderboardComponent]
})
export class SharedModule { }
