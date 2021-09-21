import React, {useEffect} from "react";
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



const SafetyTestingEdit = () => {
  
  return (
    <Grid container xs={12} className="Liq-Container Device">
      <Grid xs={12} md={10} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Add Testing Rule</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
          {/* <Grid
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </Grid> */}


            <Grid xs={12} container>
              <Grid xs={12}>
                <List className="SafetyTestingEditList">
                  <ListItem className="p0 pt6 pb20">
                    <Grid className="w100p bold">
                      Event ID
                    </Grid>
                    <Grid className="w100p">
                      12345
                    </Grid>
                  </ListItem>
                  <ListItem className="p0 pt6 pb20">
                    <Grid className="w100p bold">
                      Date
                    </Grid>
                    <Grid className="w100p">
                      1-20-2021
                    </Grid>
                  </ListItem>
                  <ListItem className="p0 pt6 pb20">
                    <Grid className="w100p bold">
                      Time
                    </Grid>
                    <Grid className="w100p">
                      13:01
                    </Grid>
                  </ListItem>
                  <ListItem className="p0 pt6 pb20">
                    <Grid className="w100p bold">
                      Job ID
                    </Grid>
                    <Grid className="w100p">
                      Job 1
                    </Grid>
                  </ListItem>
                </List>
              </Grid>
              <Grid xs={12}>
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
                <Grid className="Cols4 DeviceBDB mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} className="mt14">
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
                <Grid className="Cols4 DeviceBDB mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} className="mt14">
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
                <Grid className="Cols4 DeviceBDB mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} className="mt14">
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
                <Grid className="Cols4 DeviceBDB mt30">
                  <Grid xs={12} container justify="space-between">
                    <Grid xs={12} container alignContent="center" className="mbold">Crew Member:</Grid>
                    <Grid xs={12} className="mt14">
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
                <Grid xs={12} className="mt30 FormSaveBtn">
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
