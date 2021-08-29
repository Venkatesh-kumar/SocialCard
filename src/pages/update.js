import React from "react"
import "../styles/updatepage.css"
import "../styles/usercss.css"
import {FaFacebook,FaWhatsapp,FaTwitter,FaEnvelope,FaGlobe,FaLinkedin,FaYoutube,FaInstagram, FaSnapchat, FaPhoneAlt} from "react-icons/fa"
import {IconContext} from 'react-icons';
import firebase from 'firebase/app';
import M from "materialize-css";
import Compressor from 'compressorjs';
import { Link } from "react-router-dom";
import socialcard from "../images/socialcard_withborder.PNG"


export default class update extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userfromprop : localStorage.getItem('userName'),
            Secretkey:' ',
            UN:"",
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
            Googlepay:"",
            Phonepay:"",
            Accountnumber:"",
            Accountholder:"",
            Bankname:"",
            Ifsc:"",
            About:"",
            authkey:' ',
            Invalidkey:0,
            Invalidimageauth:0,
            imageurl:'data:image/png;base64,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',
            fileselected: null,
            imageauth:'',
            authenticated:'',
            userenterdkey:'',
            error:'',
            usernotfound:0,
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleInstagramChange = this.handleInstagramChange.bind(this)
        this.handleLinkedinChange = this.handleLinkedinChange.bind(this)
        this.handleMobileChange = this.handleMobileChange.bind(this)
        this.handleSnapchatChange = this.handleSnapchatChange.bind(this)
        this.handleTwitterChange = this.handleTwitterChange.bind(this)
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this)
        this.handleWhatsappChange = this.handleWhatsappChange.bind(this)
        this.handleYoutubeChange = this.handleYoutubeChange.bind(this)
        this.handleupdateclick = this.handleupdateclick.bind(this)
        this.handleFacebookChange = this.handleFacebookChange.bind(this)
       this.handleUNChange = this.handleUNChange.bind(this)
       this.handleBioChange = this.handleBioChange.bind(this)
       this.handlefilechange = this.handlefilechange.bind(this)
       this.handleuploadbutton=this.handleuploadbutton.bind(this)
       this.handlePaytmChange=this.handlePaytmChange.bind(this)
       this.handlePhonepayChange=this.handlePhonepayChange.bind(this)
       this.handleGooglepayChange=this.handleGooglepayChange.bind(this)
       this.handleAccountholderChange=this.handleAccountholderChange.bind(this)
       this.handleAccountnumberChange=this.handleAccountnumberChange.bind(this)
       this.handleBanknameChange=this.handleBanknameChange.bind(this)
       this.handleIfscChange=this.handleIfscChange.bind(this)
       this.handleAboutChange=this.handleAboutChange.bind(this)
    
    }

     componentDidMount(){
         
         if(localStorage.getItem('userName') !== null)
         {
            firebase.firestore().collection('users').doc(this.state.userfromprop).get()
            .then((response)=>{
                if(response.exists){

                   this.setState({
                        UN:response.data().UN,
                        Bio:response.data().Bio,
                        Instagram: response.data().Instagram,
                        Facebook: response.data().Facebook,
                        Twitter:response.data().Twitter,
                        Whatsapp:response.data().Whatsapp,
                        LinkedIn:response.data().LinkedIn,
                        Email:response.data().Email,
                        Mobile:response.data().Mobile,
                       Snapchat:response.data().Snapchat,
                        Youtube:response.data().Youtube,
                        Website:response.data().Website,
                       Secretkey: response.data().Secretkey,
                       Paytm:response.data().Paytm,
                       Phonepay: response.data().Phonepay,
                       Googlepay: response.data().Googlepay,
                       Accountholder: response.data().Accountholder,
                       Accountnumber: response.data().Accountnumber,
                       Bankname: response.data().Bankname,
                       Ifsc: response.data().Ifsc,
                       About: response.data().About,
                       
                    })
                    if((localStorage.getItem('isAuthenticated')=== '1' )&& (response.data().userpaid === 1))
                    {
                        this.setState({authenticated:1})
                    }
                    else{
                     
                        this.setState({authenticated:0})
                    }
                }
                else
                {
                    this.setState({usernotfound:1})
                }
             })
             firebase.storage().ref('images/' + this.state.userfromprop).getDownloadURL()
        .then(res => {
            this.setState({imageurl:res})
        })
         }
    

    }

   

     handleUNChange(event){
        this.setState({UN: event.target.value})
    }
    handleBioChange(event){
        this.setState({Bio: event.target.value})
    }
    handleInstagramChange(event){
        this.setState({Instagram: event.target.value})
    }
    handleTwitterChange(event){
        this.setState({Twitter: event.target.value})
    }
    handleLinkedinChange(event){
        this.setState({LinkedIn: event.target.value})
    }
    handleWhatsappChange(event){
        this.setState({Whatsapp: event.target.value})
    }
    handleYoutubeChange(event){
        this.setState({Youtube: event.target.value})
    }
    handleSnapchatChange(event){
        this.setState({Snapchat: event.target.value})
    }
    handleMobileChange(event){
        this.setState({Mobile: event.target.value})
    }
    handleEmailChange(event){
        this.setState({Email: event.target.value})
    }
    handleWebsiteChange(event){
        this.setState({Website: event.target.value})
    }
    handleFacebookChange(event){
        this.setState({Facebook: event.target.value})
    }

    handlePaytmChange(event){
        this.setState({Paytm: event.target.value})
    }handlePhonepayChange(event){
        this.setState({Phonepay: event.target.value})
    }handleGooglepayChange(event){
        this.setState({Googlepay: event.target.value})
    }handleAboutChange(event){
        this.setState({About: event.target.value})
    }handleAccountholderChange(event){
        this.setState({Accountholder: event.target.value})
    }handleAccountnumberChange(event){
        this.setState({Accountnumber: event.target.value})
    }handleBanknameChange(event){
        this.setState({Bankname: event.target.value})
    }handleIfscChange(event){
        this.setState({Ifsc: event.target.value})
    }
    handleupdateclick(){
        
            firebase.firestore().collection('users').doc(this.state.userfromprop).update({
                UN: this.state.UN,
                Bio: this.state.Bio,
                Facebook: this.state.Facebook,
                Instagram:this.state.Instagram,
                Twitter: this.state.Twitter,
                Youtube: this.state.Youtube,
                LinkedIn: this.state.LinkedIn,
                Snapchat: this.state.Snapchat,
                Email: this.state.Email,
                Mobile: this.state.Mobile,
                Whatsapp: this.state.Whatsapp,
                Website: this.state.Website,
                Paytm: this.state.Paytm,
                Phonepay: this.state.Phonepay,
                Googlepay: this.state.Googlepay,
                Accountholder: this.state.Accountholder,
                Accountnumber: this.state.Accountnumber,
                Bankname: this.state.Bankname,
                Ifsc: this.state.Ifsc,
                About: this.state.About,
                
            })
            .then((response)=>{
                
                    M.toast({html:  ' User Details Updated Successfully', classes: 'rounded'});
                
            })
            .catch(err => {
                M.toast({html:  ' Soomething went wrong', classes: 'rounded'});
            })
       
    }
 

   handlefilechange=event=>{
       this.setState({fileselected:event.target.files[0]})
   }

   handleuploadbutton=event=>{
    
        const file = this.state.fileselected;
    
            if (!file) {
            return;
            }

            const filename = this.state.userfromprop
            new Compressor(file, {
            quality: 0.6,
            width:300,
            height:450,
            success(result) {
            
                firebase.storage().ref('images/'+ filename).put(result)
                .then((response)=>{
                    M.toast({html: 'Image Uploaded, Reload page to see changes', classes: 'rounded'});
                })
            },
            error(err) {
                console.log(err.message);
                M.toast({html: 'Image Uploaded failed', classes: 'rounded'});
            }
        })
        firebase.storage().ref('images/' + filename).getDownloadURL()
        .then(response => {
           
            this.setState({imageurl:response})
        })      
   }

    handlesignout(){
        localStorage.setItem('isAuthenticated',0)
        window.location.reload()
    }   
   
   

    render(){
       return(
          <div>
          
            {this.state.authenticated
            ?
            <section className="fprofile">
                    
                    <div className=" center">
                    
                        <div className="row s12 l12 m12 center container">
                            <br />
                            <br />
                            <div className="col s12">
                            <p className="green-text"> Visit your profile at www.socialcard.in/user/{this.state.userfromprop} </p>
                            </div>

                            <div className="row">
                            <button className="btn btn-wave-effect right grey" onClick={this.handlesignout}>SignOut</button>
                            </div>

                            <br />
                            <div className="col s12">
                                 <img src={this.state.imageurl} alt="profilepic" height="200px" width="200px" className="profileimage" />
                                
                            </div>
                            
                            <div className="row">
                                <div className="col s12 ">
                                <input type="file" accept="image/*" name="img" onChange={this.handlefilechange}></input>
                                </div>
                             </div>
                             <div className="row">
                                <div className="col s12 ">
                                <button className="btn btn-wave-effect" onClick={this.handleuploadbutton}>Upload</button>
                                 </div>
                            </div>
                            
                            <p>Please crop your image to Square dimensions and then upload</p>
                            
                             <div className="input-field s12">
                                <input id="user_name" type="text" value={this.state.UN} placeholder="Enter Username" onChange={this.handleUNChange} className="validate" />
                               
                            </div>
                            <div className="input-field s12">
                                <input id="bio" type="text"  placeholder="Enter Bio" value={this.state.Bio} onChange={this.handleBioChange} className="validate" />
                               
                            </div>
                        </div>
                        <div className="row container publicprofile ">
                                <p>Leave the Networks empty which you don't want to share</p>
                               <div className="col  s12 ">
                                        <div className="row profilecontainer center" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "blue" , size:"40px" }}><FaFacebook /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                            <div className="input-field s12">
                                                <input placeholder="Facebook Username" id="facebook" type="text"  onChange={this.handleFacebookChange} value={this.state.Facebook} className="validate" />
                                                
                                            </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "red" , size:"40px" }}><FaInstagram /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                            <div className="input-field s12">
                                                <input placeholder="Instagram Username" id="instagram" type="text"  onChange={this.handleInstagramChange} value={this.state.Instagram} className="validate" />
                                                
                                            </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "blue" , size:"40px" }}><FaTwitter /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                            <div className="input-field s12">
                                                <input placeholder="Twitter Username" id="twitter" type="text"  onChange={this.handleTwitterChange} value={this.state.Twitter} className="validate" />
                                              
                                            </div>
                                            </div>
                                        </div>
                                </div>
                            
                           
                               <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "green" , size:"40px" }}><FaWhatsapp /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                            <div className="input-field s12">
                                                <input placeholder="Number(without country code)" id="Whatsapp" type="text"  onChange={this.handleWhatsappChange} value={this.state.Whatsapp} className="validate" />
                                           
                                            </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "yellow" , size:"40px" }}><FaSnapchat /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Snapchat Id" id="Snapchat" type="text"  onChange={this.handleSnapchatChange} value={this.state.Snapchat} className="validate" />
                                                 
                                                </div>
                                            </div>
                                        </div>
                                </div>
                              <div className="col s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "red" , size:"40px" }}><FaYoutube /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Youtube Id" id="Youtube" type="text"  onChange={this.handleYoutubeChange} value={this.state.Youtube} className="validate" />
                                                   
                                                </div>
                                            </div>
                                        </div>
                                         
                                </div>
                            
                            
                                <div className="col s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "blue" , size:"40px" }}><FaLinkedin /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                                <div className="input-field s12">
                                                    <input placeholder="LinkedIn Username" id="Linkedin" type="text"  onChange={this.handleLinkedinChange} value={this.state.LinkedIn} className="validate" />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "pink" , size:"40px" }}><FaGlobe /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                            <div className="input-field s12">
                                                    <input placeholder="Website URL" id="Website" type="text"  onChange={this.handleWebsiteChange} value={this.state.Website} className="validate" />
                                                   
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "light-blue" , size:"40px" }}><FaPhoneAlt /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                             <div className="input-field s12">
                                                    <input placeholder="Number(without country code)" id="Mobile" type="text"  onChange={this.handleMobileChange} value={this.state.Mobile} className="validate" />
                                                   
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            
                           
                               <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col l3 m3 s3"><IconContext.Provider value={{ color: "blue" , size:"40px" }}><FaEnvelope /></IconContext.Provider></div>
                                            <div className="col l9 m9 s9 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Enter Mail" id="Mail" type="text"  onChange={this.handleEmailChange} value={this.state.Email} className="validate" />
                                                 
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <h4 className="center">Payment Information</h4>
                                <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col s12 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Enter your Paytm number" id="paytm" type="text"  onChange={this.handlePaytmChange} value={this.state.Paytm} className="validate" />
                                                 
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col s12 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Enter your Googlepay number" id="googlepay" type="text"  onChange={this.handleGooglepayChange} value={this.state.Googlepay} className="validate" />
                                                 
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col s12 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Enter your Phonepay number" id="phonepay" type="text"  onChange={this.handlePhonepayChange} value={this.state.Phonepay} className="validate" />
                                                 
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="col  s12 ">
                                        <div className="row profilecontainer center-align" >
                                            <div className="col s12 left">
                                                Account Details:
                                                <div className="input-field s12">
                                                    <input placeholder="Enter your Bank Name" id="bankname" type="text"  onChange={this.handleBanknameChange} value={this.state.Bankname} className="validate" />
                                                    <input placeholder="Enter Account Holder Name" id="accountholder" type="text"  onChange={this.handleAccountholderChange} value={this.state.Accountholder} className="validate" />
                                                    <input placeholder="Enter your Account Number" id="accountnumber" type="text"  onChange={this.handleAccountnumberChange} value={this.state.Accountnumber} className="validate" />
                                                    <input placeholder="Enter your Bank IFSC Code" id="ifsc" type="text"  onChange={this.handleIfscChange} value={this.state.Ifsc} className="validate" />
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <h4 className="center">About Description</h4>
                                <div className="col  s12 ">
                                    Enter brief Description:
                                        <div className="row profilecontainer center-align" >
                                            <div className="col s12 left">
                                                <div className="input-field s12">
                                                    <input placeholder="Write about you or your company" id="about" type="text"  onChange={this.handleAboutChange} value={this.state.About} className="validate" />
                                                 
                                                </div>
                                            </div>
                                        </div>
                                </div>

                             
                        </div>
                        </div>
                        <div className="row container">
                             <div className="col  s12 center">
                                 <button className="btn btn-wave-effect semi-rounded" onClick={this.handleupdateclick}>Update</button>
                            </div>
                            <div className="col s12">
                            <h5 className="green-text center"> Visit your profile at <a href={`https://www.socialcard.in/user/${this.state.userfromprop}`}>here</a></h5>
                            </div>
                        </div>
                        
                </section>
                :
              <section>
                    <div className="col s12 center" style={{marginTop:100}}>
                    <img src={socialcard} width="250" height="150" alt="Socialcard"></img>
                 </div>
               <h3 className="center"> Please <Link to="/login">login</Link> to contine</h3>
               <p className="center-align">or</p>
               <h5 className="center-align">Please finish your payment to continue <Link to="/order"> here</Link> .</h5>
              </section>
            }
        
           </div>
        )
    }
}