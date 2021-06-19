import React from "react";
import {
  Grid,
  List,
  ListItem,
  Checkbox,
  Button,
  TextareaAutosize
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import LeftControl from "../../Components/LeftControl";

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


const SafetyTestingEdit = () => {
  return (
    <Grid container xs={12} className="Liq-Container">
      <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
        <LeftControl />
      </Grid>
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Add Testing Rule</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            
            <Grid xs={12} container>
              <Grid xs={4}>
                <List>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Event ID
                    </Grid>
                    <Grid>
                      12345
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Date
                    </Grid>
                    <Grid>
                      1-20-2021
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Time
                    </Grid>
                    <Grid>
                      1301
                    </Grid>
                  </ListItem>
                  <ListItem container className="p0 pt6 pb20">
                    <Grid className="w150 bold">
                      Job ID
                    </Grid>
                    <Grid>
                      Job 1
                    </Grid>
                  </ListItem>
                </List>
              </Grid>
              <Grid xs={8}>
                <Grid xs={12}>
                      <Grid xs={12} className="mbold">
                      Testing Rules
                      </Grid>
                      <Grid xs={12} className="mt14 MultiCheckBox">
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
                            <TextField {...params} variant="outlined" placeholder="Rules" />
                          )}
                        />
                      </Grid>
                    </Grid>
              </Grid>
            </Grid>
            
            <Grid xs={12} container className="FormTableArea mt20">
                <Grid className="Cols4">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={crew_membera}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={Results}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" rowsMin={6} placeholder="Share Your Thoughts...." />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="Cols4">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={crew_membera}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={Results}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" rowsMin={6} placeholder="Share Your Thoughts...." />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="Cols4">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={crew_membera}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={Results}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" rowsMin={6} placeholder="Share Your Thoughts...." />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="Cols4">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} sm={6} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} sm={6}>
                      <Autocomplete
                        className="w100p"
                        id="combo-box-demo"
                        options={crew_membera}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Member" variant="outlined" />}
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Result
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <Autocomplete
                          className="w100p"
                          id="combo-box-demo"
                          options={Results}
                          getOptionLabel={(option) => option.title}
                          renderInput={(params) => <TextField {...params} label="Results" variant="outlined" />}
                        />
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt40">
                    <Grid xs={12} className="mbold">
                      Comments
                    </Grid>
                    <Grid xs={12} className="mt14">
                      <TextareaAutosize className="w100p" rowsMin={6} placeholder="Share Your Thoughts...." />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} className="mt30">
                  <Button className="LinkButton">Save</Button>
                </Grid>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SafetyTestingEdit;
