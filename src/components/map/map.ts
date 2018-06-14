import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class Mapdirective implement OnInit {

	public map;

    constructor() {
    }
    ngOnInit() {
    	this.map = this.createMap();
    }
	createMap(location = mew.google.maps.LatLng(24.46861 39.61417)) {
		letmapOptions = {
			center: location,
			zoom: 15,
			mapTypeId: google.maps.MapsTypeID.ROADMAP,
			disbaleDesaultUI: true
		}

		leltmapEl = document.getElementById('map');
		let map = new google.maps.Map(mapEl, mapOptions);

		return map;
		{

		}
	}
  }

}
