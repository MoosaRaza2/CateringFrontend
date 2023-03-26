import React, { useState, useEffect } from 'react'
import ManagementNavbar from './ManagementNavbar';
import Form from 'react-bootstrap/Form';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Heading from '../Component/Heading';
import Footer from '../Component/Footer'
const AddOrders = () => {

  const [Description, SetDescription] = useState('');
  const [Address, SetAddress] = useState('');
  const [CustomerName, SetCustomerName] = useState('');
  const [CustomerMobile, SetCustomerMobile] = useState('');
  const [TimeActual, SetTime] = useState('');
  const [OrderDate, SetOrderDate] = useState('');
  const time = new Date(TimeActual).getTime() / 1000;
  const [User, SetUserData] = useState('');
  console.log(User)
  const CallHomePage = async () => {


    try {
      const res = await fetch("/GetUserData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetUserData(data);


      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    CallHomePage();
  }, [])








  const PostData = async (e) => {
    e.preventDefault();
    if (!Description || !Address || !CustomerName || !CustomerMobile || !time || !TimeActual) {
      window.alert("Feild Cant be empty")
    } else {
      const res = await fetch("/OrderAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          Description, Address, CustomerName, CustomerMobile, time, TimeActual
        })

      });
      const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert("Invalid Data")
      } else {
        window.alert("Saved Successfully")
      }



    }


  }
  const HandleChange = (e) => {
    console.log(e.target.value);
    const datetime = new Date();
    const dates = datetime.toISOString().slice(0, 16);
    if (dates > e.target.value) {
      window.alert("Date Must be higher then current Date")
    } else {
      SetTime(e.target.value);
    }
  }

  return (
    <div>
      <div>
        <ManagementNavbar name={User.username} />
      </div>
      <Heading text="Enter Order Details" />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
        <div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control value={Description} onChange={(e) => SetDescription(e.target.value)} style={{ width: "500px" }} type="email" placeholder="Enter Order Description" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control value={Address} onChange={(e) => SetAddress(e.target.value)} type="text" placeholder="Enter Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control value={CustomerName} onChange={(e) => SetCustomerName(e.target.value)} type="text" placeholder="Enter Customer Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control value={CustomerMobile} onChange={(e) => SetCustomerMobile(e.target.value)} type="Number" placeholder="Enter Customer Mobile Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control value={TimeActual} onChange={HandleChange} type="datetime-local" />
            </Form.Group>


            <Button onClick={PostData} style={{ backgroundColor: "green", borderColor: "green", marginTop: "40px", marginLeft: "11vmax" }} variant="primary"> Save Record </Button>
          </Form>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default AddOrders