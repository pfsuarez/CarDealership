import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import Table from "../../Components/Table/Table";
import Vehicle from "../../Model/Vehicle";
import { appState } from "../../Store/Reducers/App";
import * as actions from "../../Store/Actions/App";

interface Props {}

const CarList: React.FC = () => {
  const history = useHistory();
  const currentState: appState = useSelector<appState, appState>((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const onLoadVehicles = useCallback(
    () => dispatch(actions.FetchVehicles()),
    [dispatch]
  );

  useEffect(() => {
    onLoadVehicles();
  }, [onLoadVehicles]);

  const onNavigateToAddNewVehicleHandler = () => {
    history.push('/view');
  };

  const vehicleSchema: Vehicle = {
    id: "000",
    orderNumber: 0,
    chassis: "",
    deliveryDate: new Date(),
    license: "",
    model: "",
  };

  const vehiclesTable = (
    <Table
      vehicles={currentState.carList}
      headers={Object.keys(vehicleSchema)}
    />
  );

  return (
    <>
      <h1>Car List</h1>

      <br />
      {currentState.isLoading ? "Loading vehicles..." : vehiclesTable}

      <br />
      <NavLink to="/view">Add Vehicle</NavLink>
      <input
        className="btn btn-primary"
        type="button"
        value="Add Vehicle"
        onClick={onNavigateToAddNewVehicleHandler}
      />
    </>
  );
};

export default CarList;
