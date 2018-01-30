import { Component, OnInit } from '@angular/core';
import { Persoon } from '../persoon';
import { PERSONEN } from "../mock-personen";

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css']
})
export class PersonenComponent implements OnInit {

  personen = PERSONEN;

  selectedPersoon: Persoon;

onSelect(persoon: Persoon): void {
  this.selectedPersoon = persoon;
}

  persoon: Persoon = {
    id: 1,
    voornaam: 'Jan',
    achternaam: 'Verstegen',
    leeftijd: 26
  };

  constructor() { }

  ngOnInit() {
  }

}
