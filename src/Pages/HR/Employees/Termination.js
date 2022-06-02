import React, { useState, useEffect } from "react";
import {
    Grid,
    Button,
    TextareaAutosize,
    Typography,
    List,
    ListItem
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PageHeader from "../../../Components/PageHeader";
import LeftControl from "../../../Components/LeftControl";
import { useHistory } from "react-router-dom";
import Snackbar from '../../../Components/Snackbar';

/** Local deoendencies & Libraries */
import Services from '../../../Services';

import { useLocation } from 'react-router-dom'
import { showSnackBar } from "../../../helpers/showSnackBar";


const {
    hr
} = Services;



// import { withRouter } from 'react-router-dom';
// import MobileScreen from './Mobile/Enter-RailRoad-Add';
// import {isMobile} from 'react-device-detect';

const ReasonsTerminat = [
    { title: 'Misc-Violation of Company Pol' },
    { title: ' Misc-Violation of Safety Policy' },
    { title: 'Misc-Violation of Drug Policy' },
    { title: 'Misc-Insubordination' },
    { title: 'Vol-No-call/No-show 3+ days' },
    { title: 'Vol-Medical issue' },
    { title: 'Vol-Quit' },
    { title: 'Other-Unable to perform job duties' },
    { title: 'Other-Poor work habits' },
    { title: 'Other-Excessive absenteeism' },
    { title: 'Other-Reduction in force' },
    { title: 'Other' }
];



const Termination = () => {

    let history = useHistory();

    const location = useLocation();

    const [empData, setEmpData] = useState({})

    let a = location?.state;


    const [form, setForm] = useState({
        terminationDate: '',
        terminationReason: '',
        comment: ''
    })


    function onSubmit(e) {
        e.preventDefault();

        let data = {
            id: a?.employee[0]?.id,
            date: form.terminationDate,
            comment: form.comment,
            reason: form.terminationReason,
        }

        try {
            hr.terminateEmployee(data).then((certificateData) => {
                console.log(certificateData)
                showSnackBar('Employee Has been Terminated');
                setTimeout(() => {
                    history.push({
                        pathname: "/employees",
                        state: data?.id
                    })
                }, 2000);    
            }).catch((err) => { console.log(err) });

        }
        catch (exc) {
            console.log(exc);
        }

    }


    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(location?.state)
        setEmpData(location?.state)

    }, [empData]);


    return (
        <Grid container xs={12} className="Liq-Container HRPortal">
                <Snackbar
        ></Snackbar>
            <Grid xs={12} md={2} className="LeftContol" id="LeftContol">
                <LeftControl />
            </Grid>
            <Grid xs={12} md={10} container justify="center" className="PageContent">
                <Grid className="PagesFrame">
                    <PageHeader />
                    <Grid id="PageTitle">Employee Termination</Grid>
                    {/* Page Start */}
                    <Grid xs={12} className="ContentPage BlueHeadTable FormTableArea">

                        {/* Employee Details List */}
                        <Grid xs={12}>
                            <Grid xs={12} md={6}>
                                <List>
                                    <ListItem container className="p0 pt6 pb20">
                                        <Grid xs={5} className="bold">
                                            Employee ID
                                        </Grid>
                                        <Grid xs={5}>
                                            {a?.employee[0]?.id}
                                        </Grid>
                                    </ListItem>
                                    <ListItem container className="p0 pt6 pb20">
                                        <Grid xs={5} className="bold">
                                            First Name
                                        </Grid>
                                        <Grid xs={5}>
                                            {a?.employee?.[0]?.firstName}
                                        </Grid>
                                    </ListItem>
                                    <ListItem container className="p0 pt6 pb20">
                                        <Grid xs={5} className="bold">
                                            Last Name
                                        </Grid>
                                        <Grid xs={5}>
                                            {a?.employee?.[0]?.lastName}

                                        </Grid>
                                    </ListItem>

                                    {/* <ListItem container className="p0 pt6 pb20">
                                        <Grid xs={5} className="bold">
                                            Category
                                        </Grid>
                                        <Grid xs={5}>
                                            Management
                                        </Grid>
                                    </ListItem> */}
                                    <ListItem container className="p0 pt6 pb20">
                                        <Grid xs={5} className="bold">
                                            Location
                                        </Grid>
                                        <Grid xs={5}>
                                            {a?.employee[0]?.TGSLocation?.name}

                                        </Grid>
                                    </ListItem>
                                    <ListItem container className="p0 pt6 pb20">
                                        <Grid xs={5} className="bold">
                                            Sub Department
                                        </Grid>
                                        <Grid xs={5}>
                                            {a?.employee[0]?.SubDepartment?.name}
                                        </Grid>
                                    </ListItem>


                                    
                                  
                                </List>
                            </Grid>
                        </Grid>




                        {/* Termination Date */}
                        <form onSubmit={onSubmit} style={{ width: '100%' }}>
                            <Grid xs={12} container className="mt40">
                                <Grid xs={12} md={6}>
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>



                                            <Grid xs={12} className="mbold">
                                                Termination Date
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <TextField
                                                    id="date"
                                                    type="date"
                                                    onChange={(e) => { setForm({ ...form, terminationDate: e.target.value }) }}

                                                    className="DateTimePicker"
                                                    defaultValue="MM-DD-YYYY"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* -------------- */}
                                    <Grid xs={12} className="mt30">
                                        <Grid xs={12}>
                                            <Grid xs={12} className="mbold">
                                                Termination Reason
                                            </Grid>
                                            <Grid xs={12} className="mt14">
                                                <Autocomplete
                                                    className="w100p"
                                                    onChange={(e,newValue) => { setForm({ ...form, terminationReason: newValue.title }) }}
                                                    // onChange={(e, newValue) => { console.log(newValue)}}

                                                    id="combo-box-demo"
                                                    options={ReasonsTerminat}
                                                    getOptionLabel={(option) => option.title}
                                                    renderInput={(params) => <TextField {...params} label="Select" variant="outlined" />}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid xs={12} container className="mt20">
                                <Grid xs={12} md={6}>
                                    {/* ---------- */}
                                    <Grid xs={12} container>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12}>
                                                <Grid xs={12} className="mbold">
                                                    Comments
                                                </Grid>
                                                <Grid xs={12} className="mt14">
                                                    <TextareaAutosize onChange={(e) => { setForm({ ...form, comment: e.target.value }) }} className="w100p" rowsMin={6} placeholder="Comment here" />
                                                </Grid>
                                                <Typography variant="h6" className="MuiTypography-subtitle2 MuiTypography-colorTextSecondary" component="h6">
                                                    Please leave this field empty if you have no comments
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    {/* ---------- */}
                                    {/* <Grid xs={12} container>
                                        <Grid xs={12} className="mt30">
                                            <Grid xs={12}>
                                                <Grid xs={12} className="mbold">
                                                    Attach Additional Files
                                                </Grid>
                                                <Grid xs={12} id="Step2DragFile" className="Step2DragFile mt14">
                                                    Drop File Here OR <Button>Select Files</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid> */}
                                </Grid>
                                <Grid xs={12} className="mt50">
                                    <Grid xs={12} md={6} container justify="space-between">
                                        {/* <Link to="/employees" className="LinkButtonBack">Back</Link> */}
                                        {/* to="/employees-profile/terminated */}
                                        <Button type="submit" className="LinkButton">Save & Continue</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    {/* Page Start End */}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Termination;