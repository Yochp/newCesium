import {Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {SocketService} from '../socket.service';
import {Observable, BehaviorSubject, from} from 'rxjs';
import {AcNotification, AcLayerComponent, ActionType, ViewerConfiguration, AcEntity} from 'angular-cesium';
import {RadarPositoin} from '../models/radar.model';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css'],
  providers: [SocketService, ViewerConfiguration]
})


export class CesiumComponent implements OnInit, OnDestroy {
  @ViewChild(AcLayerComponent) layer: AcLayerComponent;

  connection;
  radars$: Observable<AcNotification>;

  constructor(private el: ElementRef, private socketService: SocketService, private viewerConf: ViewerConfiguration) {

    this.radars$ = new Observable<AcNotification>();

    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
    };

    viewerConf.viewerModifier = (viewer: any) => {
      viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      viewer.bottomContainer.remove();
    };

  }

  ngOnInit() {

    // this.connection = this.socketService.socketInit().subscribe(radarsData => {
    //   this.radars$ = new BehaviorSubject(radarsData);
    //   console.log('call to socket init from ngOnInit observable');
    //   console.log(this.radars$);
    // });
  }


  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
