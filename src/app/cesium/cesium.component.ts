import {Component, OnInit, ElementRef} from '@angular/core';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css'],
  providers: [SocketService]
})


export class CesiumComponent implements OnInit {

  constructor(private el: ElementRef, private socketService: SocketService) {
  }


  ngOnInit() {
      this.socketService.socketInit();
      console.log('call to socket init from ngOnInit');
    }


  }


