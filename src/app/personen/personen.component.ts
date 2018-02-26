import { Component, OnInit } from '@angular/core';

import { Persoon } from './persoon';
import { PersoonService } from './persoon.service';

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css'],
  template: `
  <h2><u>Mijn Personen</u></h2>

  <div>
    <ul class="personen">
      <li *ngFor="let persoon of personen" (click)="onSelect(persoon)">
        <span class="badge">{{persoon.id}}</span> {{persoon.voornaam}}
      </li>
    </ul>
    <div *ngIf="!personen">
      Geen Personen gevonden!
    </div>
    <app-persoon-detail [persoon]="selectedPersoon"></app-persoon-detail>
  </div>
  <hr>
  <div>
    <label>Persoon Voornaam:
      <input #persoonNaam (keyup.enter)="add(persoonNaam.value)"
      (blur)="add(persoonNaam.value); persoonNaam.value='' ">
    </label>
    <button (click)="add(persoonNaam.value)">Add</button>
    {{clickMessage}}
  </div>`
})
export class PersonenComponent implements OnInit {

  selectedPersoon: Persoon;
  editPersoon: Persoon;
  personen: Persoon[];
  clickMessage = '';
  addPersoon(persoonNaam: string) {
    if (persoonNaam) {
      console.log("Success : " + persoonNaam)
      this.personen.push(persoonNaam);
    }
  }

  constructor(private persoonService: PersoonService) { }

  ngOnInit() {
    this.getPersonen();
  }

  onSelect(persoon: Persoon): void {
    this.selectedPersoon = persoon;
  }

  getPersonen(): void {
    this.persoonService.getPersonen().subscribe(
      res => {
        this.personen = res;
        console.log("Success : " + this.personen);
      }
    );
  }

  add(voornaam: string): void {
    this.clickMessage = "Success : " + voornaam;
    console.log("Success : " + voornaam)

    this.editPersoon = undefined;
    voornaam = voornaam.trim();
    if (!voornaam) { return; }

    const newPersoon: Persoon = {
      "achternaam": "asd",
      "email": "asd@test.com",
      "voornaam": "asd",
      "wachtwoord": "A1bcdefghi@"
    } as Persoon;

    this.persoonService.addPersoon(newPersoon)
      .subscribe(persoon => this.personen.push(persoon));
  }

  edit(persoon) {
    this.editPersoon = persoon;
  }
}
