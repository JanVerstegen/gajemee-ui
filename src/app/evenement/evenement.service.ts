import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Request, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'

import { Evenement } from "./evenement";
import { MessageService } from "../messages/message.service";

@Injectable()
export class EvenementService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getEvenementen(): Observable<Evenement[]> {
    // Todo: send the message _after_ fetching the Personen
    return this.http.get("http://localhost:8080/evenementen").map(res => res.json());
  }
}
