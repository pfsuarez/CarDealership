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

  const vehiclesTable = <Table vehicles={currentState.carList} />;

  return (
    <>
      <h1>Car List</h1>

      <br />
      {currentState.isLoading ? "Loading vehicles..." : vehiclesTable}

      <br />
      <NavLink to="/view">View</NavLink>
    </>
  );
};

export default CarList;
