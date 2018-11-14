import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {AcNotification, ActionType} from 'angular-cesium';

// store
import {Store} from '@ngrx/store';
import {RadarPositoin} from './models/radar.model';
import {RadarPositoinState} from './store/state/state';
import {AddRadars} from './store/actions/radars.action';
import {AddPoints} from './store/actions/points.action';


// export class WebSocketService {
//   private socket;
//
//   constructor(private store: Store<any>) { }
//
//   init() {
//     this.socket = io('http://localhost:3000');
//
//     this.socket.on('init', (data) => {
//       this.store.dispatch(new AddPoints(data));
//     });
//
//     this.socket.on('data', (data) => {
//       this.store.dispatch(new AddPolylines(data));
//     });
//   }
// }


@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private url = 'http://localhost:3000';
  private socket;

  // radarP_Store: Observable<RadarPositoin[]>;


  // constructor(private store: Store<any>) {
  // this.radarP_Store = store.select('radarsP');


  // }
  constructor(private store: Store<any>) {
    this.socket = io(this.url);
    // this.socket.on('get_randomPoint', (data) => {
    //       this.store.dispatch(new AddPoints({data}));
    //       console.log('sdsdsds' + data);
    //     });

    this.socket.on('get_randomPoint', (data: any) => {
      this.store.dispatch(new AddPoints({data}));
    });
  }

  //
  // socketInit() {
  //   const observable = new Observable<AcNotification>(observer => {
  //     this.socket = io(this.url);
  //     this.socket.on('get_radars', (data) => {
  //       // ngrx
  //       //       this.store.dispatch(new AddRadars(data));
  //       observer.next(data);
  //     });
  //     // return () => {
  //     //   this.socket.disconnect();
  //   });
  //   return observable;
  // }


  getRadarsPosition(): Observable<any> {
    const observable = new Observable(observer => {
      this.socket.on('get_radarsPosition', (data) => {
        this.store.dispatch(new AddRadars({data}));
        observer.next(data);
      });
    });
    return observable;
  }


  // socket.on('get_randomPoint', (data) => {
  //       // this.store.dispatch(new AddRadars({data}));
  //       console.log('sdsdsds' + data);
  //       observer.next(data);
  //     });
  //
  //
  // getRadarsPoint(): Observable<any> {
  //   const observable = new Observable(observer => {
  //     this.socket.on('get_randomPoint', (data) => {
  //       this.store.dispatch(new AddPoints({data}));
  //       // console.log('sdsdsds' + data);
  //       observer.next(data);
  //     });
  //   });
  //   return observable;
  // }


  // getPoint() {
  //   return Observable.create((observer: Subscriber<any>) => {
  //     this.socket.on('get_randomPoint', (data: any) => {
  //       this.store.dispatch(new AddPoints({data}));
  //       // data.forEach(
  //       //   (acNotification: any) => {
  //       //     let action;
  //       //     if (acNotification.action === 'ADD_OR_UPDATE') {
  //       //       action = ActionType.ADD_UPDATE;
  //       //     }
  //       //     else if (acNotification.action === 'DELETE') {
  //       //       action = ActionType.DELETE;
  //       //     }
  //       //     acNotification.actionType = action;
  //       //     acNotification.entity = createPentity(acNotification.entity, data);
  //       //     observer.next(acNotification);
  //       //   });
  //     });
  //   });
  // }
}

console.log('socketClient on');

