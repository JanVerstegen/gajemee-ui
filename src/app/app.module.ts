import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PersonenComponent } from './personen/personen.component';
import { PersoonDetailComponent } from './persoon-detail/persoon-detail.component';

import { PersoonService } from "./persoon.service";

@NgModule({
  declarations: [
    AppComponent,
    PersonenComponent,
    PersoonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PersoonService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
