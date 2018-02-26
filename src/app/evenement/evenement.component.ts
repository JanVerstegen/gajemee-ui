import { Component, OnInit, ViewChild } from '@angular/core';

import { } from '@types/googlemaps';

import { Evenement } from "./evenement";
import { EvenementService } from "./evenement.service";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: 52.115960;
  longitutde: 5.049655;

  selectedEvenement: Evenement;
  evenementen: Evenement[];

  constructor(private evenementService: EvenementService) { }

  ngOnInit() {

    this.getEvenementen();

    var mapProp = {
      center: new google.maps.LatLng(52.115960, 5.049655),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var map: google.maps.Map = new google.maps.Map(
      document.getElementById("map"), mapProp);
    var markerSimple = new google.maps.Marker({
      label: "A",
      position: { lat: 52.115960, lng: 5.049655 },
      map: map,
      title: 'Hello World!'
    });
  }

  onSelect(evenement: Evenement): void {
    this.selectedEvenement = evenement;
  }

  getEvenementen(): void {
    this.evenementService.getEvenementen()
      .subscribe(e => this.evenementen = e);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitutde));
  }

}
