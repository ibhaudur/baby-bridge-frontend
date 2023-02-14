import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

interface Data {
  created: string;
  name: string;
  phone_number: string;
  email: string;
  city: string;
  service: string;
  status: string;
  last_contacted: string;
  last_reminder: string;
}

function createData(
  created: string,
  name: string,
  phone_number: string,
  email: string,
  city: string,
  service: string,
  status: string,
  last_contacted: string,
  last_reminder: string
): Data {
  return {
    created,
    name,
    phone_number,
    email,
    city,
    service,
    status,
    last_contacted,
    last_reminder,
  };
}

const rows = [
  createData(
    "21 Dec 2022",
    "Kanchanajoseph",
    "+9876543210",
    "kanch@gmail.com",
    "chennai",
    "Needs action",


    "true",
    "25 JAN 2023",
    "Following Up"
  ),
  createData(
    "22 Dec 2022",
    "Pratheesh Vayapurathu",
    "+9876543210",
    "prath@gmail.com",
    "Banglore",
    "Mimo",
    "true",
    "25 JAN 2023",
    "Following Up"
  ),
  createData(
    "23 Dec 2022",
    "jhonson",
    "+9876543210",
    "jhon12@gmail.com",
    "Trichy",
    "Fertility clinic",

    "true",
    "25 JAN 2023",
    "Following Up"
  ),
  createData(
    "24 Dec 2022",
    "Kanchanajoseh",
    "+9876543210",
    "kanch@gmail.com",
    "chennai",
    "Mimo",
    "true",
    "25 JAN 2023",
    "Following Up"
  ),
  createData(
    "25 Dec 2022",
    "Pratheesh Vayapuratu",
    "+9876543210",
    "prath@gmail.com",
    "Banglore",
    "Fertility clinic",
    "Mimo",
    "25 JAN 2023",
    "Following Up"
  ),
  createData(
    "26 Dec 2022",
    "jhon",
    "+9876543210",
    "jhon12@gmail.com",
    "Trichy",
    "Needs action",
    "true",
    "25 JAN 2023",
    "Following Up"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "created",
    numeric: false,
    disablePadding: true,
    label: "Created",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "phone_number",
    numeric: true,
    disablePadding: false,
    label: "Phone number",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email address",
  },
  {
    id: "city",
    numeric: true,
    disablePadding: false,
    label: "city",
  },
  {
    id: "service",
    numeric: true,
    disablePadding: false,
    label: "Service chosen",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "last_contacted",
    numeric: true,
    disablePadding: false,
    label: "Last Contacted",
  },
  {
    id: "last_reminder",
    numeric: true,
    disablePadding: false,
    label: "Last Reminder",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("created");
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    let newSelected: readonly string[] = [];
    setSelected(newSelected);
  };

  return (
    <div className="Enhance-table">
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 1350 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy)).map(
                  (row, index) => {
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        <TableCell align="center">{row.created}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.phone_number}</TableCell>
                        <TableCell className="email" align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.city}</TableCell>
                        <TableCell align="left">
                          {row.service === "Fertility clinic" ? (
                            <span className="fertility">{row.service}</span>
                          ) : row.service === "Mimo" ? (
                            <span className="mimo">{row.service}</span>
                          ) : (
                            <span className="needs_action">{row.service}</span>
                          )}
                        </TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell align="left">
                          <span>
                          {row.last_contacted}

                          </span><br></br>
                          <small>11:15</small>
                        </TableCell>
                        <TableCell align="center">
                          {row.last_reminder}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}
