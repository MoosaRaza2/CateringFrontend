import React, { useState, useEffect } from 'react'
import ManagementNavbar from './ManagementNavbar'
import Heading from '../Component/Heading'
import Table from 'react-bootstrap/Table'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
const HomePageManagement = () => {

  const [Results, SetResult] = useState('');
  const [Orders, SetOrders] = useState([]);
  const [OrderID, SetOrderID] = useState('');
  const navigate = useNavigate();
  const[User,SetUserData]=useState('');
  const CallHomePage = async (e) => {


    try {
      const res = await fetch("/getorders", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      SetResult(data.result);
      SetOrders(data.AllOrders)
      SetUserData(data.UserResult)

      console.log(Results)




      if (res.status === 400) {
        window.alert("Add Some Orders for tracking")
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

  const PostData = async () => {

    SetOrderID(Results._id)


    try {


      const res = await fetch(`/DeleteOrder/${OrderID}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"


      });

      const data = await res.json();

      if (res.status === 500 || !data) {
        window.alert("Add Some Orders for tracking")
        const error = new Error(res.error);
        throw error;
      } else {
        window.alert("deleted Successfully");

       
          CallHomePage();


        

      

      }
    } catch (err) {
      console.log(err);
    }



  }


  return (
    <div>
      <div>
      <ManagementNavbar name={User?.username} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{}}>
          <Heading text="Order Preparing In Kitchen" />
          <Table striped bordered hover>
            <thead>
              <tr>

                <th>Order Description</th>
                <th>Address</th>
                <th>Customer Name</th>
                <th>Customer Phone Number</th>
                <th> Delivery</th>
                <th>Mark as Complete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Results?.Description}</td>
                <td>{Results?.Address}</td>
                <td>{Results?.CustomerName}</td>
                <td>{Results?.CustomerMobile}</td>
                <td>{Results?.TimeActual}</td>
                <td><Button onClick={PostData} style={{ backgroundColor: "green", borderColor: "green", color: "white", marginBottom: "3vmax", marginTop: "4vmax" }} variant='contained' type="submit" >Mark As Complete</Button></td>
              </tr>

            </tbody>
          </Table>

        </div>
        <div tyle={{}}>
          <Heading text="Orders In Queue" />
          <Table striped bordered hover>
            <thead>
              <tr>

                <th>Order Description</th>
                <th>Address</th>
                <th>Customer Name</th>
                <th>Customer Phone Number</th>
                <th> Delivery</th>


              </tr>
            </thead>
            <tbody>
              {
                Orders?.map(Mobj => (

                  <tr>
                    <td>{Mobj.Description}</td>
                    <td>{Mobj.Address}</td>
                    <td>{Mobj.CustomerName}</td>
                    <td>{Mobj.CustomerMobile}</td>
                    <td>{Mobj.TimeActual}</td>
                  </tr>

                ))
              }


            </tbody>
          </Table>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePageManagement