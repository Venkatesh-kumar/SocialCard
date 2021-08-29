import React from "react";
import {Link} from "react-router-dom";
import notfound from "../images/paymentfail.gif"

export default class pagenotfound extends React.Component{
    render(){
        return(
            <div>
                <div className="row center">
                    <img src={notfound} width="300" height="300" alt="pagenotfound"></img>
                </div>
                <div className="container center">
                    <h1>Oops! 404 Page not found</h1>
                    
                </div>
                <div className="row center ">
                <Link to="/">Go to Home.</Link>
                </div>
            </div>
        )
    }
}