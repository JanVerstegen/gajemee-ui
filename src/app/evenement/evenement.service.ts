import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Request, RequestMethod } from '@angular/http';
import { HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from "rxjs/operators";
import 'rxjs/add/operator/map'

import { Persoon } from "../personen/persoon";
import { Evenement } from "./evenement";

@Injectable()
export class EvenementService {

  eventUrl = "http://localhost:8080/evenementen";
  eventPostUrl = "http://localhost:8080/personen/" + Persoon/*.id*/ + "/evenementen";

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'test@test.com:test'
  });

  constructor(private http: Http) { }

  getEvenementen(): Observable<Evenement[]> {
    // Todo: send the message _after_ fetching the Personen
    return this.http.get(this.eventUrl,
      {
        headers: this.headers
      })
      .map(res => res.json());
  }
}
