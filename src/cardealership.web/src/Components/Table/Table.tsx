import React from "react";
import Vehicle from "../../Model/Vehicle";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface Props {
  vehicles: Vehicle[];
  headers: string[];
}

const Table: React.FC<Props> = ({ vehicles, headers }) => {
  return (
    <>
      <table className="table table-bordered table-hover">
        <TableHeader headers={headers}></TableHeader>
        <TableBody headers={headers} rows={vehicles}></TableBody>
      </table>
    </>
  );
};

export default Table;
