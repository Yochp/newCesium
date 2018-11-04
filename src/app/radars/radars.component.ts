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

  constructor(socketService: SocketService) {

    socketService.getRadarsPosition().subscribe(radarsPositionFromServ => {
      this.radarPosition = radarsPositionFromServ;
      this.radarPosition.forEach(r => {

        let radar: AcNotification = {
          id: r.id,
          actionType: ActionType.ADD_UPDATE,
          entity: {
            name: r.name, position: Cesium.Cartesian3.fromDegrees(r.lon,
              r.lat), show: true, image: 'https://image.flaticon.com/icons/svg/186/186078.svg',
            width: 5, height: 5,
            color: Cesium.Color.BLUE,

          }
        };
        this.radarsObject.push(radar);

      });
      console.log('radarObject');
      console.log(this.radarsObject);
      this.radars$ = from(this.radarsObject);
    });
  }


  ngOnInit() {
  }
}
