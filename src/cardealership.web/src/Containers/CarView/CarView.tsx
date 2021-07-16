import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../Components/Form/Form";
import Vehicle from "../../Model/Vehicle";
import { appState } from "../../Store/Reducers/App";
import * as actions from "../../Store/Actions/App";

// Same view to add or view/update a vehicle

const CarView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentState: appState = useSelector<appState, appState>((state) => {
    return state;
  });

  const onNavigateHomeHandler = () => {
    history.push("/");
  };

  const onSubmitHandler = (vehicle: Vehicle) => {
    dispatch(actions.SavingNewVehicle(vehicle));
  };

  let redirect = null;
  if (currentState.vehicleSaved) {
    redirect = <Redirect to="/" />;
  }

  const messageSaving = currentState.isLoading ? (
    <p>Current Vechicle is being saved...</p>
  ) : null;

  return (
    <>
      {redirect}
      <h1>Car View</h1>
      {messageSaving}
      <Form
        onNavigateHomeHandlerCallback={onNavigateHomeHandler}
        onSubmitHandlerCallback={onSubmitHandler}
      />
    </>
  );
};

export default CarView;
