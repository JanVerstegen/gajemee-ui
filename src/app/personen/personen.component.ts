import { Component, OnInit } from '@angular/core';

import { Persoon } from '../persoon';
import { PersoonService } from './persoon.service';

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css']
})
export class PersonenComponent implements OnInit {

  selectedPersoon: Persoon;
  personen: Persoon[];

  constructor(private persoonService: PersoonService) { }

  ngOnInit() {
    this.getPersonen();
  }

  onSelect(persoon: Persoon): void {
    this.selectedPersoon = persoon;
  }

  getPersonen(): void {
    this.persoonService.getPersonen()
      .subscribe(personen => this.personen = personen);
  }
}
