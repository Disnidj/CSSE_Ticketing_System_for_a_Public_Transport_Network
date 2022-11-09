//import react
import React from 'react'
//import react hooks 
import {useState, useEffect } from 'react'
//import axios
import axios from 'axios'
//import useParams
import {useParams} from 'react-router-dom';
//import backgroud picture


function MarkAvailability() {

 //track the states in function and set values with useState 
 const [RouteNo, setRouteNo]=useState("");
 const [BusNumber, setBusNumber]=useState("");
 const [DriverID, setDriverID]=useState("");
 const [DriverName, setDriverName]=useState("");
 const [InspectorID, setInspectorID]=useState("");
 const [InspectorName, setInspectorName]=useState("");
 

//id initialize to match the data
const id=useParams();


const [appointdriver] = useState({

    RouteNo:"",
    BusNumber:"",
    DriverID:"",
    DriverName:"",
    InspectorID:"",
    InspectorName:""
   
 });

//get one data for a matching ID
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:5000/AppointDriver/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setRouteNo(res.data.appointdriver.RouteNo)
    setBusNumber(res.data.appointdriver.BusNumber)
    setDriverID(res.data.appointdriver.DriverID)
    setDriverName(res.data.appointdriver.DriverName)
    setInspectorID(res.data.appointdriver.InspectorID)
    setInspectorName(res.data.appointdriver.InspectorName)
    
  }).catch(err => console.log(err));



},[]);




  return (
    <div>

        <center>
        <table className='table table-striped' style={{width:'1000px'}} >
           
            <thead>
            <tr>
                  <th>Route No</th>  
                  <th>Bus Number</th>
                  <th>Driver ID</th>
                  <th>Driver Name</th>  
                  <th>Inspector ID</th> 
                  <th>Inspector Name</th> 
                  <th>Availability State</th> 
                
            </tr>
            </thead>
            <tbody> 
                <td>{RouteNo}</td>
                <td>{BusNumber}</td>
                <td>{DriverID}</td>
                <td>{DriverName}</td>
                <td>{InspectorID}</td>
                <td>{InspectorName}</td>

                <td>
                  
                <div className="form-group" style={{marginBottom:'15px', marginLeft:'-20px',color:'white',width:'200px'}}>
                            
                 <input type="text"
                  list="type"
                  name=""
                  className="form-control"
                  placeholder="Select Type"              
                  // value={FuelType} 
                  // onChange={(e) => HandleFuelType(e)} required
                  />
                  <datalist id="type">
                                
                  <option value="Active"></option>
                  <option value="Not Active"></option>
                               
                  </datalist>
                  </div>
                              
                </td>

               
              
                  
                 
        

            </tbody>
          


        </table>
        </center>



                
              
                
              
                         
                               


                         
                          
               
    

                           

          </div>

                   
                   

  
  )
}

export default MarkAvailability