import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import timetableImage from '../../img/busdrivers.jpg';


function UpdateDriverAppoints() {




  //use state to track state in function components
  const [RouteNo, setRouteNo]=useState("");
  const [BusNumber, setBusNumber]=useState("");
  const [DriverID, setDriverID]=useState("");
  const [DriverName, setDriverName]=useState("");
  const [InspectorID, setInspectorID]=useState("");
  const [InspectorName, setInspectorName]=useState("");
  const [Availability, setAvailability]=useState("");
  
  const id = useParams();

  
  const [appointdriver] = useState({

    RouteNo:"",
    BusNumber:"",
    DriverID:"",
    DriverName:"",
    InspectorID:"",
    InspectorName:"",
    Availability:""
   
 })
   
//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("RouteNo",RouteNo);
    formData.append("BusNumber",BusNumber);
    formData.append("DriverID",DriverID);
    formData.append("DriverName",DriverName);
    formData.append("InspectorID",InspectorID);
    formData.append("InspectorName",InspectorName); 
    formData.append("Availability",Availability);  
   

    setRouteNo("")
    setBusNumber("");
    setDriverID("");
    setDriverName("");
    setInspectorID("");
    setInspectorName("");
    setAvailability("");
  
   
console.log(formData.get('RouteNo'));


appointdriver.RouteNo=formData.get('RouteNo');
appointdriver.BusNumber=formData.get('BusNumber');
appointdriver.DriverID=formData.get('DriverID');
appointdriver.DriverName=formData.get('DriverName');
appointdriver.InspectorID=formData.get('InspectorID');
appointdriver.InspectorName=formData.get('InspectorName');
appointdriver.Availability=formData.get('Availability');



console.log(appointdriver);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/AppointDriver/update/${id.id}`,appointdriver)
.then(res=>{
  console.log("Return Data",res);
  alert("Update Success!!");
  

})
.catch(err=>{
  alert("Update Failed!!");
  console.log(err);
});

}



//get one data to update
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
    setAvailability(res.data.appointdriver.Availability)
   
  }).catch(err => console.log(err));



},[]);



  
     

    return (

          
        <div>
        
                  
          
        <div>
    <br/><br/>
  
    <center>
   
   

        
        <br/><br/>
        <h1 style={{ textAlign:'center',fontSize:"60px", height:'80px', backgroundColor:"#87ceeb", marginTop:'-100px'}}>Appointed Drivers - Update</h1>
        <br/><br/>
        <table   style={{backgroundColor :'black', marginTop:'-60px'}}>
          <tr>
            <th>
              <br/><br/>
    
          <form style={{marginLeft:'30px', marginRight:'200px', marginTop:'-40px'}}>
       
          <br/>
            <table>
              <thead>
                <tr>
                  <th>
         
                         <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                          <label  className="form-label">Route No:</label>
                          <input type="text" className="form-control"
                          name="RouteNo"
                          value={RouteNo} 
                          onChange={e => setRouteNo(e.target.value)}
                        />
                        </div>
                   
                        </th>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      
                      
                        </tr>
              </thead>
              <br/>
              <tbody>
                <tr>

                          <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                          <label  className="form-label">Bus Number :</label>
                          <input type="text" className="form-control"
                          name = "BusNumber"
                          value={BusNumber} 
                          onChange={e => setBusNumber(e.target.value)}
                         
                        />
                        </div>
                        </tr>
                      <br/>
                       <tr>
                      <td>
                        <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                        <label style={{margineBottom:'5px'}}>  Driver ID: </label>
                        <input type="text"
                        name="DriverID"
                        className="form-control"
                        value={DriverID} 
                        onChange={e => setDriverID(e.target.value)}
                        placeholder="Update"
                    
                        />
                        </div>
                        </td>
                        </tr>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <tr>
                        <td>

                         <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                        <label style={{margineBottom:'5px'}}> Driver Name : </label>
                        <input type="text"
                        name="DriverName"
                        className="form-control"
                        value={DriverName} 
                        onChange={e => setDriverName(e.target.value)}
                        placeholder="update"
                    
                            />
                         </div>
                         </td>
                         </tr>
                        <br/>
                       
                         <tr>
                        <td>
                         <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                        <label style={{margineBottom:'5px'}}>  Inspector ID: </label>
                        <input type="text"
                        name="InspectorID"
                        className="form-control"
                        value={InspectorID} 
                        onChange={e => setInspectorID(e.target.value)}
                        placeholder="update"
                    
                            />
                         </div>
                        </td>
                      </tr>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                       
                       <tr>
                        <td>
                         <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                        <label style={{margineBottom:'5px'}}>  Inspector Name: </label>
                        <input type="text"
                         name="EndInspectorName"
                         className="form-control"
                         value={InspectorName} 
                         onChange={e => setInspectorName(e.target.value)}
                         placeholder="update"
                    
                            />
                         </div>
                         </td>
                        
                     </tr>
                      <br/><br/>
                     <tr>

                     <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label className="form-label" > Driver Availability :</label>
                              <input type="text"
                              list="type"
                              name="Availability"
                              className="form-control"
                              placeholder="Select Driver Availability state"              
                              value={Availability} 
                              onChange={e => setAvailability(e.target.value)}
                             />
                              <datalist id="type">
                                <option value="Undefined"></option>
                                <option value="Confirmed"></option>
                             
                              </datalist>
                          
                         </div>
                     </tr>
                    </tbody>
                     </table> 
                     <br/>
                  
                 

                     <button className= "btn btn-primary" style={{marginRight:'0px', marginLeft:'200px', blockSize:'70px', width:'200px'}} type="submit"
                      onClick={(e)=>ChangeOnClick(e)}>
                     Update Details</button>

                           
                    
                  
                     </form> 
                     </th>
                     <th>
                     <img src={timetableImage} alt="timetableImage" height={900} width={1260}/>
                     </th>
                     </tr>
                     </table>
                  
       
                  
                
                        
                    <div>


             
                

                    </div>
                    
                   
                    <br/>
                        

     
                 
                     
                     
        </center>
        
        </div>
  </div>

)
};








export default UpdateDriverAppoints