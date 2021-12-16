import React, { useState, useEffect } from "react";
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
  TablePagination,
  DialogContent,
  DialogContentText,
  Dialog,
  useMediaQuery,
  useTheme,
  TextField,
  TextareaAutosize
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../Components/PageHeader";
import LeftControl from "../../Components/LeftControl";
// import MobileScreen from '../Broadcast/Mobile/BroadcastMessages';
// import {isMobile} from 'react-device-detect';

/** Local imports & Statics */
import { Imports } from '../../Imports';


/** Local dependencies & Libraries */
import Services from '../../Services';


let {
  role
} = Imports;

const {
  broadcast,
  Storage,
  BroadcastClient,
  users,
} = Services;


/** Pre-req configuration */
// const roles = Object.values(role);

let broadcastListener;


if (!localStorage.getItem('broadcasts'))
  localStorage.broadcasts = '[]';


const columns = [
  // { id: "from", label: "From", minWidth: "200px", type: "value" },
  { id: "to", label: "To", minWidth: "80px", type: "value" },
  { id: "date", label: "Date", minWidth: "120px", type: "value" },
  { id: "subject", label: "Subject", minWidth: "200px", type: "value" },
  { id: "message", label: "Message", minWidth: 500, type: "value" }
];

function createData(
  from,
  to,
  date,
  subject,
  message
) {
  return {
    from,
    to,
    date,
    subject,
    message
  };
}

const rows = [
  // createData("John Doe", "HR", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "IT", "16-06-2021", "Safety Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsumLorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "Sales", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "HR", "16-06-2021", "Safety Update", "Lorem IPsum Lorem IPsum Lorem IPsum LoremLorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "HR", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "IT", "16-06-2021", "Safety Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsumLorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "Sales", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "HR", "16-06-2021", "Safety Update", "Lorem IPsum Lorem IPsum Lorem IPsum LoremLorem IPsum Lorem IPsum Lorem IPsum"),createData("John Doe", "HR", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "IT", "16-06-2021", "Safety Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsumLorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "Sales", "16-06-2021", "HR Update", "Lorem IPsum Lorem IPsum Lorem IPsum Lorem IPsum"),
  // createData("John Doe", "HR", "16-06-2021", "Safety Update", "Lorem IPsum Lorem IPsum Lorem IPsum LoremLorem IPsum Lorem IPsum Lorem IPsum")
];



const BroadcastMessages = () => {
  const storage = new Storage();

  const [roles, setRoles] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await users.allSubDepartmentsList();

        const { data } = response;

        setRoles(data);
      } catch (exc) {
        console.log(exc);
      }
    })();
  }, []);


  // For Modal
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [toForBroadcast, setToBroadcast] = useState(roles[0]);

  const [broadcastSubject, setBroadcastSubject] = useState('');

  const [broadcastMessage, setBroadcastMessage] = useState('');

  const [useBroadcasts, setBroadcasts] = useState(rows);

  const retreiveBroadcasts = async () => {
    try {
      const response = await broadcast.getAllSend();

      const { data } = response;

      const broadcastsBuffer = data
        .reverse()
        .map(broadcast => {
          
          // let {
          //   // Employee: { dnUsername: from },
          //   BroadcastMessage: {
          //     SubDepartment:{ SubDepartment : { name:to }},
          //     createdAt: date,
          //     subject,
          //     message
          //   },
          // } = broadcast;

          // date = new Date(date).toLocaleDateString()

          return {
            // from,
            to:broadcast?.SubDepartment?.name || '',
            date : new Date(broadcast?.createdAt).toLocaleDateString(),
            subject:broadcast?.subject,
            message:broadcast?.message
          }
        });

      setBroadcasts(
        broadcastsBuffer
      );

    } catch (exc) {
      console.log(exc);
    }
  }

  useEffect(() => {
    retreiveBroadcasts();
  }, [])


  const handleToValues = (event, value) => {
    setToBroadcast(value.id);
  }

  const handleBroadcastSubject = ($e, value) => {
    setBroadcastSubject($e.target.value);
  }

  const handleBroadcastMessage = ($e, value) => {
    setBroadcastMessage($e.target.value);
  }

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const sendBroadcasst = async () => {
    try {
      handleCloseModal();

      const { id } = JSON.parse(
        localStorage.user_profile
      );

      const broadcastMessageObject = {
        subDepartmentId: toForBroadcast,
        subject: broadcastSubject,
        message: broadcastMessage,
        employee_id: id,
      }

      const response = await broadcast.sendBroadcast(broadcastMessageObject);

    } catch (exc) {
      console.log(exc);
    }
  }

  const handleCloseModal = () => {
    setOpen(false);
  };
  // if(isMobile) {
  //   return (
  //       <MobileScreen />
  //   )
  // }

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
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */}
            <Grid xs={12}>
              <Button onClick={handleClickOpenModal} className="LinkButton">
                Send Broadcast Message
              </Button>
              <Grid
                xs={12}
                container
                justify="space-between"
                className="LiqTables SafetyTable"
              >
                <Paper>
                  <TableContainer>
                    <Table aria-label="table">
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
                        {useBroadcasts
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


      {/* Modal */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseModal}
        className="BroadcastMessageModal LiqTables"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={handleCloseModal} className="ModalClose">
        </Button>
        <DialogContent>
          <Grid xs={12} className="mbold MsgBrodAuto">
            <Grid xs={12} className="pl14">To</Grid>
            {/* <TextField id="outlined-basic" label="Type Here" variant="outlined" className="w100p"/> */}
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={roles}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
              )}
              onChange={handleToValues}
            />
          </Grid>
          <Grid xs={12} className="mbold mt30">
            <Grid xs={12} className="pl14">Subject</Grid>
            <TextField id="outlined-basic" label="Type Here" variant="outlined" className="w100p"
              required={true}
              onChange={handleBroadcastSubject} />
          </Grid>
          <Grid xs={12} className="mt30">
            <TextareaAutosize className="w100p" required={true} rowsMin={6} placeholder="Dear recipient,
Please note that progress made on last week's event......"
              onChange={handleBroadcastMessage} />
          </Grid>
          <Grid xs={12} container justify="center" className="mt30">
            <Button className="LinkButton" onClick={sendBroadcasst}>Send Message</Button>
          </Grid>
        </DialogContent>
      </Dialog>





    </Grid>
  );
}

export default BroadcastMessages;
