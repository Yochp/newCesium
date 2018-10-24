import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})

export class CesiumComponent implements OnInit {

  constructor (private el: ElementRef) { }

  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement);


  }

}
