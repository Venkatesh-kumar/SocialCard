import React from "react";
import {Link} from "react-router-dom";
import failimg from "../images/paymentfail.gif"

export default class paymentfail extends React.Component{
    render(){
        return(
            <div>
                <div className="row center">
                    <img src={failimg} width="300" height="300" alt="paymentfail"></img>
                </div>
                <div className="container center">
                    <h1 className="red-text">Your Payment is Failed</h1>
                    
                    <h5>Something went wrong, please try again.</h5>
                </div>
                <div className="row center ">
                <Link to="/order">Back to Cart.</Link>
                </div>
            </div>
        )
    }
}