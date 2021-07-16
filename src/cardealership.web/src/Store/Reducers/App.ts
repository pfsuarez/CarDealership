import { AnyAction } from "redux";
import vehicle from "../../Model/Vehicle";
import { actionTypes } from "../Actions/ActionTypes";

export interface appState {
  isLoading: boolean;
  carList: vehicle[];
};

const initialState: appState = {
  isLoading: false,
  carList: []
};

const appReducer = (state: appState = initialState, action: AnyAction): appState => {
  switch (action.type) {
    case actionTypes.START_FETCHING_CARS:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.DONE_FETCHING_CARS:
      return {
        ...state,
        isLoading: false,
        carList: action.payload
      }
  }
  return state;
};

export default appReducer;