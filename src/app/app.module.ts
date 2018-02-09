import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PersonenComponent } from './personen/personen.component';
import { PersoonDetailComponent } from './persoon-detail/persoon-detail.component';
import { PersoonService } from "./personen/persoon.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EvenementComponent } from './evenement/evenement.component';
import { EvenementService } from "./evenement/evenement.service";

@NgModule({
  declarations: [AppComponent, PersonenComponent,
    PersoonDetailComponent, MessagesComponent,
    LoginComponent, SearchComponent,
    CategoriesComponent, CreateprofileComponent,
    CreateeventComponent, EvenementComponent,],
  imports: [BrowserModule, FormsModule, HttpModule, HttpClientModule,],
  providers: [PersoonService, MessageService,EvenementService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
