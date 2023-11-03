import { TableHeaderProps } from "../../../types/table";
import { TableHead, TableRow } from "@mui/material";
import React from "react";
import CustomTableCell from "../TableCell/TableCell";

const TableHeader = ({ headerItems }: TableHeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        {headerItems.map((item) => (
          <CustomTableCell key={item}>{item.toUpperCase()}</CustomTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
