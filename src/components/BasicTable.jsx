import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows, tableCell }) {
  const [sorting, setSorting] = useState(rows);
  const [order, setOrder] = useState("ASC");

  function handleSorting() {
    const sort = rows.sort((a, b) => a.tableone - b.tableone);
    setSorting(sort);

    // setSorting(sorting.sort((a, b) => {
    //   if (a < b) {
    //     return -1;
    //   } else if (a > b) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // }));
    // console.log(col);
    // if (order === "ASC") {
    //   const sorted = rows.sort((a, b) =>
    //     a.col > b.col ? 1 : -1,
    //     // console.log(a.col)
    //   );
    //   setSorting(sorted);
    //   setOrder("DSC");
    // }

    // if (order === "DSC") {
    //   const sorted = [...sorting].sort((a, b) =>
    //     a.col < b.col ? 1 : -1
    //   );
    //   setSorting(sorted);
    //   setOrder("ASC");
    // }
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: "full" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: "gray" }}>
            <TableCell>
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.cellone}
              </h4>
            </TableCell>
            <TableCell 
            onClick={handleSorting} 
            align="right">
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.celltwo}
              </h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.cellthree}
              </h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.cellfour}
              </h4>
            </TableCell>
            <TableCell align="right">
              <h4 style={{ cursor: "pointer", display: "inline" }}>
                {tableCell.cellfive}
              </h4>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sorting.map((row) => (
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
