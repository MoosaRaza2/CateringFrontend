import React from 'react'
import "../Styles/NavbarCustomer.css"
import caters from '../Images/caters.png'
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import mapp from "../Images/mapp.jpg"

import Popup from 'reactjs-popup';
const emp=<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="27px" viewBox="0 0 24 24" width="45px" fill="white"><g><rect fill="none" height="24" width="24" y="0"/></g><g><g><rect height="1.5" width="4" x="14" y="12"/><rect height="1.5" width="4" x="14" y="15"/><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,7V4h2v3v2h-2V7z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z"/><circle cx="9" cy="13.5" r="1.5"/><path d="M11.08,16.18C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43 C12,16.96,11.64,16.42,11.08,16.18z"/></g></g></svg>
const live=<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z"/></svg>
const pp= <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="42px" fill="green"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" /></svg>
const home = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
const logout = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" /></g></svg>
const logo = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="54px" fill="white"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
const login = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" /></g></svg>
const request = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>
const order = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" /></svg>
const loc = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
const fav = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
const menu = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
const chat = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" /></svg>
const buy = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="white"><g><rect fill="none" height="17" width="17" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
const profile = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="44px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" /></svg>
const ManagementNavbar = ({name}) => {
  return (


    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className='navbar' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div className='logo'>
          <Popup trigger={<button className='but' style={{ backgroundColor: "green", border: "none" }}>{menu}</button>} position="right center">

            <div className='act' style={{ borderRadius: "10px", width: "250px", height: "22vmax", marginTop: "25vmax", marginLeft: "2vmax", backgroundColor: "green" }}>

              <ul className='uls' style={{ listStyle: "none" }}>
                <li style={{ padding: "15px" }}>{live} <a style={{ textDecoration: "none", color: "white", fontSize: "large", cursor: "pointer" }} href="/HomePagemanagment">Live Tracking</a> </li>
                <li style={{ padding: "15px" }}>{order} <a style={{ textDecoration: "none", color: "white", fontSize: "large", cursor: "pointer" }} href="/AddOrders">Add Orders</a> </li>
                <li style={{ padding: "15px" }}>{emp} <a style={{ textDecoration: "none", color: "white", fontSize: "large", cursor: "pointer" }} href="/AddEmployee">Add Employee</a> </li>
                <li style={{ padding: "15px" }}>{emp} <a style={{ textDecoration: "none", color: "white", fontSize: "large", cursor: "pointer" }} href="/ViewEmployee"> View Employees</a> </li>
                <li style={{ padding: "15px" }}>{emp} <a style={{ textDecoration: "none", color: "white", fontSize: "large", cursor: "pointer" }} href="/CalculateSalaries"> Calculate Salaries</a> </li>

              </ul>

            </div>
          </Popup>

        </div>
        <div >
        {!name ?(
              <Button style={{ color: "white", borderColor: "white" }} variant="outline-primary"> You want Services For your Event?</Button>
          ):(
            <Button style={{ color: "white", borderColor: "white",marginRight:"10px" }} variant="outline-primary"> <a style={{textDecoration:"none",color:"white"}} href="/">Welcome {name}!</a> </Button> 
          )
}
        </div>
        <div className='chats'>
        {!name ?(
               <Button style={{ color: "white", borderColor: "white" }} variant="outline-primary"> SIGN UP NOW</Button>
          ):(
            <Button style={{ color: "white", borderColor: "white",marginRight:"10px" }} variant="outline-primary"> <a style={{textDecoration:"none",color:"white"}} href="/">{logout}Logout</a> </Button> 
          )
}
         
        </div>


      </div>
     

    </div>


  )
}

export default ManagementNavbar