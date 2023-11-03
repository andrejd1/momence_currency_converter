import { TableHeaderProps } from "../../../types/table";
import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const TableHeader = (props: TableHeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {props.headerItems.map((item) => (
          <TableCell key={item}>{item.toUpperCase()}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
