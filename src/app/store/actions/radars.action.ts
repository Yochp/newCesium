
import {Action} from '@ngrx/store';
import {RadarPositoin} from '../../models/radar.model';

export const ADD_RADARS = 'ADD_RADARS';

export class AddRadars implements Action {
  readonly type = ADD_RADARS;
  constructor(public payload: any) {
}
}

export type Actions = AddRadars;
