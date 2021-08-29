import React from "react";
import Axios from "axios";
import "../styles/usercss.css"
import {FaFacebook,FaWhatsapp,FaTwitter,FaEnvelope,FaGlobe,FaLinkedin,FaYoutube,FaInstagram, FaSnapchat, FaPhoneAlt} from "react-icons/fa"
import {IconContext} from 'react-icons';
import firebase from 'firebase/app';
import Loader from 'react-loader-spinner';
import notfound from "../images/paymentfail.gif";
import { Link } from "react-router-dom";
import copy from "copy-to-clipboard";

import M from "materialize-css";
import {FacebookIcon,WhatsappIcon,TwitterIcon ,LinkedinIcon,EmailIcon,FacebookShareButton,WhatsappShareButton,TwitterShareButton,LinkedinShareButton,EmailShareButton } from "react-share"



export default class user extends React.Component{
    
   
     
    constructor(props){
        super(props);
        this.state = {
            userfromprop : props.match.params.id,
            UN:'',
            Bio:'',
            Instagram:'',
            Facebook:'',
            Twitter:'',
            Whatsapp:'',
            LinkedIn:'',
            Email:'',
            Mobile:'',
            Snapchat:'',
            Youtube:'',
            Website:'',
            Paytm:'',
            Phonepay:'',
            Googlepay:'',
            Accountholder:'',
            Accountnumber:'',
            Bankname:'',
            Ifsc:'',
            About:'',
            imageurl:'data:image/png;base64,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',
            profileloaded: 0,
            usernotfound:0,
        }
        this.handleInstagramClick = this.handleInstagramClick.bind(this);
        this.handleFacebookClick = this.handleFacebookClick.bind(this);
        this.handleTwitterClick = this.handleTwitterClick.bind(this);
        this.handleWhatsappClick = this.handleWhatsappClick.bind(this);
        this.handleYoutubeClick = this.handleYoutubeClick.bind(this);
        this.handleSnapchatClick = this.handleSnapchatClick.bind(this);
        this.handleLinkedinClick = this.handleLinkedinClick.bind(this);
        this.handleEmailClick = this.handleEmailClick.bind(this);
        this.handleWebsiteClick = this.handleWebsiteClick.bind(this);
        this.handleMobileClick = this.handleMobileClick.bind(this)
        this.handlePaytmClick = this.handlePaytmClick.bind(this);
        this.handleGooglepayClick = this.handleGooglepayClick.bind(this);
        this.handlePhonepeClick = this.handlePhonepeClick.bind(this);
        
    }


    componentDidMount(){
         Axios.post('/fetchuser',this.state)
        .then((response)=>{
            if(response.data !== "NotFound"){
                this.setState({
                    profileloaded:1,
                    UN:response.data.UN,
                    Bio:response.data.Bio,
                    Instagram: response.data.Instagram,
                    Facebook: response.data.Facebook,
                    Twitter:response.data.Twitter,
                    Whatsapp:response.data.Whatsapp,
                    LinkedIn:response.data.LinkedIn,
                    Email:response.data.Email,
                    Mobile:response.data.Mobile,
                    Snapchat:response.data.Snapchat,
                    Youtube:response.data.Youtube,
                    Website:response.data.Website,
                    Paytm:response.data.Paytm,
                    Phonepay:response.data.Phonepay,
                    Googlepay:response.data.Googlepay,
                    Accountholder:response.data.Accountholder,
                    Accountnumber:response.data.Accountnumber,
                    Bankname:response.data.Bankname,
                    Ifsc:response.data.Ifsc,
                    About:response.data.About,
                })
            }
            else{
                this.setState({usernotfound:1})
            }
         })
         firebase.storage().ref('images/' + this.state.userfromprop).getDownloadURL()
         .then(res => {
             this.setState({imageurl:res})
         })
         
    }

    
    
    handleInstagramClick(){
       const url = "https://www.instagram.com/" + this.state.Instagram
      window.open(url)
    }

