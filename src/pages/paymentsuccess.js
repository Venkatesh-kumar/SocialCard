import React from "react";
import {Link} from "react-router-dom";
import successimg from "../images/paymentsuccess.gif"

export default class paymentsuccess extends React.Component{
    render(){
        return(
            <div>
                <div className="row center">
                    <img src={successimg} width="300" height="300" alt="paymentsuccess" ></img>
                </div>
                <div className="container center">
                    <h1 className="green-text">Your Payment is Successfull</h1>
                    
                    <p>Thank you for your order. An automated payment reciept will be sent to your contact email.</p>
                    <h5>Update your profile at www.socialcard.in/update</h5>
                </div>
                <div className="row center ">
                <Link to="/update">Update your profile here.</Link>
                </div>
            </div>
        )
    }
}