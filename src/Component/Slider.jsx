import react, { useState,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const loc = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"


const Slider = (props) => {
  const navigate = useNavigate();
 

  const [address, setAddress] = useState("");
  const[latitude,SetLatitude]=useState('');
  const[longitude,SetLongitude]=useState('');


  const key=('AIzaSyDHGunJ6NqvbKLKZpcaldJWY_xeTkqY_Gw');
  const geoApi=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${key}`;
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    SetLatitude(latLng.lat)
    SetLongitude(latLng.lng);
  };
 
  const PostData=async(e)=>{
    e.preventDefault();

    if(!address){
      window.alert("Set Location First");

    }else{
      const res=await fetch("/CustomerHome",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          address,longitude,latitude
        })
      });
      
      
      if (res.status === 400 ) {
        window.alert("failed to Save");
      
      } else {
        navigate("/carteringmainpage")
      }
    }

    
    
  }
 
  
  
  const CurrenLocation=()=>{
   
     fetch(geoApi)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setAddress(data.results[0].formatted_address)
    })
    .catch(err=>console.warn(err.message))

  }
  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition((position)=>{
      SetLatitude(position.coords.latitude);
      SetLongitude(position.coords.longitude);
      
  
    })
    
 
  }, [])
  return (
    <Carousel fade>

      {
        props.start.map((item) => (
          <Carousel.Item>
            <img src={item}
              alt="FirstSlide" className='d-block w-100' height="450px" width="20%" />

            <Carousel.Caption>
              <div>
                <h2 style={{ color: "black", marginBottom: "30px" }}>Welcome To Catering Provider Management System</h2> <br /> <br /> <br /> <br />
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  
                   
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

                    
                    <div>


                      <input style={{ backgroundColor: "white", width: "40vmax", borderRadius: "5px", height: "4vmax", border: "none", borderBottom: "1px solid black", marginRight: "5px" }} {...getInputProps({ placeholder: "Type address" })} />
                      <Button onClick={PostData} style={{ backgroundColor: "green", color: "white", borderColor: "green", marginRight: "10px", height: "4vmax" }} variant="outline-primary">  Search Providers  </Button>
                      <Button onClick={CurrenLocation} style={{ backgroundColor: "green", color: "white", borderColor: "green", marginRight: "10px", height: "4vmax" }} variant="outline-primary">Current location </Button>
                      <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map(suggestion => {
                          const style = {
                            backgroundColor: suggestion.active ? "green" : "#FEF5F3",
                            color: "black",
                            padding: "7px",


                          };

                          return (
                            <>

                              <div {...getSuggestionItemProps(suggestion, { style })}>

                                {suggestion.description}
                              </div>

                            </>

                          );
                        })}
                      </div>
                      <div style={{ marginBottom: "8vmax" }}>

                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>

              </div>




            </Carousel.Caption>

          </Carousel.Item>
        ))
      }
    </Carousel>

  )
}

export default Slider;