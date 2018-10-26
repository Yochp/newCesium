import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SocketService {


  socketInit() {
    const socket = io('http://localhost:3000');
    socket.on('hello', (data) => console.log(data));

  }


}

console.log('socketClient on');
