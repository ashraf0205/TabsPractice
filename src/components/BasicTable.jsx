import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows, tableCell }) {
  const [sorting, setSorting] = useState();

  function handleSorting() {
    // const sort = sort((a, b) => a.age - b.age)
    // setSorting(sort)
  }
  console.log(sorting);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "gray" }}>
            <TableCell 
            onClick={handleSorting}>
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.cellone}
              </h4>
            </TableCell>
            <TableCell 
            align="right">
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.celltwo}
              </h4>
            </TableCell>
            <TableCell 
            align="right">
              <h4 style={{ cursor: "pointer" }}>{tableCell.cellthree}</h4>
            </TableCell>
            <TableCell 
            align="right">
              <h4 style={{ cursor: "pointer" }}>{tableCell.cellfour}</h4>
            </TableCell>
            <TableCell 
            align="right">
              <h4 style={{ cursor: "pointer" }}>{tableCell.cellfive}</h4>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.tableone}</TableCell>
              <TableCell align="right">{row.tabletwo}</TableCell>
              <TableCell align="right">{row.tablethree}</TableCell>
              <TableCell align="right">{row.tablefour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
