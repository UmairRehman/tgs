import React from "react";
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from "@material-ui/core";
import PageHeader from "../../Components/PageHeader";
import LeftControl from "../../Components/LeftControl";

const columns = [
  { id: "from", label: "From", minWidth: "200px", type: "value" },
  { id: "department", label: "Department", minWidth: "80px", type: "value" },
  { id: "date", label: "Date", minWidth: "120px", type: "value" },
  { id: "message", label: "Message", minWidth: 500, type: "value" }
];

function createData(
  from,
  department,
  date,
  message
) {
  return {
    from,
    department,
    date,
    message
  };
}

const rows = [
  createData("John Doe", "HR", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "IT", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsumLorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "Sales", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "HR", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum LoremLorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "HR", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "IT", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsumLorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "Sales", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "HR", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum LoremLorem IPsum Lorem IPsum Lorem IPsum"),createData("John Doe", "HR", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "IT", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsumLorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "Sales", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  createData("John Doe", "HR", "16-06-2021", "Lorem IPsum Lorem IPsum Lorem IPsum LoremLorem IPsum Lorem IPsum Lorem IPsum")
];


const Messages = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Broadcast Messages</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage mt0">
            {/* TGS Softwares */}
            <Grid xs={12}>
              <Grid
                xs={12}
                container
                justify="space-between"
                className="LiqTables SafetyTable"
              >
                <Paper>
                  <TableContainer>
                    <Table  aria-label="table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              className="mbold f16"
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.code}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Messages;
