import React from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize,
  Typography
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PageHeader from "../../../../Components/Mobile/PageHeader";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const crew_membera = [
  { title: 'James Mary'},
  { title: 'Robert Patricia' },
  { title: 'John Jennifer' }
];

const testingRules = [
  { title: '6.1) Rule Description'},
  { title: '6.2) Rule Description' },
  { title: '6.3) Rule Description' },
  { title: '6.4) Rule Description'},
  { title: '6.5) Rule Description' },
  { title: '6.6) Rule Description' }
];

const Results = [
  { title: '6.1) Rule Description'},
  { title: '6.2) Rule Description' },
  { title: '6.3) Rule Description' },
  { title: '6.4) Rule Description'},
  { title: '6.5) Rule Description' },
  { title: '6.6) Rule Description' }
];
const OJE = [
  { title: 'Yes'},
  { title: 'No' }
];


const CreateTicket = () => {
  return (
    <Grid container xs={12} className="Liq-Container Device">
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Create a Ticket</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Grid xs={12} md={5} className="EvaluatorsTables pr40 pb30">
                  <Grid xs={12}>
                    <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                        Request by
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                            // multiple
                            className="w100p"
                            id="checkboxes-tags-demo"
                            options={testingRules}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                {option.title}
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" placeholder="Please Select" />
                            )}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Request For
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <Autocomplete
                            multiple
                            className="w100p"
                            id="checkboxes-tags-demo"
                            options={testingRules}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                <Checkbox
                                  icon={icon}
                                  checkedIcon={checkedIcon}
                                  style={{ marginRight: 8 }}
                                  checked={selected}
                                />
                                {option.title}
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" placeholder="Please Select" />
                            )}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Request Type
                      </Grid>
                      <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={crew_membera}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Please Select" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Category
                      </Grid>
                      <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={crew_membera}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Please Select" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" rowsMin={6} placeholder="Share Your Thoughts...." />
                    </Grid>
                  </Grid>
                  <Grid xs={12} container className="mt50 FormSaveBtn">
                    <Button className="LinkButton">Submit</Button>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CreateTicket;
