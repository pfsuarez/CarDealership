import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Table from "../../Components/Table/Table";
import Vehicle from "../../Model/Vehicle";
import { appState } from "../../Store/Reducers/App";

interface Props {}

const CarList: React.FC = () => {
  const currentState: appState = useSelector<appState, appState>((state) => {
    return state;
  });

  const dispatch = useDispatch();

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
    </>
  );
};

export default CarList;
