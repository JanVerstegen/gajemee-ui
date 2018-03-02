import { Component, OnInit } from '@angular/core';

import { Persoon } from '../personen/persoon';
import { PersoonService } from '../personen/persoon.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css'],
  template: `
  <h2><u>Nieuw Persoon</u></h2>

  <div>
    <label>Persoon Voornaam:
      <input #persoonNaam (keyup.enter)="add(persoonNaam.value)"
      (blur)="add(persoonNaam.value); persoonNaam.value='' ">
    </label>
    <button (click)="add(persoonNaam.value)">Add</button>
    {{clickMessage}}
  </div>`
})
export class CreateprofileComponent implements OnInit {

  personen: Persoon[];
  editPersoon: Persoon;
  clickMessage = '';

  addPersoon(persoonNaam: string) {
    if (persoonNaam) {
      console.log("Success : " + persoonNaam)
      this.personen.push(persoonNaam);
    }
  }

  constructor(private persoonService: PersoonService) { }

  ngOnInit() {
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
}
