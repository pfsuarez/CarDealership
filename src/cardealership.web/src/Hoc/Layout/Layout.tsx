import React, { ReactNode } from "react";
import Toolbar from "../../Components/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Toolbar />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default layout;
