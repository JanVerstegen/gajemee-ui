import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persoon } from "./persoon";
import { PERSONEN } from "./mock-personen";
import { MessageService } from "./message.service";

@Injectable()
export class PersoonService {

  constructor(private messageService: MessageService) { }

  getPersonen(): Observable<Persoon[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('PersoonService: fetched personen');
    return of(PERSONEN);
  }
}
