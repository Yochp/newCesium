import { Actions, ADD_POINTS } from '../actions/points.action';


const initialState = [];

export const randomPointReducer = (pointState = initialState, action: Actions) => {

  switch (action.type) {
    case ADD_POINTS:

      return [...pointState, action.payload];
      // return action.payload;
  }
  return pointState;

};
