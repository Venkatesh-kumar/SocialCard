import React from "react";
import {Link} from "react-router-dom";
import "../../node_modules/materialize-css/dist/css/materialize.min.css"
import "../../node_modules/video-react/dist/video-react.css"
import "../styles/homepagestyle.css";
import mobileaccount from "../images/mobileaccount.PNG"
import socialcard_withborder from "../images/socialcard_withborder.PNG"
import qrscanning  from "../images/qrscanning.gif";
import socialcard_withshadow from "../images/socialcard_withshadow.PNG"
import video from "../images/Final1.mp4"
import demo from "../images/demo.mp4"
import banner1 from "../images/banner1.PNG"
import banner2 from "../images/banner2.PNG"
import banner3 from "../images/banner3.png"
import banner4 from "../images/banner4.png"
import { Player } from 'video-react';


import {FaFacebook,FaInstagramSquare,FaWhatsapp,FaTwitter,FaEnvelope,FaGlobe,FaInstagram,FaSoundcloud,FaYoutube,FaLinkedinIn} from "react-icons/fa"
import { FacebookIcon } from "react-share";



export default class home extends React.Component{

    componentDidMount(){
        
    }

    render(){
        return(
           <div>
              
                <section>
                    <div className="row bannercontainer">
                       
                        <div className="col l6 s12 shadowbanner center">
                            <img src={socialcard_withshadow} alt="socialcard"></img>
                        </div>
                        <div className="col l6 s12  center container">
                            <h1 className="blue-text bannertext"><b>Reinventing the Business Card</b></h1>
                            <h4 className="blue-text">Share your profile in Smart way with SocialCard</h4>
                           
                        </div>
                    </div>
                </section>

                {/* <section className="about">
                    <div className="row container" >
                        <div className="col s12 l12 m12 " >
                            <h5 className="center-align white-text" data-aos="fade-down" ><b>About Social Card</b></h5>
                            <h3 className="center-align white-text" data-aos="fade-up">Share your all Social Networks and much more with just One Tap </h3>
                            <p className="center-align">
                                </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row aboutcontainer">
                        <div className="col l5 s12 aboutinfo ">
                            <h4 className="blue-text"><b>What is SocialCard?</b></h4>
                            <p><b>SocialCard is a world's Smartest Business Card integrated with SocialCard Profile. SocialCard helps to share Social media networks, Contact Information, Personal Blog and many more instantly with simple tap of SocialCard.
                                SocialCard does not requires any additional app to work.
                            </b></p>
                        </div>
                        <div className="col l2"></div>
                        <div className="col l5 s12 aboutinfo">
                            <h4 className="blue-text"><b>How SocialCard works?</b></h4>
                                <p><b>Our SocialCard is embedded with Near Field Communication (NFC) Technology that will trigger a link to your personalized SocialCard profile. When SocialCard tapped against a smartphone or any other device a page will open in browser contains your SocialCard Profile.</b> 
                                </p>
                        </div>
                    </div>
                </section> */}

                <section className="freviews">
                    <div className="section  center reviewshead">
                        <h4 className="center-align white-text" data-aos="fade-right">What you can Share with our Smart Business Cards</h4>
                        <div className="carousel carouselcontainer" >
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselfacebookcard" >
                                        <FaFacebook size={120}></FaFacebook>
                                        <p>Facebook</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselinstagramcard" >
                                            <FaInstagramSquare size={120}></FaInstagramSquare>
                                        <p>Instagram</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselwhatsappcard">
                                            <FaWhatsapp size={120} ></FaWhatsapp>
                                            <p>WhatsApp</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carousellinkedincard" >
                                            <FaLinkedinIn size={120}></FaLinkedinIn>
                                            <p>LinkedIn</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselyoutubecard">
                                            <FaYoutube size={120}></FaYoutube>
                                            <p>Youtube</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouseltwittercard" >
                                            <FaTwitter size={120}></FaTwitter>
                                            <p>Twitter</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselsoundcloudcard" >
                                            <FaSoundcloud size={120}></FaSoundcloud>
                                            <p>SoundCloud</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselwebsitecard">
                                            <FaGlobe size={120}></FaGlobe>
                                            <p>Website</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="carousel-item" >
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel carouselenvelopecard">
                                            <FaEnvelope size={120}></FaEnvelope>
                                            <p>Email</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* <section className="howitworks">
                    <div className="checklistcontainer">
                    
                        <div className="row ">
                            <div className="col s12 l8 m6 center">
                                <div data-aos="fade-down">
                                    <img src={mobileaccount} alt="SocialCard" height="450" width="250"></img>
                                </div>
                            </div>
                            <div className="col s12 l4 m6 left ">
                                <div data-aos="fade-up">
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Profile Picture</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Introduction or Bio</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Contact Details</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Social Profiles</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Payment Information</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Personal Blog</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Real time updation</h5>
                                    <h5><i className="material-icons small blue-text">done_outline</i> &nbsp;Many more Networks</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section> */}
               
                {/* <section id="fslider" className="section scrollspy">
                    <div className="slider">
                        <ul className="slides">
                            <li>
                            <img src={banner1} alt="SocialCard" height="450" width="250"></img>
                                <div className="caption center-align white-text">
                                    <h2><b>Profile Picture, Name, Intro or Bio</b></h2>
                                    <h5 className="light text-lighten-3">Your SocialCard Profile will talk everything about you</h5>
                                </div>
                            </li>
                            <li>
                            <img src={banner2} alt="SocialCard" height="450" width="250"></img>
                                <div className="caption center-align white-text">
                                    <h3><b>Social Networks, Contact Information</b></h3>
                                    <h5 className="light text-lighten-3">You can add all your Social Networks and Contact Information to your SocialCard profile</h5>
                                    <h5 className="light text-lighten-3">You can add Facebook, Whatsapp, Blog, Email, Mobile no and many more</h5>
                                </div>
                            </li>
                            <li>
                            <img src={banner3} alt="SocialCard" height="450" width="250"></img>
                                <div className="caption center-align white-text">
                                    <h2><b>Payment Information</b></h2>
                                    <h5 className="light text-lighten-3">You can add your payment details to your SocialCard profile</h5>
                                    <h5 className="light text-lighten-3">You can add Paytm, Google Pay, Phonepe, Debit/Credit Card Information</h5>
                                </div>
                            </li>
                            <li>
                            <img src={banner4} alt="SocialCard" height="450" width="250"></img>
                                <div className="caption center-align white-text">
                                    <h2><b>About and Profile Sharing</b></h2>
                                    <h5 className="light text-lighten-3">You can a short description about you or your company in SocialCard Profile</h5>
                                    <h5 className="light text-lighten-3">You can easily share your profile using WhatsApp, Facebook, Twitter, LinkedIn and Email</h5>
                                    <p></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> */}
               
                {/* <section className="howitworks">
                    <div className="step1container">
                    
                    <div className="row ">
                        <div className="col s12 l6 m6 ">
                            <div className="step1text" data-aos="fade-down">
                                <h3 className="white-text left-align"><b>Smart Business Card</b></h3>   
                                <h5><i className="material-icons small white-text">done</i>&nbsp;Share profile by tapping the card</h5>
                                <h5><i className="material-icons small white-text">done</i>&nbsp;Fits in Pocket and regular Wallets</h5>
                                <h5><i className="material-icons small white-text">done</i>&nbsp;No need of internet or apps required to share</h5>
                                <h5><i className="material-icons small white-text">done</i>&nbsp;One time Purchase, works life time</h5>
                                <h3 className="center-align pricebox">INR <strike className="black-text">1999</strike>&nbsp;499</h3>
                                <div  data-aos="flip-up" className="center">
                                    <Link to="/login" className="btn-large btn-wave-effect buynowbtn">Buy Now</Link>
                                 </div>
                            </div>
                            
                        </div>
                        <div className="col s12 l6 m6 center ">
                            <Player fluid={false} width={320} autoPlay={true} loop>
                             <source src={demo} type="video/mp4"></source>
                            </Player>
                               
                        </div>
                        
                    </div>
                    </div>
                </section> */}

                {/* <section className="howitworks">
                    <div className="step2container">
                        <div className="row ">
                            <div className="col s12 l6 m6 center ">
                                <div data-aos="fade-down">
                                <img src={mobileaccount} alt="SocialCard" height="450" width="250"></img>
                                </div>
                            </div>
                            <div className="col s12 l6 m6 ">
                                <div className="step1text" data-aos="fade-up">
                                <h3 className=" left-align"><b>Virtual Business Card</b></h3> 
                                    <h5><i className="material-icons small blue-text">done</i>&nbsp;Share profile by sharing the link</h5>
                                    <h5><i className="material-icons small blue-text">done</i>&nbsp;Share link via any Social Network</h5>
                                    <h5><i className="material-icons small blue-text">done</i>&nbsp;No need of App required to work</h5>
                                    <h5><i className="material-icons small blue-text">done</i>&nbsp;One time Purchase, works life time</h5>
                                    <h3 className="center-align priceboxvirtual">INR <strike className="blue-text">399</strike>&nbsp;99</h3>
                                    <div  data-aos="flip-up" className="center">
                                    <Link to="/login" className="btn-large btn-wave-effect buynowbtn">Buy Now</Link>
                                 </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="howitworks">
                    <div className="step3container white-text">
                    
                        <div className="row center  white-text ordersmartcard">
                            <div className="col l6 s12 m12 " data-aos="fade-down">
                                <h3> Start Sharing</h3>
                                <h4>Tap the Card </h4>
                                <p>(Check list of Compatible Smartphones <Link to="/compatiblelist"><b>here</b></Link> )</p>
                                <h4>Scan the Card</h4>
                                <p>(Supports all smartphones)</p>
                                <br></br>
                                <div  data-aos="flip-up">
                                <Link to="/login" className="btn-large btn-wave-effect buynowbtn">Buy Now</Link>
                                </div>
                            </div>
                            <div className="col l6 s12 m12 center" data-aos="fade-up">
                                <div>
                                    <img src={qrscanning} alt="socialcard" className="qrscanstyle"></img>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>

                <section className="videosection" >
                    <div >
                        <video  width="100%" autoPlay loop controls>
                            <source src={video} type="video/mp4"></source>
                        </video>
                    </div>
                </section>

                <section className="getnow">
                    <div className=" center getnowcontainer">
                        <h3 className="center-align white-text" data-aos="fade-down">Are you ready for Instant Share?</h3>
                            <div className="col center" data-aos="flip-up">
                            <Link to="/login" className="btn-large btn-wave-effect buynowbtn">Buy Now</Link>
                            </div>
                    </div>
                            
                        
                </section>

                <section className="fonetimefee">
                    <div className="onetimefee">
                        <div className="row ">
                            <div className="col l6 m12 s12 center" data-aos="fade-down" >
                                <img src={socialcard_withborder} alt="images" height="150px" width="250" className="socialcardimage"></img>
                            </div>
                            <div className="col l6 m12 s12 center" data-aos="fade-up">
                                <h3>No Monthly Subscriptions</h3>
                                <h3>One time fee</h3>
                                <div  data-aos="flip-up">
                                <Link to="/login" className="btn-large btn-wave-effect buynowbtn"> Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="ffab">
                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large blue text-daken-3">
                        <i className="material-icons small white-text">forum</i>
                        </a>
                        <ul>
                        <li> <a href="https://www.facebook.com/socialcardofficial-111544603885022" target="_blank" className="btn-floating blue darken-2 "> <FacebookIcon size={48} round={true}></FacebookIcon> </a> </li>
                        <li><a href="https://www.instagram.com/socialcardofficial/" target="_blank" className="btn-floating red"><FaInstagram size={30} round={true}></FaInstagram></a></li>
                        </ul>
                    </div>
                </section>

               
           </div>
        )
    }
}