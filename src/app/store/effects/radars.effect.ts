// import {Injectable} from '@angular/core';
// import {Actions, Effect, ofType} from '@ngrx/effects';
// import {map, tap} from 'rxjs/operators';
// // import {CesiumViewerService} from '../../services/cesium-viewer.service';
// import {ADD_RADARS} from '../actions/radars.action';
//
// @Injectable()
// export class RadarsEffect {
//
//   constructor(private actions$: Actions) {
//   }
//
//   // @Effect({dispatch: false})
//   // radar$ = this.actions$.pipe(
//   //   ofType<any>(ADD_RADARS),
//   //   map(action => action.payload),
//   //   tap((entities: any[]) => {
//   //     entities.forEach(radarEntity => {
//   //       const entity = this.viewerService.viewer.entities.getOrCreateEntity(`radar_point_${radarEntity.id}`);
//   //       entity.position = Cesium.Cartesian3.fromDegrees(radarEntity.longitude, radarEntity.latitude);
//   //       entity.billboard = {
//   //         image: 'https://image.flaticon.com/icons/svg/186/186078.svg',
//   //         width: 30,
//   //         height: 30
//   //       };
//   //     });
//   //   })
//   // );
// }
