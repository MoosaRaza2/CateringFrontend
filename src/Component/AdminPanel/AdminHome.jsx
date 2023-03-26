import React,{useState,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from '../Footer'
import Heading from '../Heading'
import Table from 'react-bootstrap/Table'

const AdminHome = () => {
    const[userData,SetuserData]=useState([]);
    const[date,SetDate]=useState('');
    const[userdat,Setuserdat]=useState([]);
   console.log(userData)
    const CallHomePage=async(e)=>{
    
        
        try{
          const res=await fetch("/AdminDetails",{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });
   
          const data=await res.json();
          SetuserData(data.result);
       
          
         
   
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
  //  console.log(menuArray);
 

const HandleChange=(e)=>{

  const date=e.target.value;
  console.log(date)
   SetDate(date);
   
 

}
const Search=()=>{
 


  const array=userData.filter(obj => {
    return obj.dates === date
  })
   console.log(array);
   SetuserData(array);


}

  return (
    <div>
        <div>
            <AdminNavbar/>
          
        </div>
        <div>
            <Heading text="Order & Transaction Details"/>
            <input value={date} onChange={HandleChange} style={{width:"400px",marginLeft:"550px",padding:"10px",marginBottom:"5px"}} type="date" /> <br />
             <span style={{marginLeft:"670px",fontSize:"x-large"}}>Select Date</span>
            <Table striped bordered hover>
                            <thead>
                                <tr>
        
                                    <th>Customer Email</th>
                                    <th>Customer Name</th>
                                    <th>Catering Name</th>
                                    <th>Transactio ID</th>
                                    <th>Amount</th>
                                   
                                    <th>Date</th>
                                    <th>Address</th>

                                </tr>
                            </thead>
           
               
                        
                            <tbody>
                            {
                              
                              userData.filter(obj => obj.dates==date).map(Mobj => (
                        
                        
                                <tr key={Mobj._id}>
                                  
                                    <td >{Mobj.Customeremail}</td>
                                    <td >{Mobj.CustomerName}</td>
                                    <td> {Mobj.CateringNames} </td>
                                    <td>  {Mobj.id}</td>
                                    <td>  {Mobj.payment}</td>
                                 
                                    <td>{Mobj.dates}</td>
                                    <td>{Mobj.address}</td>
                                </tr>
                              
                    )   
                      

                    )}
                    
                
                 </tbody>
                  </Table>
                        
                 
                
        </div>

        <Footer/>
    </div>
  )
}

export default AdminHome