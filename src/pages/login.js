import React from "react"
import "../styles/auth.css"
import {Link} from "react-router-dom";
import firebase from "firebase"

export default class login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            UserNameEntered:'',
            PasswordEntered:'',
            UserNameEmpty:0,
            PasswordEmpty:0,
            UserNotExists:0,
            IncorrectPassword:0
        }
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserNameChange(event){
        this.setState({
            UserNameEmpty:0,
            UserNameEntered:event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            PasswordEmpty:0,
            IncorrectPassword:0,
            PasswordEntered:event.target.value
        })
    }
    handleSubmit(){
        if(this.state.UserNameEntered === '')
        {
            this.setState({UserNameEmpty:1})
        }
        if(this.state.PasswordEntered === '')
        {
            this.setState({PasswordEmpty:1})
        }
        if(this.state.UserNameEntered !== ''){
            firebase.firestore().collection('users').doc(this.state.UserNameEntered).get()
            .then(doc => {
                if(doc.exists)
                {
                    this.setState({UserNotExists:0})
                    if(doc.data().password === this.state.PasswordEntered)
                    {
                        localStorage.setItem("isAuthenticated",1)
                        localStorage.setItem("userName",this.state.UserNameEntered)
                        if(doc.data().userpaid)
                        {
                            window.location = "/update"
                            localStorage.setItem("isPaid",true)
                        }
                        else
                        {
                            window.location = "/order"
                            localStorage.setItem("isPaid",false)
                        }
                    }
                    else{
                        this.setState({IncorrectPassword:1})
                    }
                    
                }
                else
                {
                    this.setState({UserNotExists:1,IncorrectPassword:0})
                }
            })
        }
    }



    render(){
        return(
            <div>
                 <div className="loginbody">
                        <div className="row container">
                            <div className="logincontainer center">
                                <h5 className="center brand-logo"><b>Login to SocialCard</b></h5>
                                <div className="loginfields">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="user_name" type="text" onChange={this.handleUserNameChange} className="validate"></input>
                                            <label htmlFor="user_name">User Name</label>
                                            {this.state.UserNameEmpty?
                                            <div className="red-text left">User name should not be empty</div>    :null
                                        }
                                        {
                                            this.state.UserNotExists?
                                            <div className="red-text left">User does not exists</div>:null
                                        }
                                        </div>    
                                    </div>
                                    
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" onChange={this.handlePasswordChange} className="validate"></input>
                                            <label htmlFor="password">Password</label>
                                            {this.state.PasswordEmpty?
                                            <div className="red-text left">Password should not be empty</div>    :null
                                        }
                                        {
                                            this.state.IncorrectPassword?
                                            <div className="red-text left">Incorrect Password</div>:null
                                        }
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light blue" type="button" onClick={this.handleSubmit} >Login</button>
                                    </div>
                                    <p>Don't you have an account? <Link to="/signup"  >Sign Up</Link>.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}