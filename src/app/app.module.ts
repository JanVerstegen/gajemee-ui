import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { PageNotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EvenementDetailComponent } from './evenement-detail/evenement-detail.component';
import { CarouselComponent } from "./carousel/carousel.component";
import { EvenementCardComponent } from './evenement-card/evenement-card.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: CreateprofileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'createevent', component: CreateeventComponent },
  { path: 'personen', component: PersonenComponent },
  { path: 'events', component: EvenementComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, PersonenComponent,
    PersoonDetailComponent, MessagesComponent,
    LoginComponent, SearchComponent,
    CategoriesComponent, CreateprofileComponent,
    CreateeventComponent, EvenementComponent,
    PageNotFoundComponent, HomeComponent,
    AboutComponent, EvenementDetailComponent,
    CarouselComponent,
    EvenementCardComponent
  ],
  imports: [BrowserModule, FormsModule,
    HttpModule, HttpClientModule,
    NgbModule.forRoot(), RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PersoonService, MessageService, EvenementService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
