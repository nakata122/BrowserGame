import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { NewsModule } from './components/news/news.module';
import { ItemsModule } from './components/items/items.module';
import { ItemDialogComponent } from './components/item-dialog/item-dialog.component';
import { AuthenticationService } from './core/services/authentication/authentication.service';
import { AuthGuard } from './core/guards/authentication/auth.guard';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AuctionComponent } from './components/auction/auction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    ItemDialogComponent,
    AuctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NewsModule,
    ItemsModule,
    HttpClientModule,
    AuthenticationModule,
    RoutesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    SharedModule
  ],
  providers: [
    HttpClientModule,
    AuthenticationService,
    AuthGuard,
    HttpClient
  ],
  entryComponents: [ItemDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
