import React , { useState ,useEffect } from "react";
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
  useTheme
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import MobileScreen from './Mobile/SafetyTesting';
import {isMobile} from 'react-device-detect';
import Services from '../../../Services'
import { useHistory } from "react-router-dom";

import Snackbar from '../../../Components/Snackbar';
import { helpers } from "../../../helpers";

var moment = require('moment-timezone')
const {
  employee,
  Storage
} = Services

const {
  showSnackBar,
} = helpers;

const columns = [
  { id: "id", label: "Event ID", minWidth: 170, type: "value" },
  { id: "date", label: "Date", minWidth: 120, type: "value" },
  { id: "time", label: "Time", minWidth: 100, type: "value" },
  { id: "locationAdded", label: "Location", minWidth: 100, type: "value" },
  { id: "jobID", label: "Job ID", minWidth: 170, type: "value" },
  { id: "rulesCount", label: "Rules", minWidth: 170, type: "value" },
  { id: "editrules", label: "Add Rules", minWidth: 50, type: "edit" },
  { id: "viewrules", label: "View Rules", minWidth: 50, type: "view" },
];


const columnsForView = [
  "ID",
  "Event_ID",
  "Rule_NBR",
  "Crew_Member",
  "Result",
  "Comments"
];

const SafetyTesting = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // For Modal
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState([])
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = async (value) => {
    try {
      setLoading(true)
      let data = await employee.view_rule_event({ id:value })
      if(data.httpStatus==200)
      {
         data = data?.data.map(row=>{
            return{
              id:row.id,
              eventID:(row?.TestEventRule?.TestEventId)?row.TestEventRule.TestEventId:null,
              rule_NBR:(row?.TestEventRule?.Rule?.RuleNo)?row.TestEventRule.Rule.RuleNo:null,
              crew_member:(row?.TestEventTeam?.Employee?.firstName)?`${row.TestEventTeam?.Employee.firstName} ${row.TestEventTeam?.Employee.middleName} ${row.TestEventTeam?.Employee.lastName}`:null,
              result: (row?.result)?row.result:null,
              comment: (row?.comment)?row.comment:null
            }
          }) 
          // console.log("data",data);
          setModalData(data)
          setLoading(false) 
      }
    } catch (error) {
      console.log("Error",error);
      return showSnackBar(`Please Try  Again \n Error Occured while fetching data: ${error}`);
    }
    setOpen(true);
  };
  
  const handleAddRule =(value) =>{
    console.log("value",value);
    // history.push({
    //   pathname : "/add-event-rules",
    //   state: {eventID: value}
    // });
  }

  const handleClose = () => {
    setOpen(false);
  };

  const [rows, setRows] = useState([]) 
 
  const getlistEvents =async () =>{
    try {
      let data = await employee.get_test_event_listing()
      console.log(data);
      if(data.httpStatus==200){
        data= data.data
        data.forEach(element => {
          element.date = moment( new Date(element.date) ).format('DD-MM-YYYY')
          element.time = element.time.slice(0,-3)
          element.locationAdded = element.TGSLocation.name
          element.rulesCount = element.TestEventRules.length
        });
        setRows(data)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(async () => {
    await getlistEvents()
  }, [])

  if(isMobile) {
    return (
        <MobileScreen />
    )
  }

  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Safety &#38; Testing</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage">
            {/* TGS Softwares */}
            <Grid xs={12}>
              <Link to="/enter-railroad-event" className="LinkButton">
                Enter Railroad Test Event
              </Link>
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
                              className="bold f16"
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
                                      {/* {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value} */}
                                      {column.type == "edit" ? (
                                        <Link 
                                          // onClick={()=>handleAddRule(row.id)} 
                                          to={{
                                            pathname : "/add-event-rules",
                                            state: {eventID: row.id}
                                          }}
                                          className="EditIcon">
                                         </Link>
                                      ) : column.type == "view" ? (
                                        <Button  onClick={()=>handleClickOpen(row.id)} className="ViewIcon"></Button>
                                      ) : (
                                        value
                                      )}
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
        onClose={handleClose}
        className="SafetyModal LiqTables"
        aria-labelledby="responsive-dialog-title"
      >
        <Button autoFocus onClick={handleClose} className="ModalClose">
        </Button>
        <DialogContent>
          {
            (modalData.length>0)?
            <Grid xs={12} className="mb20">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {
                          // (columnsForView) && 
                          columnsForView.map((row)=>{
                            return (
                              <TableCell>{`${row}`}</TableCell>
                            );
                          })
                        }
                      </TableRow>
                    </TableHead>
                    
                    <TableBody>
                      {
                        modalData.map(row=>{
                          return(
                            <TableRow>
                              <TableCell>{`${row.id}`}</TableCell>
                              <TableCell>{`${row.eventID}`}</TableCell>
                              <TableCell>{`${row.rule_NBR}`}</TableCell>
                              <TableCell>{`${row.crew_member}`}</TableCell>
                              <TableCell>{`${row.result}`}</TableCell>
                              <TableCell>{`${row.comment}`}</TableCell>
                            </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            :
              <Grid xs={12}>
                <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className="pt0 pb6">No Rules Found</TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Grid>
          }
          
          
        </DialogContent>
      </Dialog>
      




    </Grid>
  );
}

export default SafetyTesting;
