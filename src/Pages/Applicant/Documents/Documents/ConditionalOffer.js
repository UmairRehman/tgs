import React from "react";
import {
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FormHeader from "../../../../Components/FormHeader";

const ConditionalOffer = () => {
  return (
    <Grid container xs={12} className="LiqForms-Container">
        <FormHeader/>
        <table className="MainTable">
          <tr className="w100">
            <td className="w100">
              <table className="SecondMainTable">
                <tr className="w100">
                  <td className="w100">
                    <table className="w100">
                      <tbody className="w100">
                        <tr className="w100 row justify-between">
                          <td>
                            <div className="PreEmploymentFile">
                              PRE-EMPLOYMENT FILE
                            </div>
                          </td>
                              <td className="row justify-end">
                            <div className="TGSLogo"></div>
                          </td>
                        </tr>
                        <tr className="w100">
                          <td colspan="2" className="w100 header font16 bold textCenter">Conditional Offer of Employment</td>
                          </tr>
                        </tbody>
                      </table>
                  </td>
                </tr>
              </table>
                <table className="w100 mt10">
                <tbody className="w100">
                  <tr className="w100 row">
                    <td className="w50 header font14 italic bold row">Offeree’s Name:<input type="text" name="textfield" id="textfield" className="w64 h22 bn bb" /></td>
                    <td className="w50 header font14 italic bold row">Offer Date:<input type="text" name="textfield" id="textfield" className="w20 h22 pl10 pr10 bn bb textCenter" /><span className="font24">/</span><input type="text" name="textfield" id="textfield" className="w20 h22 pl10 pr10 bn bb textCenter" /><span className="font24">/</span><input type="text" name="textfield" id="textfield" className="w20 h22 pl10 pr10 bn bb textCenter" /></td>
                    </tr>
                  </tbody>
              </table>
              <table className="w100">
                <tbody>
                  <tr>
                    <td className="mt10 pt10 mb10 pb10">Trans-Global Solutions, Inc. (TGS) hereby extends a conditional offer of employment to the aforementioned Offeree, in accordance with the
      following terms and condition and pending negative drug screen and acceptable background check results. This conditional offer of employment
      is not an employment contract and does not, in any way, change, alter or affect the at-will nature of the employment relationship between TGS and
      the Offeree.</td>
                    </tr>
                  </tbody>
                </table>
              <table className="w100">
                <tbody className="w100">
                <tr className="w100 row">
                  <td className="w50 row">Position:<input type="text" name="textfield" id="textfield" className="w80 bn bb" /></td>
                  <td className="w50 row">Pay Rate:<input type="text" name="textfield" id="textfield" className="w38 bn bb" /> <input type="checkbox" className="ml6 mt4"/> Hourly <input type="checkbox" className="ml10 mt4"/> Bi-Weekly</td>
                </tr>
                <tr className="w100 row">
                  <td className="w50 mt10 pt10 row">Location:<input type="text" name="textfield" id="textfield" className="w80 bn bb" /></td>
                  <td className="w50 mt10 pt10 row">Department Code:<input type="text" name="textfield" id="textfield" className="w60 bn bb" /></td>
                </tr>
                </tbody>
              </table>
              <table className="w100 boldBorder mt16 mb16 pt18">
                <tbody className="w100">
                <tr className="w100">
                  <td className="w50 row">Start Date:
                    <input type="text" name="textfield" id="textfield" className="w22 h22 bn bb textCenter" />
                    <span className="font12">/</span>
                    <input type="text" name="textfield" id="textfield" className="w24 h22 bn bb textCenter" />
                    <span className="font12">/</span>
                    <input type="text" name="textfield" id="textfield" className="w24 h22 bn bb textCenter" /></td>
                  <td className="w50">&nbsp;</td>
                </tr>
                </tbody>
              </table>
              <table className="w100 boldBBorder pb12 mb20">
                <tbody className="w100">
                  <tr className="w100 row">
                    <td className="w50"><input type="checkbox" className="mr5"/> Company cell phone</td>
                    <td className="w50"><input type="checkbox" className="mr5"/> Company Laptop</td>
                    </tr>
                  </tbody>
              </table>
              <table className="w100">
                <tbody>
                  <tr>
                    <td>
                  The Offeree understands that by accepting this conditional offer of employment he/she will be required to submit to, and successfully pass, a pre-employment drug screen and background check.<br/><br/>
      Any company property, including but not limited to cellular phone, laptop, or vehicle, received by the employee as a result of this
      conditional offer of employment remains property of TGS and, therefore, may at any time, for any reason, be searched, modified,
      replaced, revised or confiscated by TGS or its representatives.<br/><br/>
      Any fuel card, vehicle, cellular phone, laptop or other company property received by the employee as a result of this conditional
      offer of employment is to be used only for work related purposes and shall not be involved in or used to commit any lewd, vulgar,
      indecent, inappropriate, criminal or morally questionable acts.<br/><br/>
      By accepting this conditional offer of employment the Offeree affirms that he/she possesses sufficient physical and mental condition
      to perform the duties of the offered job, as per the job description. As well, the Offeree states that he/she is willing and able to
      comply with any regulations, industry standards, laws, rules and customs that apply to the performance of the offered job and will
      submit to any necessary training or certification processes needed to successfully perform his/her necessary job duties.
                  </td>
                    </tr>
                  </tbody>
              </table>
              <table className="w100 mt20">
                <tbody className="w100">
                  <tr className="w100 row justify-between">
                    <td className="w50">By signing below the TGS extends the Offer of Employment to the Offeree, according to the aforementioned terms and conditions.</td>
                    <td className="w50">By signing below the Offeree accepts the Offer of Employment made by the TGS, according to the aforementioned terms and conditions.</td>
                    </tr>
                  <tr className="w100 row">
                    <td className="w50"><input type="text" name="textfield" id="textfield" className="w96 bn bb pt10 pb10" /></td>
                    <td className="w50"><input type="text" name="textfield" id="textfield" className="w100 bn bb pt10 pb10" /></td>
                    </tr>
                  <tr className="w100 row">
                    <td className="w50 bold">Trans-Global Solutions, Inc. Representative</td>
                    <td className="w20 bold">Offeree</td>
                  </tr>
                </tbody>
              </table>
              <table className="w100 bold textCenter mt30">
                <tbody className="w100">
                  <tr className="w100">
                    <td className="w100">Trans-Global Solutions, Inc.,</td>
                    </tr>
                  </tbody>
              </table>
              <table className="w100 mt20">
                <tbody>
                  <tr> </tr>
                  </tbody>
              </table>
            </td>
          </tr>
        </table>
    </Grid>
  );
  
}
export default ConditionalOffer;