import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { AcNotification, ActionType } from 'angular-cesium';

// store
import { Store } from '@ngrx/store';
// import { AddPoints } from '../store/actions/points.action';
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

  // sendMessage(message) {
  //   this.socket.emit('add-message', message);
  // }

  socketInit() {
    const observable = new Observable<AcNotification>(observer => {
      this.socket = io(this.url);
      this.socket.on('get_radars', (data) => {
        observer.next(data);
      });
      // return () => {
      //   this.socket.disconnect();
      // };
    });
    return observable;
  }


  getRadarsPosition() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('get_radarsPosition', (data) => {
        observer.next(data);
      });
      // return () => {
      //   this.socket.disconnect();
      // };
    });
    return observable;
  }
}


console.log('socketClient on');

