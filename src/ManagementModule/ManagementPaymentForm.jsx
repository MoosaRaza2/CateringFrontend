import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CARD_OPTIONS = {

    iconStyle: "solid",
    style: {
        base: {

            iconColor: "black",
            color: "black",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "black" },
            "::placeholder": { color: "black" }
        },
        invalid: {
            iconColor: "black",
            color: "black"
        }
    }
}

export default function ManagementPaymentForm({ username, email, password, repassword }) {

    const navigate = useNavigate();
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()



    const handleSubmit = async (e) => {
        e.preventDefault()
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!username || !email || !password || !repassword) {
            window.alert("fill Every thing")
        }else
        if(password!=repassword){
            window.alert("password not matched")
        }else if(!email.match(re)){
            window.alert("invalid email")
        }else
        {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement)
            })
    
    
            if (!error) {
                try {
                    const { id } = paymentMethod
    
                  
                    const res = await fetch("/ManagementRequestpayment", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username, email, password, repassword, id
                        })
                      });
                      const data = await res.json();
                  
                  
                      if (res.status === 400 || !data) {
                        window.alert("Email Already Registered");
                        console.log("invalid Registration")
                        
                      } else {
                        window.alert("Registered Successfully");
                        console.log("successfull login")
                        setSuccess(true);
                         navigate("/ManagementLogin")
                      }
                        
                    
                    
                     
                } catch (error) {
                    console.log("Error", error)
                    window.alert("invalid data")
                    
                }
    
            } else {
                console.log(error.message)
    
            }
        }

        }

        
      

    return (
        <>
            {!success ?
                <form >
                    <fieldset className="FormGroup">
                        <div>
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>

                    <Button onClick={handleSubmit} style={{ backgroundColor: "green", borderColor: "green", marginTop: "40px" }} variant="primary">Pay 2000 RS </Button>
                </form>
                :
                <div>
                    <h2>Payment Has been done Successfully</h2>
                </div>
            }

        </>
    )
}
