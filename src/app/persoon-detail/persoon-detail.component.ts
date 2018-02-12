import { Component, OnInit, Input } from '@angular/core';

import { Persoon } from "../personen/persoon";

@Component({
  selector: 'app-persoon-detail',
  templateUrl: './persoon-detail.component.html',
  styleUrls: ['./persoon-detail.component.css']
})
export class PersoonDetailComponent implements OnInit {

  @Input() persoon: Persoon;

  constructor() { }

  ngOnInit() {
  }

}
