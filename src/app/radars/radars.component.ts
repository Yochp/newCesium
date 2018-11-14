import {Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {SocketService} from '../socket.service';
import {Observable, BehaviorSubject, from} from 'rxjs';
import {AcNotification, AcLayerComponent, ActionType, ViewerConfiguration, AcEntity, MapsManagerService} from 'angular-cesium';
import {RadarPositoin} from '../models/radar.model';
import {flatMap} from 'tslint/lib/utils';
import {logger} from 'codelyzer/util/logger';
import {Store} from '@ngrx/store';
// import {RadarPositoinState} from '../store/state/state';
import {AddRadars} from '../store/actions/radars.action';
import {randomPointReducer} from '../store/reducers/points.reducer';


@Component({
  selector: 'app-radars',
  templateUrl: './radars.component.html',
  styleUrls: ['./radars.component.css']
})
export class RadarsComponent implements OnInit {

  radars$: Observable<AcNotification>;
  points$: Observable<AcNotification>;
  show = true;
  radarPosition: RadarPositoin[];
  radarsObject: AcNotification[] = [];
  // radarsPoint;
  public randomPointStore$: Observable<any>;


  constructor(socketService: SocketService, private store: Store<any>, mapsManagerService: MapsManagerService) {

    // const viewer = mapsManagerService.getMap().getCesiumViewer();
    // viewer.camera.flyTo({
    //   destination: Cesium.Cartesian3.fromDegrees(34.771856, 32.084365, 15000.0)
    // });


    // setInterval(() => {
    //   socketService.getRadarsPoint().subscribe(pointFromServ => {
    //     console.log('pointFromServ');
    //     console.log(pointFromServ);
    //   });
    // }, 1000);


   // this.points$ = socketService.getPoint();
   // this.points$.forEach(p => {
   //   console.log('p');
   //   console.log(p);
   // });

    socketService.getRadarsPosition().subscribe(radarsPositionFromServ => {
      this.radarPosition = radarsPositionFromServ;
      this.radarPosition.forEach(r => {

        // this.store.dispatch(new AddRadars({
        //   lon: r.lon,
        //   lat: r.lat,
        //   id: r.id,
        //   name: r.name,
        // }));


        const radar: AcNotification = {
          id: r.id,
          actionType: ActionType.ADD_UPDATE,
          entity: {
            name: r.name,
            position: Cesium.Cartesian3.fromDegrees(r.lon, r.lat),
            show: true,
            image: 'https://image.flaticon.com/icons/svg/186/186078.svg',
            width: 50,
            height: 50,
            color: Cesium.Color.BLUE,

          }
        };
        this.radarsObject.push(radar);

        // store - dispatch

      });
      // this.radarsPoint = {
      //   actionType: ActionType.ADD_UPDATE,
      //   entity: {
      //     position: Cesium.Cartesian3.fromDegreesArray([
      //        34.77498522117179, 32.07688322451762,
      //       34.80711066356701,  31.967397556720233,
      //       ]),
      //       show: true,
      //   }
      // }
      console.log('radarObject');
      console.log(this.radarsObject);
      // this.radars$ = store.select('radarsP');
      this.radars$ = from(this.radarsObject);
      // this.points$ = from(this.radarsPoint);

      this.randomPointStore$ = this.store.select(state => state.randomPointReducer);
      console.log('PointSService');
      this.randomPointStore$.subscribe(data => console.log(data));

    });


  }


//
// export class RadarsComponent implements OnInit {
//
//   radars$: Observable<AcNotification>;
//   show = true;
//   radarPositionFromSrtoe: RadarPositoin[];
//   radarsObject: AcNotification[] = [];
//   radarEntity: AcNotification;
//
//   constructor(socketService: SocketService, private store: Store<RadarPositoinState>) {
//
//     socketService.getRadarsPosition().subscribe(radarsPositionFromServ => {
//       this.radarPositionFromSrtoe = radarsPositionFromServ;
//       this.radarPositionFromSrtoe.forEach(r => {
//
//         this.store.dispatch(new AddRadars({
//           lon: r.lon,
//           lat: r.lat,
//           id: r.id,
//           name: r.name,
//         }));
//       });
//     });
//     initNotifications();
//
//
//
//   }
//
//   initNotifications() {
//     this.radarPositionFromSrtoe.forEach(radar => {
//       radarEntity: AcNotification = {
//         id: radar.id,
//         actionType: ActionType.ADD_UPDATE,
//         entity: {
//           name: radar.name,
//           position: Cesium.Cartesian3.fromDegrees(radar.lon, radar.lat),
//           show: true,
//           image: 'https://image.flaticon.com/icons/svg/186/186078.svg',
//           width: 5,
//           height: 5,
//           color: Cesium.Color.BLUE,
//         }
//       };
//     });
//     // this.radarsObject.push(radarEntity);
//     console.log('radarEntity');
//     console.log(radarEntity);
//     this.radars$ = from(radarEntity);
//     console.log('radars$');
//     console.log(this.radars$);
//   }











  ngOnInit() {
  }
}
// let _data;
// export function createPentity(entity: any , data): any {
// //   _data =  data;
// //
// // }
// //   _data.forEach(r =>
// //     if (r.id ==   this.radarsObject.id )
// // )
//   entity.dynamicPolyline = {
//     width : 2,
//     positions: Cesium.Cartesian3.fromDegreesArray(
//       [
//         Math.floor(Math.random() * 50), Math.floor(Math.random() * 50),
//         Math.floor(Math.random() * 50), Math.floor(Math.random() * 50)
//       ]),
//
// }
