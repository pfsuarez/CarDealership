import React from "react";
import Vehicle from "../../Model/Vehicle";
import { HeaderProps } from "./TableHeader";

interface bodyProps extends HeaderProps {
  rows: Vehicle[];
}

const TableBody: React.FC<bodyProps> = ({ headers, rows }) => {
  const buildRow = (row: Vehicle | any, headers: string[], rowId: number) => {
    return (
      <tr key={rowId}>
        {headers.map((value: string, index: number) => {
          let result;

          if (value === "deliveryDate") {
            result = (
              <td key={index}>{new Date(row[value]).toLocaleDateString()}</td>
            );
          } else {
            result = <td key={index}>{row[value]}</td>;
          }
          return result;
        })}
      </tr>
    );
  };

  return (
    <tbody>
      {rows && rows.map((value, index) => buildRow(value, headers, index))}
    </tbody>
  );
};

export default TableBody;
