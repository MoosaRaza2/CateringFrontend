import React, { useState, useEffect } from 'react'
import ManagementNavbar from './ManagementNavbar';
import Form from 'react-bootstrap/Form';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Heading from '../Component/Heading';
import Footer from '../Component/Footer'
const AddEmployee = () => {
    const [User, SetUserData] = useState('');
    const [Name, SetName] = useState('');
    const [Address, SetAddress] = useState('');
    const [Mobile, SetMobile] = useState('');
    const [Salary, SetSalary] = useState('');
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
        try {

            const res = await fetch("/SaveEmployees", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    Name, Address, Mobile, Salary
                })

            });
            const data = await res.json();

            if (res.status === 400 || !data) {
                window.alert("Invalid Data")
            } else {
                window.alert("Saved Successfully")
            }


        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            <div>
                <ManagementNavbar name={User.username} />
            </div>
            <Heading text="Enter Employee Details" />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <div>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control value={Name} onChange={(e) => SetName(e.target.value)} style={{ width: "500px" }} type="email" placeholder="Enter name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control value={Address} onChange={(e) => SetAddress(e.target.value)} type="text" placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control value={Mobile} onChange={(e) => SetMobile(e.target.value)} type="Number" placeholder="Enter Mobile Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <Form.Control value={Salary} onChange={(e) => SetSalary(e.target.value)} type="Number" placeholder="Enter Salary Per day" />
                        </Form.Group>



                        <Button onClick={PostData} style={{ backgroundColor: "green", borderColor: "green", marginTop: "40px", marginLeft: "11vmax" }} variant="primary"> Save Record </Button>
                    </Form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AddEmployee