import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "./App.css";

import CarList from "./Containers/CarList/CarList";
import CarView from "./Containers/CarView/CarView";
import Layout from "./Hoc/Layout/Layout";

import * as actions from "./Store/Actions/App";

function App() {
  const dispatch = useDispatch();
  const onStartup = useCallback(
    () => dispatch(actions.FetchCars()),
    [dispatch]
  );

  useEffect(() => {
    onStartup();
  }, [onStartup]);

  return (
    <Layout>
      <Route path="/" exact component={CarList} />
      <Route path="/view" exact component={CarView} />
      <Redirect to="/" />
    </Layout>
  );
}

export default App;
