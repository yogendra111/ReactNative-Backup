import {combineReducers} from 'redux';
import {updateLocation} from './action';

const initialState = {
  location: {main_Addr: null, secondary_Addr: null, description: null},
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateLocation:
      return {location: action.payload};
    default:
      return state;
  }
};

export default combineReducers({
  locationReducer: locationReducer,
});
