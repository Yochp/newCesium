
import {Action} from '@ngrx/store';
import {RadarPositoin} from '../../models/radar.model';

export const ADD_POINTS = 'ADD_POINTS';

export class AddPoints implements Action {
  readonly type = ADD_POINTS;
  constructor(public payload: any) {

}
}

export type Actions = AddPoints;
