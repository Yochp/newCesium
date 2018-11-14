import { Actions, ADD_RADARS } from '../actions/radars.action';
import {RadarPositoin} from '../../models/radar.model';


const initialState: RadarPositoin[] = [];

export const RadarReducer = (radarState: RadarPositoin[] = initialState, action: Actions) => {

  switch (action.type) {
    case ADD_RADARS:

      return [...radarState, action.payload];
      // return action.payload;
  }
  return radarState;
};
