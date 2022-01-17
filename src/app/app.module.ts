import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { DetailComponent } from './hero/detail/detail.component';
import { MessagesComponent } from './message/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { AddComponent } from './hero/add/add.component';
import { SearchComponent } from './hero/search/search.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailComponent,
    MessagesComponent,
    DashboardComponent,
    AddComponent,
    SearchComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
