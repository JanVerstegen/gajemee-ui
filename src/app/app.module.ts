import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PersonenComponent } from './personen/personen.component';
import { PersoonDetailComponent } from './persoon-detail/persoon-detail.component';

import { PersoonService } from "./persoon.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonenComponent,
    PersoonDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PersoonService,
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
