import React from 'react';
import Navbar from "./components/navbar"
import Home from "./pages/home";
import Support from "./pages/support";
import CompatibleList from "./pages/compatiblelist";
import{Switch,Route} from "react-router-dom"
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Footer from "./components/footer";
import Pagenotfound from "./pages/pagenotfound"
import Refundpolicy from "./pages/refundpolicy"
import Privacypolicy from "./pages/privacypolicy";
import Termofservice from "./pages/termsofservice";
import Login from "./pages/login"
import Signup from "./pages/signup"
import Order from "./pages/cartpage"
import Update from "./pages/update"
import Shipping from "./pages/shipping"
import Paymentfail from "./pages/paymentfail"
import Paymentsuccess from "./pages/paymentsuccess"
import User from "./pages/user";
import SocialCard from "./pages/socialcard"
import Axios from 'axios';

Axios.defaults.baseURL = 'https://asia-east2-socialcard-1d727.cloudfunctions.net/api';
//Axios.defaults.baseURL = 'http://localhost:5000/socialcard-1d727/asia-east2/api';

export default class App extends React.Component{

  componentDidMount=()=>{
    AOS.init();
  }

  render(){
    return(
      <div>
       <Navbar></Navbar>
       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/support" component={Support} />
          <Route path="/compatiblelist" component={CompatibleList} />
          <Route path="/refundpolicy" component={Refundpolicy}></Route>
          <Route path="/termsofservice" component={Termofservice}></Route>
          <Route path="/privacypolicy" component={Privacypolicy}></Route>
          <Route path="/user/:id" component={User}></Route>
          <Route path="/company/socialcard" component={SocialCard}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/update" component={Update}></Route>
          <Route path="/shipping" component={Shipping}></Route>
          <Route path="/paymentfail" component={Paymentfail}></Route>
          <Route path="/paymentsuccess" component={Paymentsuccess}></Route>
          <Route path="*" component={Pagenotfound}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}
