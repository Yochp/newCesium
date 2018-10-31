import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
// import { SocketIoModule, SocketIoConfig, Socket} from 'ng-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CesiumComponent } from './cesium/cesium.component';
// import { map } from 'rxjs/operators';
import { AngularCesiumModule } from 'angular-cesium';
import {FormsModule} from '@angular/forms';
import { RadarsComponent } from './radars/radars.component';



// io
//
// const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };
//
// @Injectable()
// class ChatService {
//
//   constructor(private socket: Socket) { }
//
//   sendMessage(msg: string) {
//     this.socket.emit('message', msg);
//   }
//
//   getMessage() {
//     return this.socket
//       .fromEvent<any>('message')
//       .pipe(map(data => data.msg ));
//
//   }
//
//   close() {
//     this.socket.disconnect();
//   }
// }


// io-done



@NgModule({
  declarations: [
    AppComponent,
    CesiumComponent,
    RadarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // SocketIoModule.forRoot(config),
    AngularCesiumModule.forRoot()

  ],
  // providers: [ChatService],
  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }




