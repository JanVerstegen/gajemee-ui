import { Component, OnInit, Input } from '@angular/core';

import { Evenement } from "../evenement/evenement";

@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.css']
})
export class EvenementDetailComponent implements OnInit {

  @Input() evenement: Evenement;

  constructor() { }

  ngOnInit() {
  }

}
