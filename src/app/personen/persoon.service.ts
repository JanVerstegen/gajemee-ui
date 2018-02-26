import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Request, RequestMethod } from '@angular/http';
import { HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from "rxjs/operators";
import 'rxjs/add/operator/map'

import { Persoon } from "./persoon";
import { MessageService } from "../messages/message.service";

@Injectable()
export class PersoonService {
  personenUrl = "http://localhost:8080/personen";
  personenPostUrl = "http://localhost:8080/signup";

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'test@test.com:test'
  });

  constructor(private http: Http) { }

  getPersonen(): Observable<Persoon[]> {
    // Todo: send the message _after_ fetching the Personen
    return this.http.get(this.personenUrl,
      {
        headers: this.headers
      })
      .map(res => res.json());
  }

  addPersoon(persoon: Persoon): Observable<Persoon[]> {
    // Todo: send the message _after_ fetching the Personen
    console.log("add works")
    return this.http.post(this.personenPostUrl, persoon,
      {
        headers: this.headers
      })
      .map(res => res.json());
  }

}