    handleFacebookClick(){
        const url = "https://www.facebook.com/" + this.state.Facebook
       window.open(url)
     }
     handleTwitterClick(){
        const url = "https://www.twitter.com/" + this.state.Twitter
       window.open(url)
     }
     handleWhatsappClick(){
        const url = "https://wa.me/91" + this.state.Whatsapp
       window.open(url)
     }
     handleLinkedinClick(){
        const url = "https://www.linkedin.com/in/" + this.state.LinkedIn
       window.open(url)
     }
     handleEmailClick(){
        const url = "mailto:" + this.state.Email
       window.open(url)
     }
     handleSnapchatClick(){
        const url = "https://www.snapchat.com/add/" + this.state.Snapchat
       window.open(url)
     }
     handleYoutubeClick(){
        const url = "https://www.youtube.com/user/" + this.state.Youtube
       window.open(url)
     }
     handleWebsiteClick(){
        const url = "http://"+ this.state.Website
       window.open(url)
     }
     handleMobileClick(){
         const url = "tel:" + this.state.Mobile
         window.open(url)
     }

    handlePaytmClick(){
        copy(this.state.Paytm)
        M.toast({html: 'Paytm number copied', classes: 'rounded'});
    }
    handlePhonepeClick(){
        copy(this.state.Phonepay)
        M.toast({html: 'Phonepe number copied', classes: 'rounded'});
    }
    handleGooglepayClick(){
        copy(this.state.Googlepay)
        M.toast({html: 'Googlepay number copied', classes: 'rounded'});
    }


    render(){
        
        return(
            
            <div>
                {this.state.usernotfound?
                <div>
                <div className="row center">
                    <img src={notfound} width="300" height="300" alt="pagenotfound"></img>
                </div>
                <div className="container center">
                <h5>User not found, Please check <b>Username</b> and try again</h5>
                    
                </div>
                <div className="row center ">
                <Link to="/">Go to Home.</Link>
                </div>
            </div>
                :
                <section className="fprofile">

                   
                    
                    <div className="profile center">
                        <div className="row s12 l12 m12 center">
                            <img src={this.state.imageurl} alt="profilepic" height="200px" width="200px" className="profileimage" />
                            <p className="uniquename"> {this.state.UN}</p>
                            <p>{this.state.Bio}</p>
                        </div>
                        {this.state.profileloaded? 
                        <div className="row container publicprofile ">
                           
                           {this.state.Facebook ? <div className="col  s12 ">
                               <a onClick={this.handleFacebookClick} >
                                   <div className="row profilecontainer center" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "blue" , size:"40px" }}><FaFacebook /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Faceboook</p>
                                       </div>
                                   </div>
                               </a>
                           </div>: null}
                          {this.state.Instagram? <div className="col  s12 ">
                           
                               <a onClick={this.handleInstagramClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "red" , size:"40px" }}><FaInstagram /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Instagram</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                           {this.state.Twitter?<div className="col  s12 ">
                               <a onClick={this.handleTwitterClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "light-blue" , size:"40px" }}><FaTwitter /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Twitter</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}              
                           {this.state.Whatsapp?<div className="col  s12 ">
                               <a onClick={this.handleWhatsappClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "green" , size:"40px" }}><FaWhatsapp /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Whatsapp</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                           {this.state.Snapchat?<div className="col s12 ">
                               <a onClick={this.handleSnapchatClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "yellow" , size:"40px" }}><FaSnapchat /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Snapchat</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                          {this.state.Youtube? <div className="col s12 ">
                               <a onClick={this.handleYoutubeClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "red" , size:"40px" }}><FaYoutube /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Youtube</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                       
                       
                           {this.state.LinkedIn ? <div className="col s12 ">
                               <a onClick={this.handleLinkedinClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "rose" , size:"40px" }}><FaLinkedin /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">LinkedIn</p>
                                       </div>
                                   </div>
                               </a>
                           </div> : null}
                           {this.state.Website?<div className="col s12 ">
                               <a onClick={this.handleWebsiteClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "pink" , size:"40px" }}><FaGlobe /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Website</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                           {this.state.Mobile?<div className="col s12 ">
                               <a onClick={this.handleMobileClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "rose" , size:"40px" }}><FaPhoneAlt /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Mobile</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                       
                      
