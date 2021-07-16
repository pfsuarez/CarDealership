import { AnyAction } from "redux";

import { actionTypes } from "./ActionTypes";
import vehicle from "../../Model/Vehicle";
import Vehicle from "../../Model/Vehicle";

export const StartFetchingVehicle = (): AnyAction => {
  return {
    type: actionTypes.START_FETCHING_VEHICLE,
  };
};

export const StartSavingNewVehicle = (): AnyAction => {
  return {
    type: actionTypes.START_SAVING_NEW_VEHICLE,
  };
};

export const EndFetchingVehicle = (vehicles: vehicle[]): AnyAction => {
  return {
    type: actionTypes.END_FETCHING_VEHICLE,
    payload: vehicles
  };
};

export const EndSavingNewVehicle = (): AnyAction => {
  return {
    type: actionTypes.END_SAVING_NEW_VEHICLE
  };
};

export const FetchVehicles = () => {
  return (dispatch: any, getState: any) => {
    dispatch(StartFetchingVehicle());

    fetch("https://localhost:5001/api/Vehicle", {
      method: "GET"
    }).then((res: Response) => res.json())
      .then((vehicles: vehicle[]) => {
        dispatch(EndFetchingVehicle(vehicles));
      }).catch(err => console.log("Error", err));
  };
};


export const SavingNewVehicle = (vehicle: Vehicle) => {
  return (dispatch: any) => {
    dispatch(StartSavingNewVehicle());

    fetch("https://localhost:5001/api/Vehicle", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vehicle)
    }).then((res: Response) => {
      console.log("RESPONSE", res);
      dispatch(EndSavingNewVehicle());
    }).catch(err => console.log("Error", err));
  };
};
