import {Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {SocketService} from '../socket.service';
import {Observable, BehaviorSubject, from} from 'rxjs';
import {AcNotification, AcLayerComponent, ActionType, ViewerConfiguration, AcEntity} from 'angular-cesium';
import {RadarPositoin} from '../models/radar.model';
import {flatMap} from 'tslint/lib/utils';

@Component({
  selector: 'app-radars',
  templateUrl: './radars.component.html',
  styleUrls: ['./radars.component.css']
})
export class RadarsComponent implements OnInit {

  radars$: Observable<AcNotification>;
  show = true;

  radarPositoin: RadarPositoin;


  constructor(socketService: SocketService) {
    const radar1: AcNotification = {
      id: '0',
      actionType: ActionType.ADD_UPDATE,
      // entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(this.radarPositoin.let,
      //     this.radarPositoin.long), show: true}
      entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(34.78176759999997,
          32.0852999), show: true}
    };
    const baseArray = [radar1];
    this.radars$ = from(baseArray);

    socketService.getRadarsPosition().subscribe(radarsPositionFromServ => {
      this.radarPositoin = radarsPositionFromServ;

    });
  }


  ngOnInit() {
  }
}
// entity = new AcEntity({
//   id: 0,
//   name: 'click me',
//   position: Cesium.Cartesian3.fromRadians(0.5, 0.5),
// });
// export enum ActionType {
//   ADD_UPDATE,
//   DELETE
// }

