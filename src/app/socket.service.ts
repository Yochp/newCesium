import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})

export class SocketService {
  // radars;
  //
  // // radarsPromise;
  //
  //
  // socketInit() {
  //   const socket = io('http://localhost:3000');
  //   socket.on('get_radars', (data) => {
  //     this.radars = data;
  //     console.log(data);
  //     console.log(this.radars);
  //
  //   });
  //
  // }

  private url = 'http://localhost:3000';
  private socket;

  // sendMessage(message) {
  //   this.socket.emit('add-message', message);
  // }

  socketInit() {
    const observable = new Observable(observer => {
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

}


console.log('socketClient on');

