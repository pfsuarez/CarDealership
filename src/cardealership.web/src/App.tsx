import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";

import CarList from "./Containers/CarList/CarList";
import CarView from "./Containers/CarView/CarView";
import Layout from "./Hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact component={CarList} />
      <Route path="/view" exact component={CarView} />
      <Redirect to="/" />
    </Layout>
  );
}

export default App;
