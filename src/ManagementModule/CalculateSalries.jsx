import React, { useState, useEffect } from 'react'

import Table from 'react-bootstrap/Table'
import caterimage from "../Images/caterimage.jpg"
import ManagementNavbar from './ManagementNavbar';
import Form from 'react-bootstrap/Form';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Heading from '../Component/Heading';
import Footer from '../Component/Footer'

const CalculateSalries = () => {

    const [userData, SetuserData] = useState('');
    const [Days, SetDays] = useState('');
    const [Salarys, SetSalarys] = useState('');
    const [EmployeeArray, SetEmployeeArray] = useState([]);
    const CallHomePage = async (e) => {


        try {
            const res = await fetch("/ViewEmployees", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            SetuserData(data.user);
            SetEmployeeArray(data.EmployeeData);



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
    const CallMethod = () => {
        window.alert(`Salary is ${Salarys}`)

    }

    const CalculateSalary = (ids) => {
        console.log(ids);
        const remainingArr = EmployeeArray.filter(data => data._id == ids);
        const [{ Salary }] = remainingArr
        console.log(Salary);
        if (Days > 0 && Days < 30) {
            window.alert(`Salary is ${Salary * Days}`)

        }

        //   SetSalarys(Salary*Days);
        //  CallMethod();

    }
    console.log(Days)
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
                            <th>Enter Days</th>
                        </tr>
                    </thead>



                    <tbody>
                        {
                            EmployeeArray?.map(Mobj => (


                                <tr >

                                    <td >{Mobj.Name}</td>
                                    <td >{Mobj.Address}</td>
                                    <td>{Mobj.Mobile}</td>
                                    <td>{Mobj.Salary}</td>
                                    <td> <select onChange={(e)=>SetDays(e.target.value)} style={{width:"150px",height:"30px",marginRight:"5px"}} id="cars" name="cars">
                                    <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                       
                                    </select> 
                                    <Button onClick={() => CalculateSalary(Mobj._id)} style={{ backgroundColor: "green", borderColor: "green" }}>Calculate</Button>  </td>
                                </tr>

                            ))
                            //<Button style={{ backgroundColor: "green", borderColor: "green", marginRight: "10px" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href={`/ViewEmployees/Edit/${Mobj._id}`}>Edit</a>
                        }


                    </tbody>
                </Table>
            </div>





            <Footer />

        </div>
    )
}

export default CalculateSalries