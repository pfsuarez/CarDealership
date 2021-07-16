import React from "react";

export interface HeaderProps {
  headers: string[];
}

const TableHeader: React.FC<HeaderProps> = ({ headers }) => {
  return (
    <thead className="thead-dark" key="header-1">
      <tr key="header-0">
        {headers &&
          headers.map((value, index) => (
            <th key={index} scope="col">
              {value}
            </th>
          ))}
      </tr>
    </thead>
  );
};
 export default TableHeader;