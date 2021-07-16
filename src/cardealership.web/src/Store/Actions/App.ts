import { AnyAction } from "redux";

import { actionTypes } from "./ActionTypes";
import vehicle from "../../Model/Vehicle";

export const StartFetchingCar = (): AnyAction => {
  return {
    type: actionTypes.START_FETCHING_CARS,
  };
};

export const DoneFetchingCar = (vehicles: vehicle[]): AnyAction => {
  return {
    type: actionTypes.DONE_FETCHING_CARS,
    payload: vehicles
  };
};

export const FetchCars = () => {
  return (dispatch: any, getState: any) => {
    dispatch(StartFetchingCar());

    fetch("https://localhost:5001/api/Vehicle", {
      method: "GET"
    }).then((res: Response) => res.json())
      .then((vehicles: vehicle[]) => {
        dispatch(DoneFetchingCar(vehicles));
      }).catch(err => console.log("Error", err));
  };
};
