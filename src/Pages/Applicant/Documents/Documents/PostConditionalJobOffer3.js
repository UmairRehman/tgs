import React, {useState} from "react";
import {
  Grid,TableContainer,Table,TableCell,TableRow,List,ListItem,Button
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";
import { TabletView } from "react-device-detect";
import { useHistory } from "react-router-dom";
import DatePicker from 'react-date-picker';
import SaveIcon from '@material-ui/icons/Save';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import CancelIcon from '@material-ui/icons/Cancel';
import html2canvas from 'html2canvas';


const PostConditionalJobOffer3 = () => {

  let history = useHistory();

  const [error, setError] = useState('')
  
  const CloseTab = () => {
    window.close();
  }
  const PrintOut = () => {
      window.print();
  }

  const [date, setDate] = useState(new Date())
  const [dob, setDob] = useState(new Date())

  async function submit(){

    let canvas = await(html2canvas(document.querySelector('#capture')));
    let  image = (canvas.toDataURL('image/png'))

    let data ={
      name : document.getElementById("name").value,
      date : date,
      address : document.getElementById("address").value,
      jobDetail : document.getElementById("jobDetail").value,
      dateOfBirth : dob,
      male : document.getElementById("male").value,
      female : document.getElementById("female").value,
      caucasian : document.getElementById("caucasian").value,
      africanAmerican : document.getElementById("africanAmerican").value,
      // vative : document.getElementById("vative").value,
      american : document.getElementById("american").value,
      hispanic : document.getElementById("hispanic").value,
      asian : document.getElementById("asian").value,
      reces : document.getElementById("reces").value,
      referral : document.getElementById("referral").value,
      advertisement : document.getElementById("advertisement").value,
      friend : document.getElementById("friend").value,
      relative : document.getElementById("relative").value,
      walkin : document.getElementById("walkin").value,
      agency : document.getElementById("agency").value,
      recruitment : document.getElementById("recruitment").value,
      other : document.getElementById("other").value,
      image :image

    }
    console.log(data)
    const nullCheck = Object.values(data)
    .reduce((total, accumulator) => total || !accumulator, false);
  
    if (nullCheck== false){
      console.log(data)
    //  save in local storage for submit 
    localStorage.setItem( 'thirdFormDataImage', JSON.stringify(image) )
    localStorage.setItem( 'thirdFormData', JSON.stringify(data) )
      history.push({
        pathname : "/documents/post-conditional-job-offer/4",
      });
    }
    else {
      setError("field must be filed")
      alert("Error! Field must be Filled")
    }

  }


  async function eventHandle(value){
    if (value == "third"){
      submit()  
    }
    else {
     alert('Please go step by step')
    }
  }


  return (
    <Grid id="capture" container xs={12} className="LiqForms-Container">
        <Grid className="FormsHeader">
          <List>
              <ListItem>
                  <Grid className="FormMenuLogo"></Grid>
              </ListItem>
              {/* <ListItem>
                  <Button>
                      <SaveIcon/>
                  </Button>
              </ListItem> */}
              <ListItem>
                  <Button onClick={() => window.print()}>
                      <LocalPrintshopIcon/>
                  </Button>
              </ListItem>
              <ListItem>
                  <Button onClick={() => window.close()}>
                      <CancelIcon/>
                  </Button>
              </ListItem>
          </List>
        </Grid>
        <Grid className="FormPagi">
          <List>
            <ListItem>
              <a onClick={() => eventHandle('first')} 
                // to="/documents/post-conditional-job-offer"
              >
                  1
              </a>
            </ListItem> 
            <ListItem>
              <a 
              onClick={() => eventHandle('second')}
                // to="/documents/post-conditional-job-offer/2"
                >
                  2
              </a>
            </ListItem>
            
            <ListItem className="Active" >
              <a
                onClick={() => eventHandle('none')}
                // to="/documents/post-conditional-job-offer/3"
                >
                3
              </a>
            </ListItem>

            <ListItem>
              <a 
               onClick={() => eventHandle('third')}
              >
                4
              </a>
            </ListItem>
          </List>
        </Grid>
        <TableContainer className="MainTable">
          <Table className="SecondMainTable">
            <TableRow>
              <TableCell>
                <Table className="w100">
                  <TableRow className="w100 mb10 mt10 row justify-center">
                    <TableCell>
                    <Avatar alt="TGS" className="TGSLogoSVG" src="https://tgs.liquidtechnologies.pk/assets/TGS_Logo2.svg" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100">
                    <TableCell className="w100 textCenter">
                    <b>Invitation to Self-Identity for Affirmative Action Reporting Requirements</b><br/>
                    CONFIDENTIAL INFORMATION
                    </TableCell>
                  </TableRow>
                </Table>
                <Table className="mt10">
                  <TableRow>
                    <TableCell className="font11">
                    TGS is committed to taking affirmative action to employ and advance qualified women and minorities, as well as disabled veterans of the Vietnam Era and qualified handicapped individuals. If you would like to be considered under the affirmative action program, please tell us. You may inform us of your desire to benefit under the program at this time and/or at any time in the future. This information is voluntary and refusal to provide it will not subject you to any disciplinary action. Information obtained concerning individuals shall be kept confidential, except that: supervisors, managers and safety personnel may be informed regarding restriction on work or duties. 
                    </TableCell>
                  </TableRow>
                  <TableRow className="border w100 mt10">
                    <TableCell className="p10">
                    Applicants are considered for all positions available and employees are treated during employment without regard to race, color, gender, national origin, age, marital status, veteran status, medical condition, handicap/disability, or any other legally protected status.<br/> 
                    This data is for periodic government reporting and will be kept in a <b><i>Confidential File</i></b> separate from the Application for Employment. <b>YOUR COOPERATION IS APPRECIATED</b>.
                    </TableCell>
                  </TableRow>
                  {/* --**-- */}
                  <TableRow className="w100 mt10">
                    <TableCell className="w100 textCenter bold">
                    (Please Print)
                    </TableCell>
                  </TableRow>
                  {/* --**-- */}
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w50 row pr10">
                    Name:
                    <input type="text" name="textfield" id="name" className="w h18 pl8 bn bb" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                    Date:
                    <DatePicker
                      onChange={(value) => { setDate(value) }}
                      value={date}
                      id="offerDate"
                      className="datePickerReact"
                    />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w100 row">
                    Address:
                    <input type="text" name="textfield" id="address" className="w h18 pl8 bn bb" />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt10 row">
                    <TableCell className="w50 row pr10">
                    Job Title:
                    <input type="text" name="textfield" id="jobDetail" className="w h18 pl8 bn bb" />
                    </TableCell>
                    <TableCell className="w50 row pl10">
                    Date of Birth:
                    <DatePicker
                      onChange={(value) => { setDob(value) }}
                      value={dob}
                      id="offerDate"
                      className="datePickerReact"
                    />
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt8">
                    <TableCell>
                    Government agencies require periodic reports on the gender, ethnicity, handicapped/disabled, veteran and other protected status applicants and employees. This data is for analysis and possible affirmative action only. Submission of information is voluntary. 
                    </TableCell>
                  </TableRow>
                  <TableRow className="w100 mt20 row">
                    <TableCell className="w32">
                      <TableRow className="w100">
                        <TableCell className="w100 bold underLine">GENDER</TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="male" className="w14 h14 mr4 bn bb" />
                          Male
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="female" className="w14 h14 mr4 bn bb" />
                          Female
                        </TableCell>
                      </TableRow>
                    </TableCell>
                    {/* -------- */}
                    <TableCell className="w36">
                    <TableRow className="w100">
                        <TableCell className="w100 bold underLine">RACE</TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="caucasian" className="w14 h14 mr4 bn bb" />
                        Caucasian
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="africanAmerican" className="w14 h14 mr4 bn bb" />
                        African American
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="vative " className="w14 h14 mr4 bn bb" />
                        Native Hawaiian/Pacific Islander
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="american" className="w14 h14 mr4 bn bb" />
                        American Indian/Alaskan Native
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="hispanic" className="w14 h14 mr4 bn bb" />
                        Hispanic or Latino
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="asian" className="w14 h14 mr4 bn bb" />
                        Asian
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="reces" className="w14 h14 mr4 bn bb" />
                        Two or More Races
                        </TableCell>
                      </TableRow>
                    </TableCell>
                    {/* --------- */}
                    <TableCell className="w32">
                      <TableRow className="w100">
                        <TableCell className="w100 bold underLine">REFERRAL SOURCE</TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="referral" className="w14 h14 mr4 bn bb" />
                        Employee Referral
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="advertisement" className="w14 h14 mr4 bn bb" />
                        Advertisement
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="friend" className="w14 h14 mr4 bn bb" />
                        Friend
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="relative" className="w14 h14 mr4 bn bb" />
                        Relative
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="walkin" className="w14 h14 mr4 bn bb" />
                        Walk-In
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="agency" className="w14 h14 mr4 bn bb" />
                        Employment Agency
                        </TableCell>
                        <TableCell className="w100 row mt8">
                        <input type="text" name="textfield" id="recruitment" className="w14 h14 mr4 bn bb" />
                        College Recruitment
                        </TableCell>
                        <TableCell className="w100 row mt16">
                        Other:
                        <input type="text" name="textfield" id="other" className="w h14 mr4 bn bb" />
                        </TableCell>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                </Table>
              
              </TableCell>
            </TableRow>
            <TableRow className="w100 mt20">
              <TableCell className="w100 textCenter">
                Trans-Global Solutions, Inc.<br/>
  1735 W. Cardinal Dr., Beaumont, Texas 77705<br/>
  Phone (409) 720-5413 – Fax (409) 729-7041
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
    </Grid>
  );
  
}
export default PostConditionalJobOffer3;