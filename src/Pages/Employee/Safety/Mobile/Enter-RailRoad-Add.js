import React, {useState} from "react";
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





const OJE = ['Yes', 'No'];
// const OJE = [
//   { title: 'Yes'},
//   { title: 'No' }
// ];

const Railroad = () => {
  const [value, setValue] = useState(OJE[0]);
  const [inputValue, setInputValue] = useState('');
  return (
    <Grid container xs={12} className="Liq-Container Device">
      <Grid xs={12} container justify="center" className="PageContent">
        <Grid className="PagesFrame">
          <PageHeader />
          <Grid id="PageTitle">Railroad Testing Event</Grid>
          {/* Page Start */}
          <Grid xs={12} className="ContentPage FormTableArea">
            <Grid xs={12} container>
                <Typography variant="h5" className="mbold f16" component="h6">
                    Evaluators
                </Typography>
            </Grid>
            <Grid xs={12} container className="pb30">
                <Grid xs={12} md={5} className="EvaluatorsTables pr40">
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Primary
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
                              <TextField {...params} variant="outlined" placeholder="Primary" />
                            )}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold">
                        Assisting
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
                              <TextField {...params} variant="outlined" placeholder="Assisting" />
                            )}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold relative TargetIcon">
                        Department
                      </Grid>
                      <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={crew_membera}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Department" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} className="mt30">
                    Location & Date/Time
                  </Grid>
                  <Grid xs={12}>
                    <Grid xs={12} className="mt10">
                      <Grid xs={12} className="mbold relative LocIcon">
                        Site
                      </Grid>
                      <Grid xs={12} className="mt14">
                          <Autocomplete
                            className="w100p"
                            id="combo-box-demo"
                            options={crew_membera}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => <TextField {...params} label="Site" variant="outlined" />}
                          />
                      </Grid>
                    </Grid>
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} className="mbold relative TargetIcon">
                        GPS (Lat, Long )
                      </Grid>
                      <Grid xs={12} className="mt14">
                        <TextField id="outlined-basic" label="Latitudes & Longitudes" variant="outlined" className="w100p"/>
                      </Grid>
                    </Grid>
                    <Grid xs={12} className="dateTimePickerFrame">
                      <Grid className="DateTimeTables mt30">
                        <Grid xs={12} className="mbold relative DateIcon">
                          Date
                        </Grid>
                        <Grid xs={12} className="mt14">
                        <TextField
                          id="date"
                          type="date"
                          className="DateTimePicker"
                          defaultValue="YY-MM-DD"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        </Grid>
                      </Grid>
                      <Grid className="DateTimeTables mt30">
                        <Grid xs={12} className="mbold relative TimeIcon">
                          Time
                        </Grid>
                        <Grid xs={12} className="mt14">
                        <TextField
                          id="time"
                          type="time"
                          className="DateTimePicker"
                          defaultValue="YY-MM-DD"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} md={7}>
                  {/* OJE */}
                  <Grid xs={12} className="mt30">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        OJE
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={4} className="mt14 pr16">
                        <Autocomplete
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          inputValue={inputValue}
                          onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                          }}
                          id="controllable-states-demo"
                          options={OJE}
                          className="w100p"
                          renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
                        />
                      </Grid>
                      <Grid xs={8} className="mt14 fieldSubText">
                        <TextField id="outlined-basic" label="Comment here" variant="outlined" className="w100p"/>
                        <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                          Please leave this field empty if you have no comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Join Test */}
                  <Grid xs={12} className="mt50">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        Join Test
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={4} className="mt14 pr16">
                        <Autocomplete
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          inputValue={inputValue}
                          onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                          }}
                          id="controllable-states-demo"
                          options={OJE}
                          className="w100p"
                          renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
                        />
                      </Grid>
                      <Grid xs={8} className="mt14 fieldSubText">
                        <TextField id="outlined-basic" label="Comment here" variant="outlined" className="w100p"/>
                        <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                          Please leave this field empty if you have no comments
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Crew */}
                  <Grid xs={12} className="mt50">
                    <Grid xs={12} className="mbold">
                      <Typography variant="h5" className="mbold f16" component="h6">
                        Crew
                      </Typography>
                    </Grid>
                    <Grid xs={12} container>
                      <Grid xs={12} className="mbold mt20">
                        Job ID
                      </Grid>
                      <Grid xs={6} className="mt14 pr16">
                        <TextField id="outlined-basic" label="Job ID" variant="outlined" className="w100p"/>
                      </Grid>
                      <Grid xs={6} container justify="flex-end" className="mt14 fieldSubText DeviceBtn">
                        <Button className="LinkButton ButtonAddIcon">Add Crew Member</Button>
                      </Grid>
                    </Grid>
                    {/* Add New Crew Members Loop */}
                    <Grid xs={12} className="mt30">
                      <Grid xs={12} container className="mt30">
                        <Grid xs={12} className="mbold mb10">
                          Crew member 1
                        </Grid>
                        <Grid xs={12}>
                          <TextField id="outlined-basic" label="Member Name" variant="outlined" className="w100p"/>
                        </Grid>
                        <Grid xs={12} className="mt16 SafetyAddCrew" container>
                            <TextField id="outlined-basic" label="Crew position" variant="outlined" className="w100p"/>
                            <Button className="PickBtn"></Button>
                        </Grid>
                      </Grid>
                      <Grid xs={12} container className="mt30">
                        <Grid xs={12} className="mbold mb10">
                          Crew member 2
                        </Grid>
                        <Grid xs={12}>
                          <TextField id="outlined-basic" label="Member Name" variant="outlined" className="w100p"/>
                        </Grid>
                        <Grid xs={12} className="mt16 SafetyAddCrew" container>
                            <TextField id="outlined-basic" label="Crew position" variant="outlined" className="w100p"/>
                            <Button className="PickBtn"></Button>
                        </Grid>
                      </Grid>
                      <Grid xs={12} container className="mt30">
                        <Grid xs={12} className="mbold mb10">
                          Crew member 3
                        </Grid>
                        <Grid xs={12}>
                          <TextField id="outlined-basic" label="Member Name" variant="outlined" className="w100p"/>
                        </Grid>
                        <Grid xs={12} className="mt16 SafetyAddCrew" container>
                            <TextField id="outlined-basic" label="Crew position" variant="outlined" className="w100p"/>
                            <Button className="PickBtn"></Button>
                        </Grid>
                      </Grid>
                      <Grid xs={12} container className="mt30">
                        <Grid xs={12} className="mbold mb10">
                          Crew member 4
                        </Grid>
                        <Grid xs={12}>
                          <TextField id="outlined-basic" label="Member Name" variant="outlined" className="w100p"/>
                        </Grid>
                        <Grid xs={12} className="mt16 SafetyAddCrew" container>
                            <TextField id="outlined-basic" label="Crew position" variant="outlined" className="w100p"/>
                            <Button className="PickBtn"></Button>
                        </Grid>
                      </Grid>
                      
                      
                    </Grid>
                    {/* Add New Crew Members End */}
                  </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} container justify="flex-end" className="mt30 FormSaveBtn">
              <Button className="LinkButton">Save</Button>
            </Grid>
          </Grid>
          {/* Page Start End */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Railroad;
