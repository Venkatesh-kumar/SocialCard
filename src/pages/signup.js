import React from "react"
import "../styles/auth.css"
import firebase from "firebase"
import {Link} from "react-router-dom"
import M from "materialize-css";

export default class signup extends React.Component{

constructor(props){
    super(props);
        this.state={
            UserNameEntered:'',
            PasswordEntered:'',
            EmailEntered:'',
            UserNameNotAvailable:0,
            UserEmpty:0,
            error:1
        };
       this.handleUserNameChange = this.handleUserNameChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleEmailChange = this.handleEmailChange.bind(this)
    }

handleUserNameChange(event){

    this.setState({UserEmpty:0,error:0})
    this.setState({
        UserNameEntered:event.target.value
    })
}

handlePasswordChange(event){
    this.setState({PasswordEmpty:0,error:0})
    this.setState({
        PasswordEntered:event.target.value
    })
}

handleEmailChange(event){
    this.setState({EmailEmpty:0,error:0})
    this.setState({
        EmailEntered:event.target.value
    })
}
handleSubmit(){
    if(this.state.UserNameEntered ==='')
    {
        this.setState({UserEmpty:1,error:1})
    }
    if(this.state.EmailEntered === '')
    {
        this.setState({EmailEmpty:1,error:1})
    }
     if(this.state.PasswordEntered === '')
    {
        this.setState({PasswordEmpty:1,error:1})
    }
    else{
        this.setState({error:0})
    }
   if(!(this.state.error)){
    firebase.firestore().collection('users').doc(this.state.UserNameEntered).get()
    .then((doc)=>{
        if(doc.exists)
        {
            this.setState({UserNameNotAvailable:1})
        }
        else{
            this.setState({UserNameNotAvailable:0})
            firebase.firestore().collection('users').doc(this.state.UserNameEntered).set({
                email:this.state.EmailEntered,
                password:this.state.PasswordEntered,
                userpaid:0,
                orderednfc:0,
                UN:" ",
                Bio:"",
                Instagram:"",
                Facebook:"",
                Twitter:"",
                Whatsapp:"",
                LinkedIn:"",
                Email:"",
                Mobile:"",
                Snapchat:"",
                Youtube:"",
                Website:"",
                Paytm:"",
                Phonepay:"",
                Googlepay:"",
                Accountholder:"",
                Accountnumber:"",
                Bankname:"",
                Ifsc:"",
                About:""

            })
            .then((doc)=>{
                M.toast({html: 'Account created Successfully', classes: 'rounded'});
                window.location = "/login"
            })
            .catch(err => console.log(err))
        }
    })
    .catch(err => {console.log(err)})
   }
}

    render(){
        return(
            <div>
                 <div className="loginbody">
                        <div className="row container">
                            <div className="logincontainer center">
                                <h5 className="center brand-logo"><b>Create Account</b></h5>
                                <div className="loginfields">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="user_name" type="text" onChange={this.handleUserNameChange} className="validate"></input>
                                            <label htmlFor="user_name">User Name*</label>
                                           {this.state.UserNameNotAvailable?
                                                <div className="red-text left">Sorry, Username not available</div>:null
                                            }
                                            {
                                                this.state.UserEmpty?
                                                <div className="red-text left">User name should not be empty</div>:null
                                            }
                                            
                                        </div>    
                                        
                                    </div>
                                    
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" onChange={this.handleEmailChange} className="validate"></input>
                                            <label htmlFor="email">Email*</label>
                                            {
                                                this.state.EmailEmpty?
                                                <div className="red-text">Email should not be empty</div>:null
                                            }
                                        </div> 
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" onChange={this.handlePasswordChange} className="validate"></input>
                                            <label htmlFor="password">Password*</label>
                                            {
                                                this.state.PasswordEmpty?
                                                <div className="red-text">Password should not be empty</div>:null
                                            }
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light blue" type="button" onClick={this.handleSubmit}>Sign Up</button>
                                    </div>
                                    <p>Already have an account? <Link to="/"  >Log In</Link>.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}