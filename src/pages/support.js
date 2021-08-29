import React from "react";
import {Link} from "react-router-dom";
import "../../node_modules/materialize-css/dist/css/materialize.min.css"
import "../styles/supportpage.css"

export default class support extends React.Component{
    render(){
        return(
           <div>
               <section className="ffaqs">
                    <div className="faqs">
                        <div className="row container">
                            <h3 className="blue-text center">Frequently Asked Questions</h3>
                            <div className="col questioncontainer">
                                    <h5><b>What phones are compatible with SocialCard?</b></h5>
                                    <p>List of phones which are compatible with SocialCard are listed down <Link to="/compatiblelist">here</Link></p>
                            </div>
                            <div className="col questioncontainer">
                                <h5><b>How to share SocialCard with Phone not compatible?</b></h5>
                                <p>Using QR code, you can share your SocialCard profile.</p>
                            </div>
                            <div className="col questioncontainer">
                                 <h5><b>I haven't recieved my SocialCard?</b></h5>
                                <p>If you recieved a email saying your order is shipped, please wait for 7 - 10 business days. If its been longer that 10 days, please drop a mail with your order no: <b>support@socialcard.in</b> </p>
                            </div>
                            <div className="col questioncontainer">
                                <h5><b>How many SocialCards i can order?</b></h5>
                                <p>There is no limit.</p>
                            </div>
                            <div className="col questioncontainer">
                                <h5><b>Is there any hidden fee or monthly fee?</b></h5>
                                <p>No, Its a one time purchase for the card. No monthly fee.</p>
                            </div>
                            <div className="col questioncontainer">
                                <h5><b>Can i edit my social networks after i recieved my SocialCard?</b></h5>
                                <p>Yes, you can edit your details at any point of time.</p>
                            </div>
                            <div className="col questioncontainer">
                                <h5><b>How many taps, i can use my SocialCard for?</b></h5>
                                <p>you can use your socialcard for 100,000 taps.</p>
                            </div>
                            <h5 className="center blue-text">For any additional questions, please contact <b>support@socialcard.info</b></h5>
                        </div>
                    </div>
                </section>

                </div>
        )
    }
}