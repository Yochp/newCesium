import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {SocketService} from '../socket.service';
import {Observable} from 'rxjs';
import {from, Subject, BehaviorSubject} from 'rxjs';
import { AcEntity } from 'angular-cesium';
import { AcNotification, ActionType } from 'angular-cesium';
@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css'],
  providers: [SocketService]
})





export class CesiumComponent implements OnInit, OnDestroy {
  connection;
  radars$: Observable<AcNotification>;

  constructor(private el: ElementRef, private socketService: SocketService) {

    this.radars$ = new Observable<AcNotification>();

  }


  ngOnInit() {

    this.connection = this.socketService.socketInit().subscribe(radarsData => {
      console.log(radarsData);
      this.radars$ = new BehaviorSubject(radarsData);
      console.log('call to socket init from ngOnInit observable');
      console.log(this.radars$);
    });


    // const viewer = new Cesium.Viewer(this.el.nativeElement);

  }







  ngOnDestroy() {
    this.connection.unsubscribe();
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
