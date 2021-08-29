import React from "react";
import {withRouter} from "react-router-dom";
 import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../styles/cartpage.css"
import {Formik,Form} from "formik";
import * as Yup from "yup";
import axios from "axios";
import M from "materialize-css"
import logo from "../images/favicon.png"
import firebase from "firebase"

const formikinitialValues = {
    fn: '',
    ln:'',
    e:'',
    mn:'',
    address:'',
    oa:'',
    city:'',
    pincode:'',
    ce:'',
    promocode:''
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formikvalidationschema = Yup.object().shape({
    fn: Yup.string().min(2,"Too Short").max(30,"Too Long").required("Required"),
    ln: Yup.string().min(2,"Too Short").max(30,"Too Long").required("Required"),
    address: Yup.string().min(2,"Too Short").max(100,"Too Long").required("Required"),
    oa: Yup.string().min(2,"Too Short").max(100,"Too Long"),
    e: Yup.string().email("Invalid email").required("Required"),
    mn: Yup.string().matches(phoneRegExp,"Invalid, please do not entry country code").required("Required"),
    city: Yup.string().min(2,"Too Short").max(30,"Too Long").required("Required"),
    pincode: Yup.number().positive().required("Required"),
    ce: Yup.string().email("Invalid email").required("Required"),
    promocode: Yup.string(),
    nameincard: Yup.string().min(2,"Too Short").max(15,"Too Long").required("Required"),
})



class shippingaddress extends React.Component{

    constructor(props){
        super(props);
        this.state={
            discountpercentage:'10',
            promocodeavailable:0,
            promocode:'',
            fn: '',
            ln:'',
            email:'',
            mn:'',
            address:'',
            oa:'',
           // state:'',
           // country:'India',
            city:'',
            pincode:'',
            ce:'',
            quantity:'1',
        };
       
    }

    


    showrazorpay(){
        const options = {
            "key": "rzp_live_jeqfrt62tt88GZ", // Enter the Key ID generated from the Dashboard
            "amount": localStorage.getItem('orderamount'), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Social Card",
            "description": "Smart way to share",
            "image": {logo},
            "order_id": localStorage.getItem("orderid"), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (Response){
                console.log(Response)
                axios.post('/payment/verify',Response)
                .then((response)=>{
                    if(response.data.status === 'success')
                    {
                        const currUser = localStorage.getItem('userName')
                        firebase.firestore().collection('users').doc(currUser).update({
                            userpaid:1
                        })
                        .then(response => {
                            console.log("updated succesfully",response)
                        })
                        .catch(err => {
                            console.log("update failed")
                        })
                        M.toast({html: 'Confirming your order..', classes: 'rounded'});
                        const orderdata = {
                            "orderid" : Response.razorpay_order_id,
                            "address" : JSON.parse(localStorage.getItem('address')),
                            "userpaid":1
                             }

                        axios.post('/createorderindb',orderdata)
                        .then((response)=>{
                            if(response.data === "success")
                            {
                                localStorage.setItem("isPaid",true)
                                window.location = "/paymentsuccess"
                            }
                            else{
                                window.location = "/paymentfail"
                            }
                            
                        })
                        .catch((err)=>{
                            M.toast({html: 'Oops something went wrong', classes: 'rounded'});
                            console.log(err)})
                        
                    }
                    else{
                        window.location = "/paymentfail"
                    }
                })
                .catch(err => {
                    alert(JSON.stringify(err),null,2)
                })
            },
            "prefill": {
                "name": localStorage.getItem("payname"),
                "email": localStorage.getItem("payemail"),
                "contact": localStorage.getItem("paynumber")
            },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
     
    loadrazorpay(params) {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        document.body.appendChild(script)
        script.onload = this.showrazorpay
    }

    render(){
        return(
            <div>
                <section>
                    <div className="row container">
                        
                        <Formik
                            initialValues={formikinitialValues}
                            onSubmit={ values => {
                                values.promocode = localStorage.getItem("promocode")
                                localStorage.setItem('payname',values.fn)
                                localStorage.setItem('payemail',values.ce)
                                localStorage.setItem('paynumber',values.mn)
                                localStorage.setItem('address',JSON.stringify(values))
                               
                                this.showrazorpay();
                            }}
                            validationSchema={formikvalidationschema}
                            >
                                {({errors,touched,handleSubmit,values,handleChange})=>(
                                    (
                                        <Form onSubmit={handleSubmit}>
                                            <div className="col l12 m12 s12 shippingaddresscontainer">
                                            
                                            <div className="row">
                                                    <div className="col s12 input-field">
                                                    <input name="nameincard" onChange={handleChange} value={values.nameincard} type="text"  />
                                                    <label htmlFor="nameincard">Enter your Name*</label>
                                                            {errors.nameincard && touched.nameincard ? 
                                                            (<div  className="Errorstext">{errors.nameincard}</div>) : null}
                                                    </div>
                                                    <div className="col s12 input-field">
                                                    <input name="ce" onChange={handleChange} value={values.ce} type="text"  />
                                                    <label htmlFor="ce">Enter Contact Email*</label>
                                                        {/* <Field name="ce" type="email" placeholder="Enter Contact Email" /> */}
                                                            {errors.ce && touched.ce ? 
                                                            (<div  className="Errorstext">{errors.ce}</div>) : null}
                                                    </div>
                                                    <h5 className="center">Shipping/Billing Address</h5>
                                                <div className="col s6 input-field">
                                                    <input name="fn" onChange={handleChange} value={values.fn} type="text"  />
                                                    <label htmlFor="fn">First Name*</label>
                                                    {/* <Field name="fn" placeholder="Enter first name" /> */}
                                                        {errors.fn && touched.fn ? 
                                                        (<div  className="Errorstext">{errors.fn}</div>) : null}
                                                </div>
                                                <div className="col s6 input-field">
                                                    <input name="ln" onChange={handleChange} value={values.ln} type="text"  />
                                                    <label htmlFor="ln">Last Name*</label>
                                                        {/* <Field name="ln" placeholder="Enter last name" /> */}
                                                        {errors.ln && touched.ln ? 
                                                        (<div className="Errorstext">{errors.ln}</div>) : null}
                                                </div>
                                                <div className="col s6 input-field">
                                                        <input name="mn" onChange={handleChange} value={values.mn} type="text"  />
                                                        <label htmlFor="mn">Enter mobile number*</label>
                                                        {/* <Field name="mn" placeholder="Enter mobile number" /> */}
                                                        {errors.mn && touched.mn ? 
                                                        (<div className="Errorstext">{errors.mn}</div>) : null}
                                                </div>
                                                <div className="col s6 input-field">
                                                         <input name="e" onChange={handleChange} value={values.e} type="text"  />
                                                        <label htmlFor="e">Enter email*</label>
                                                        {/* <Field name="e" type="e" placeholder="Enter e" /> */}
                                                        {errors.e && touched.e ? 
                                                        (<div className="Errorstext">{errors.e}</div>) : null}
                                                </div>
                                                <div className="col s12 input-field">
                                                        <input name="address" onChange={handleChange} value={values.address} type="text"  />
                                                        <label htmlFor="address">Enter your Address*</label>
                                                        {/* <Field name="address" placeholder="Enter Your address" /> */}
                                                        {errors.address && touched.address ? 
                                                        (<div className="Errorstext">{errors.address}</div>) : null}
                                                </div>
                                               
                                                <div className="col s12 input-field">
                                                        <input name="oa" onChange={handleChange} value={values.oa} type="text"  />
                                                        <label htmlFor="oa">Apartment,colony etc.(optional)</label>
                                                        {/* <Field name="oa" placeholder="Apartment,colony etc.(optional)" /> */}
                                                        {errors.oa && touched.oa ? 
                                                        (<div className="Errorstext">{errors.oa}</div>) : null}
                                                </div>
                                               
                                                <div className="col s6 input-field">
                                                        <input name="city" onChange={handleChange} value={values.city} type="text"  />
                                                        <label htmlFor="city">Enter City*</label>
                                                        {/* <Field name="city" placeholder="Enter city" /> */}
                                                        {errors.city && touched.city ? 
                                                        (<div className="Errorstext">{errors.city}</div>) : null}
                                                </div>
                                                <div className="col s6 input-field">
                                                        <input name="pincode" onChange={handleChange} value={values.pincode} type="text"  />
                                                        <label htmlFor="pincode">Enter Pincode*</label>
                                                        {/* <Field name="pincode" placeholder="Enter pincode" /> */}
                                                        {errors.pincode && touched.pincode ? 
                                                        (<div className="Errorstext">{errors.pincode}</div>) : null}
                                                </div>
                                                <div className="col s12 center">
                                                <button className="btn-large btn-wave-effect" type="submit" onClick={this.checkouthandle}>checkout</button>
                                            </div>
                                            </div>
                                            </div>
                                            
                                            

                                        </Form>
                                    )
                                )}
                        </Formik>
                    </div>
                </section> 
                
            </div>
        )
       
    }
}

export default withRouter(shippingaddress);