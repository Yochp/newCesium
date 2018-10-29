import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {SocketService} from '../socket.service';
import {Observable} from 'rxjs';
import {from, Subject, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css'],
  providers: [SocketService]
})


export class CesiumComponent implements OnInit, OnDestroy {
  connection;
  // radars;

  radars$: Observable<any>;
  // private radarsSubject: Subject<any>;

  constructor(private el: ElementRef, private socketService: SocketService) {
    //
    // this.radarsSubject = new Subject();
    // this.radars$ = this.radarsSubject.asObservable();
    // this.radars$ = this.radars$.Observable;

    this.radars$ = new Observable<any>();

  }


  // console.log('call to socket init from ngOnInit ');
  ngOnInit() {
    // this.socketService.socketInit();
    // this.connection = this.socketService.socketInit().subscribe(radarsData => {
    //   this.radars$ = radarsData;
    //   console.log('call to socket init from ngOnInit obzerbevel');
    //   console.log(this.radars$);
    // });
    //
    // console.log('call to socket init from ngOnInit ');
// 111111
//     this.connection = this.socketService.socketInit().subscribe(radarsData => {
//       this.radarsSubject.next(radarsData)
//       // this.radars$ = Observable.create(radarsData);
//       console.log('call to socket init from ngOnInit obzerbevel');
//       console.log(this.radarsSubject);
//     });

    this.connection = this.socketService.socketInit().subscribe(radarsData => {
      // this.radars$ = radarsData;
      console.log(radarsData);

      this.radars$ = new BehaviorSubject(radarsData);

      console.log('call to socket init from ngOnInit obzerbevel');
      console.log(this.radars$);
    });

    // this.radars$ = this.socketService.socketInit();
  }


  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}




