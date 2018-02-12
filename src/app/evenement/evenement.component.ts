import { Component, OnInit } from '@angular/core';

import { Evenement } from "./evenement";
import { EvenementService } from "./evenement.service";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  selectedEvenement: Evenement;
  evenementen: Evenement[];

  constructor(private evenementService: EvenementService) { }

  ngOnInit() {
    this.getEvenementen();
  }

  onSelect(evenement: Evenement): void {
    this.selectedEvenement = evenement;
  }

  getEvenementen(): void {
    this.evenementService.getEvenementen()
      .subscribe(e => this.evenementen = e);
  }
}
