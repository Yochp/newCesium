import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { AcNotification, ActionType } from 'angular-cesium';

// store
import { Store } from '@ngrx/store';
// import { AddRadars } from './store/actions/radars.action';

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

// let radarP: Observable<AcNotification>;


@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private url = 'http://localhost:3000';
  private socket;

  // sendMessage(message) {
  //   this.socket.emit('add-message', message);
  // }
  // constructor(private store: Store<any>) { }
  constructor() { }


  socketInit() {
    const observable = new Observable<AcNotification>(observer => {
      this.socket = io(this.url);
      this.socket.on('get_radars', (data) => {
        // ngrx
        //       this.store.dispatch(new AddRadars(data));
        observer.next(data);
      });
      // return () => {
      //   this.socket.disconnect();
      // };
    });
    return observable;
  }


  getRadarsPosition(): Observable<any> {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('get_radarsPosition', (data) => {
        // radarP = data;
        // radarP.forEach( r => {
        //     r.actionType = ActionType.ADD_UPDATE;
        //     r.entity = { name: 'radra1', position: Cesium.Cartesian3.fromRadians(data.len, data.let), show: true };
        //   });
        // console.log('radarp');
        // console.log(radarP);
        // console.log('data');
        // console.log(data);
        observer.next(data);
        // console.log('data'+ data);

      });
      // return () => {
      //   this.socket.disconnect();
      // };
    });
    return observable;
  }
}


console.log('socketClient on');

