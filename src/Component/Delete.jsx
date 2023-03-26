import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { useParams } from "react-router-dom";

const Delete = () => {
    let{ id}=useParams();
    console.log(id);
    const navigate = useNavigate();

    const CallHomePage = async (e) => {

   
        try {
          
            console.log(id);
          const res = await fetch(`/ViewMenus/Delete/${id}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include"
          });
    
          const data = await res.json();
        
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }else{
              window.alert("deleted Successfully")
              navigate("/ViewMenus")
          }
        } catch (err) {
          console.log(err);
        }
      }
    
    
      useEffect(() => {
        CallHomePage();
      }, [])
  return (
    <div>Delete</div>
  )
}

export default Delete