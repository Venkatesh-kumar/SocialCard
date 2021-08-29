import React from "react"
import "../styles/cartpage.css"
import socialcard from "../images/socialcard_withborder.PNG"
import mobileaccount from "../images/mobileaccount.PNG"
import axios from "axios";
import Loader from 'react-loader-spinner';
import {Link} from "react-router-dom"
export default class cartpage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            authstate:localStorage.getItem('isAuthenticated'),
            smartcheckoutclick:0,
            checkoutclick:0
        }
        this.smartcheckouthandle = this.smartcheckouthandle.bind(this);
        this.digitalcheckouthandle = this.digitalcheckouthandle.bind(this)
    }

    smartcheckouthandle(){
        this.setState({smartcheckoutclick:1})
        
        localStorage.setItem("orderamount",499)
        axios.post('/payment/order', {
            amount:599*100,
            payment_capture: '1',
            currency: "INR"
          })
          .then(function (response) {
              localStorage.setItem("orderid",response.data.id)
              window.location = "/shipping"
          })
          .catch(function (error) {
              this.setState({smartcheckoutclick:0})
            console.log(error);
          });
         
    }

    digitalcheckouthandle(){
        this.setState({checkoutclick:1})
       
        localStorage.setItem("orderamount",99)
        axios.post('/payment/order', {
            amount:99*100,
            payment_capture: '1',
            currency: "INR"
          })
          .then(function (response) {
              localStorage.setItem("orderid",response.data.id)
              window.location = "/shipping"
          })
          .catch(function (error) {
              this.setState({checkoutclick:0})
            console.log(error);
          });
         
    }

    alreadyuserhandle(){
        window.location = "/update"
    }
    render(){
        return(
           <div>
               {this.state.authstate === '1'?
                
                 <div className="row container">
                     <div className="alreadyusercontainer">
                     <h5 className="green-text center"> Already have an account? Update your profile <Link to="/update">here</Link></h5>
                         </div>
                 <div className="col l6 m6 s12 smartcardcontainer">
                      <div className="cardimage">
                      <img src={socialcard} height="175" width=" 300" alt="socialcard" ></img>
                      </div>
                      <h3 className="blue-text center-align"><b>Smart Business Card</b></h3>   
                              <h5><i className="material-icons small blue-text">done</i>&nbsp;Share profile by tapping the card</h5>
                              <h5><i className="material-icons small blue-text">done</i>&nbsp;Ships within 3 Business Days</h5>
                              <h5><i className="material-icons small blue-text">done</i>&nbsp;Fits in Pocket and regular Wallets</h5>
                              <h5><i className="material-icons small blue-text">done</i>&nbsp;No need of any apps required to share</h5>
                              <h5><i className="material-icons small blue-text">done</i>&nbsp;One time Purchase, no Subscriptions</h5>
                              <h5><i className="material-icons small blue-text">done</i>&nbsp;Unlimited taps, works life time</h5>
                              <h3 className="center-align pricebox">INR 499</h3>
                              <p className="center-align"><b>Standard shipping charge of INR 100 will be added during checkout</b></p>
                              <div  data-aos="flip-up" className="center">
                              {this.state.smartcheckoutclick? <Loader type="Puff" color="green" height={60} width={60} />:
                             <button className="btn-large btn-wave-effect " onClick={this.smartcheckouthandle}>Checkout</button>}
                 </div>
                 </div>
                 <div className="col l6 m6 s12">
                 <div className="mobileimage">
                      <img src={mobileaccount} height="450" width=" 250"  alt="socialcard"></img>
                      </div>
                      <h3 className="blue-text center-align"><b>Digital Business Card</b></h3>   
                                   <h5><i className="material-icons small blue-text">done</i>&nbsp;Share profile by sharing the link</h5>
                                  <h5><i className="material-icons small blue-text">done</i>&nbsp;Instant Activation</h5>
                                  <h5><i className="material-icons small blue-text">done</i>&nbsp;Share link via any Social Network</h5>
                                  <h5><i className="material-icons small blue-text">done</i>&nbsp;Share using QR code from profile</h5>
                                  <h5><i className="material-icons small blue-text">done</i>&nbsp;No need of App required to work</h5>
                                  <h5><i className="material-icons small blue-text">done</i>&nbsp;One time Purchase, no Subscriptions</h5>
                                  <h5><i className="material-icons small blue-text">done</i>&nbsp;Profile will active for lifetime</h5>
                                  <h3 className="center-align pricebox">INR 99</h3>
                              <div  data-aos="flip-up" className="center">
                              {this.state.checkoutclick? <Loader type="Puff" color="green" height={60} width={60} />:
                             <button className="btn-large btn-wave-effect " onClick={this.digitalcheckouthandle}>Checkout</button>}
                 </div>
                 </div>
             </div>
           :
           
           window.location = "/login"
            }
            </div>
        )
    }
}