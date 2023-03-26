import React,{useState,useEffect} from 'react'
import NavbarCustomer from './NavbarCustomer'
import Footer from './Footer'
import { Card, Button, Form } from "react-bootstrap";
const ViewRequests = () => {

    const[userData,SetuserData]=useState('');
    const[PostRequest,SetPostRequest]=useState([]);
    const bb = [].concat(PostRequest).reverse();
    console.log(userData)
    const CallHomePage=async(e)=>{
   
   
        try{
          const res=await fetch("/viewReques",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
    
          const data=await res.json();
          SetuserData(data);
          SetPostRequest(data.PostRequest)
          console.log(data)
        
    
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
            <NavbarCustomer name={userData.name}/>
        </div>
        <div>
            {
                PostRequest?(
                    bb.map(Mobj => (
                        <Card style={{ backgroundColor: "#F5F5F5", opacity: ".9", width: "50vmax", margin: "1vmax", height: "15vmax", marginLeft: "24vmax" }} className="text-center">
              <Card.Header>{Mobj.CustomerName}</Card.Header>

             <Card.Body>

                <Card.Text>
                  {Mobj.Description}
                </Card.Text>


                <Button style={{ backgroundColor: "green", borderColor: "green" }} variant="primary"> <a style={{ textDecoration: "none", color: "white" }} href={`/DeleteCatering/${Mobj.PostID}`}>Delete</a> </Button>
                </Card.Body>
                <Card.Footer className="text-muted"> Time  : {Mobj.Times} </Card.Footer>
               </Card>
                    ))


                ):(
                    <h3>No Post Request </h3>
                )
            }

        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default ViewRequests