import React,{useState,useEffect} from 'react'

import Table from 'react-bootstrap/Table'
import caterimage from "../Images/caterimage.jpg"
import ManagementNavbar from './ManagementNavbar';
import Form from 'react-bootstrap/Form';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Heading from '../Component/Heading';
import Footer from '../Component/Footer'

const ViewEmployee = () => {

    const[userData,SetuserData]=useState('');
    const[EmployeeArray,SetEmployeeArray]=useState([]);
    const CallHomePage=async(e)=>{
    
        
        try{
          const res=await fetch("/ViewEmployees",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
   
          const data=await res.json();
          SetuserData(data.user);
          SetEmployeeArray(data.EmployeeData);
          
         
   
          if(!res.status===200){
            const error=new Error(res.error);
            throw error;
          }
        }catch(err){
          console.log(err);
        }
      }
   
   
     useEffect(() => {
       CallHomePage();
     }, [])
  
    return (
        <div>
            <div>
            <ManagementNavbar name="Moosa" />
            </div>
            <div>
                        <Heading text="Employee Record" />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
        
                                    <th>Employee Name</th>
                                    <th>Address</th>
                                    <th>Contact Number</th>
                                    <th>Salary Per Day</th>
                                    <th>Operations</th>
                                </tr>
                            </thead>
           
               
                        
                            <tbody>
                            {
                    EmployeeArray?.map(Mobj=>(
                        
                        
                                <tr >
                                  
                                    <td >{Mobj.Name}</td>
                                    <td >{Mobj.Address}</td>
                                    <td>{Mobj.Mobile}</td>
                                    <td>{Mobj.Salary}</td>
                                    <td>  <Button style={{ backgroundColor: "green", borderColor: "green", marginRight: "10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href={`/ViewEmployees/Edit/${Mobj._id}`}>Edit</a> </Button>
                                        <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href={`/ViewEmployees/Delete/${Mobj._id}`}>Delete</a> </Button></td>
                                </tr>
                              
                    ) )  
                      
}
                    
                
                 </tbody>
                  </Table>
                        </div>

                
               

           
            <Footer/>

        </div>
    )
}

export default ViewEmployee