import React,{useState} from 'react'
import buyy from '../Images/buyy.jpg';
import Heading from '../Component/Heading'
import { Form, Button } from 'react-bootstrap'

import StripeCheckout from 'react-stripe-checkout'

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Footer from '../Component/Footer'
import ManagementPaymentForm from "./ManagementPaymentForm"

const PUBLIC_KEY = "pk_test_51L32mVKjJZwCXRHyrAD7RXj1Eg48q2afWX3DMk4nupUE7o8OogvwjmQQSqpv7zOwbgK8gzRdUnM5gYLoyuI2Ctlx00L1z2eYhT"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
const buy = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><g><rect fill="none" height="17" width="17" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
const passwor = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg>
const usernam = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
const emai = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
const LoginPageManagement = () => {

    const[Username,SetUsername]=useState('');
    const[Email,SetEmail]=useState('');
    const[Password,SetPassword]=useState('');
    const[Repassword,SetRepassword]=useState('');
    
    


    return (
        <div>
            <div style={{ height: "50px", backgroundColor: "green" }}>
                <h4 style={{ color: "white", marginLeft: "550px", paddingTop: "10px" }}>{buy}Sign up for ordering Our Management Tool</h4>

            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{}} >
                    <img style={{ borderRadius: "50%", marginLeft: "5vmax", marginTop: "2vmax" }} src={buyy} alt="" height="500px" />
                </div>
                <div style={{ padding: "100px", marginLeft: "100px" }}>
                    <form action="">
                        <div class="input-group">
                            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                             {usernam }
                            </div>
                            <input value={Username} onChange={(e)=>SetUsername(e.target.value)} style={{ padding:"10px",width: "360px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="text" name="name"  placeholder="Enter username"  /> <br />
                        </div>
                        <div class="input-group">
                            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                             {emai}
                            </div>
                            <input value={Email} onChange={(e)=>SetEmail(e.target.value)} style={{ padding:"10px",width: "360px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="text" name="email"  placeholder="Enter email" /> <br />
                        </div>
                        <div class="input-group">
                            <div class="input-group-addon" style={{ marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                             {passwor}
                            </div>
                            <input value={Password} onChange={(e)=>SetPassword(e.target.value)} style={{ padding:"10px",width: "360px", marginBottom: "10px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="password" name="password" placeholder="Enter Password" /> <br />
                        </div>
                        <div class="input-group">
                            <div class="input-group-addon" style={{ marginBottom: "40px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)", padding: '5px' }}>
                            {passwor}
                            </div>
                            <input value={Repassword} onChange={(e)=>SetRepassword(e.target.value)} style={{ padding:"10px",width: "360px", marginBottom: "40px", border: "0.1px solid", borderColor: " rgb(194, 190, 188)" }} type="password" name="repassword"  placeholder="Enter Password"  /> <br />
                        </div>




                        <Elements stripe={stripeTestPromise}>
                            <ManagementPaymentForm username={Username} email={Email} password={Password} repassword={Repassword} />
                        </Elements>
                    </form>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default LoginPageManagement