                           {this.state.Email?<div className="col  s12 ">
                               <a onClick={this.handleEmailClick}>
                                   <div className="row profilecontainer center-align" >
                                       <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "rose" , size:"40px" }}><FaEnvelope /></IconContext.Provider></div>
                                       <div className="col l9 m9 s9 left">
                                           <p className="left socialnetworkname">Mail</p>
                                       </div>
                                   </div>
                               </a>
                           </div>:null}
                            
                           <div className=" col s12">
                             <h4 className="center ">Pay me using</h4>
                           </div>
                         
                           {this.state.Paytm?<div className="col  s12 ">
                                   <a onClick={this.handlePaytmClick}>
                                        <div className="row profilecontainer center-align " >
                                       <div className="col l3 m3 s6 socialnetworkname blue-text">Paytm</div>
                                       <div className="col l9 m9 s6 left">
                                        <p className="left socialnetworkname">{this.state.Paytm}</p>
                                       </div>
                                   </div>
                                   </a>
                           </div>:null}
                           {this.state.Phonepay?<div className="col  s12 ">
                                  <a onClick={this.handlePhonepeClick}>
                                  <div className="row profilecontainer center-align " >
                                       <div className="col l3 m3 s6 socialnetworkname blue-text">Phonepay</div>
                                       <div className="col l9 m9 s6 left">
                                        <p className="left socialnetworkname">{this.state.Phonepay}</p>
                                       </div>
                                   </div>
                                  </a>
                           </div>:null}
                           {this.state.Googlepay?<div className="col  s12 ">
                                   <a onClick={this.handleGooglepayClick}>
                                   <div className="row profilecontainer center-align " >
                                       <div className="col l3 m3 s6 socialnetworkname blue-text">Googlepay</div>
                                       <div className="col l9 m9 s6 left">
                                        <p className="left socialnetworkname">{this.state.Googlepay}</p>
                                       </div>
                                   </div>
                                   </a>
                           </div>:null}
                          

                           {this.state.Accountholder?<div className="col  s12 profilecontainer ">
                                   <div className="row  center-align" >
                                       <div className="col l3 m3 s4 socialnetworkname blue-text">Bank Name</div>
                                       <div className="col l9 m9 s8 left">
                                        <p className="left socialnetworkname">{this.state.Bankname}</p>
                                       </div>
                                    </div>
                                    <div className="row  center-align" >
                                       <div className="col l3 m3 s4 socialnetworkname blue-text">Account Holder</div>
                                       <div className="col l9 m9 s8 left">
                                        <p className="left socialnetworkname">{this.state.Accountholder}</p>
                                       </div>
                                       </div>
                                    <div className="row  center-align" >
                                       <div className="col l3 m3 s4 socialnetworkname blue-text">Account Number</div>
                                       <div className="col l9 m9 s8 left">
                                        <p className="left socialnetworkname">{this.state.Accountnumber}</p>
                                       </div>
                                       </div>
                                    <div className="row  center-align" >
                                       <div className="col l3 m3 s4 socialnetworkname blue-text">IFSC Code</div>
                                       <div className="col l9 m9 s8 left">
                                        <p className="left socialnetworkname">{this.state.Ifsc}</p>
                                       </div>
                                   </div>
                           </div>:null}
                          
                           <div className="col s12">
                           <h4 className="center ">About me</h4>
                           </div>
                           
                           {this.state.About?<div className="col  s12 ">
                                   <div className="row profilecontainer center-align" >
                                      
                                       <div className="col s12 left">
                                        <p className="left socialnetworkname blue-text">{this.state.About}</p>
                                       </div>
                                   </div>
                           </div>:null}
                            {/* {navigator.share?
                                <div className="col s12">
                                <button className="btn-large btn-wave-effect blue" type="button" onClick={this.handleshare()}>Share your profile</button>
                            </div>
                           :null
                            } */}
                            <h4 className="center">Share Profile</h4>
                            <FacebookShareButton url={window.location.href} children="" quote="Socialcard - Smart Way to share"><FacebookIcon size={32} round={true}></FacebookIcon></FacebookShareButton>&nbsp;
                            <WhatsappShareButton url={window.location.href} children="" ><WhatsappIcon size={32} round={true}></WhatsappIcon></WhatsappShareButton>&nbsp;
                            <TwitterShareButton url={window.location.href} children="" title="SocialCard-Smart way to share"><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton>&nbsp;
                            <EmailShareButton url={window.location.href} children="" subject="SocialCard - Smart way to share" body="Hey, Check my profile to get all my contact information, Payment Information and much more"><EmailIcon size={32} round={true}></EmailIcon></EmailShareButton>&nbsp;
                            <LinkedinShareButton url={window.location.href} children="" title="SocialCard-Smart way to share" source="www.socialcard.in"> <LinkedinIcon size={32} round={true}></LinkedinIcon></LinkedinShareButton>&nbsp;
                           
                            
                   </div>
                  :
                   <Loader type="ThreeDots" color="#4caf50" height={50} width={50} />
                    }
                      </div>   
                </section>
                }
           </div>
        )
    }
}