import React from "react";
import "./style.css";
import family from "../../images/family-tv.png"
import socialcard_withshadow from "../../images/socialcard_withshadow.PNG"

export default class SocialCard extends React.Component{
    render(){
        return(
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header-content">
                                
                                <h2>welcome to SocialCard! </h2>
                                <p className="mar-p" > With Rinku Cable tv , you can manage services, view statements and pay your bill, get important account notifications and more</p>
                                <button className="btn btn-default btnAdd" id="header-button" style={{display:"none"}}>Install</button>

                            </div>
                        </div>
                        <div className="col-md-6" >
                            <image src="../../images/"></image>
                            <img src={socialcard_withshadow} alt="cable tv gif" id="header-img" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}