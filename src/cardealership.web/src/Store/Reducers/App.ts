import { AnyAction } from "redux";
import Vehicle from "../../Model/Vehicle";
import vehicle from "../../Model/Vehicle";
import { actionTypes } from "../Actions/ActionTypes";

export interface appState {
  isLoading: boolean;
  vehicleSaved: boolean | null;
  carList: vehicle[];
};

const initialState: appState = {
  isLoading: false,
  vehicleSaved: null,
  carList: []
};

const appReducer = (state: appState = initialState, action: AnyAction): appState => {
  switch (action.type) {
    case actionTypes.START_FETCHING_VEHICLE:
      return {
        ...state,
        vehicleSaved: null,
        isLoading: true
      }
    case actionTypes.END_FETCHING_VEHICLE:
      return {
        ...state,
        isLoading: false,
        carList: action.payload
      }
    case actionTypes.START_SAVING_NEW_VEHICLE:
      return {
        ...state,
        isLoading: true,
        vehicleSaved: null,
      }
    case actionTypes.END_SAVING_NEW_VEHICLE:
      return {
        ...state,
        isLoading: false,
        vehicleSaved: true,
      }
  }
  return state;
};

export default appReducer;