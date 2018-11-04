import {Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {SocketService} from '../socket.service';
import {Observable, BehaviorSubject, from} from 'rxjs';
import {AcNotification, AcLayerComponent, ActionType, ViewerConfiguration, AcEntity} from 'angular-cesium';
import {RadarPositoin} from '../models/radar.model';
import {flatMap} from 'tslint/lib/utils';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-radars',
  templateUrl: './radars.component.html',
  styleUrls: ['./radars.component.css']
})
export class RadarsComponent implements OnInit {

  radars$: Observable<AcNotification>;
  show = true;
  radarPosition: RadarPositoin[];
   radarsObject: AcNotification[] = [];

  // radarPositoin: RadarPositoin[] = [
  //   {let: 42.34, long: 44.33},
  //   {let: 42.34, long: 44.33},
  //
  // ];


  constructor(socketService: SocketService) {

//     const radar1: AcNotification = {
//       id: '0',
//       actionType: ActionType.ADD_UPDATE,
//       entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(0.5,
//           0.5), show: true}
//       // entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(this.radarPositoin.long,
//       //     this.radarPositoin.let), show: true}
// };

    // this.radarPositoin.forEach( r =>{}
    //
    // )
    // const radar2: AcNotification = {
    //   id: '0',
    //   actionType: ActionType.ADD_UPDATE,
    //   entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(this.radarPositoin.let,
    //       this.radarPositoin.long), show: true}
    //
    // };

    // const baseArray = [radar1];
    // this.radars$ = from(baseArray);

    socketService.getRadarsPosition().subscribe(radarsPositionFromServ => {
      this.radarPosition = radarsPositionFromServ;
      // let radarsObject: AcNotification[];
      this.radarPosition.forEach(r => {

        let radar: AcNotification = {
          id: r.id,
          actionType: ActionType.ADD_UPDATE,
          entity: {
            name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(r.lon,
              r.lat), show: true
          }
          // entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(this.radarPositoin.long,
          //     this.radarPositoin.let), show: true}
        };
        this.radarsObject.push(radar);

      });
      console.log('radarObject');
      console.log(this.radarsObject);
      // const radar1: AcNotification = {
      //   id: '0',
      //   actionType: ActionType.ADD_UPDATE,
      //   entity: {
      //     name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(this.radarPosition[0].long,
      //       this.radarPosition[0].lat), show: true
      //   }
      //   // entity: {name: 'radra1qqqqqqq', position: Cesium.Cartesian3.fromRadians(this.radarPositoin.long,
      //   //     this.radarPositoin.let), show: true}
      // };

      // const baseArray = [radar1];
      this.radars$ = from(this.radarsObject);

      // const baseArray = [radar1];
      // this.radars$ = from(baseArray);
      // console.log('radarp' + this.radarPosition[0].long);
      // console.log('radarp' + this.radarPosition[0].lat);
      // console.log('radars$' + this.radars$);
      // console.log('baseArray' + baseArray);

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

