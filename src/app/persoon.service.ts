import { Injectable } from '@angular/core';

import { Persoon } from "./persoon";
import { PERSONEN } from "./mock-personen";

@Injectable()
export class PersoonService {

  getPersonen(): Persoon[] {
    return PERSONEN;
  }

  constructor() { }

}
