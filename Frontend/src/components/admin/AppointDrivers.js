import React from 'react'
// import useState and useEffect hooks
import {useState} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';
import timetableImage from '../../img/busdrivers.jpg';
 



function AppointDrivers() {

  //to navigate to anohter page or the same page
  const navigate=useNavigate();

  //use state to track state in function components
  const [RouteNo, setRouteNo]=useState("");
  const [BusNumber, setBusNumber]=useState("");
  const [DriverID, setDriverID]=useState("");
  const [DriverName, setDriverName]=useState("");
  const [InspectorID, setInspectorID]=useState("");
  const [InspectorName, setInspectorName]=useState("");
  const [Availability, setAvailability]=useState("");


   
    //target.value use to get an input value from keyboard
    const HandleRouteNo = (e)=>{
      e.preventDefault();
      setRouteNo(e.target.value);
      
    }

    const HandleBusNumber = (e)=>{
      e.preventDefault();
      setBusNumber(e.target.value);
      
    }

    const HandleDriverID = (e)=>{
      e.preventDefault();
      setDriverID(e.target.value);
      
    }

    const HandleDriverName = (e)=>{
      e.preventDefault();
      setDriverName(e.target.value);
      
    }  

    
    const HandleInspectorID = (e)=>{
      e.preventDefault();
      setInspectorID(e.target.value);
      
    }

    const HandleInspectorName = (e)=>{
      e.preventDefault();
      setInspectorName(e.target.value);
      
    }

    const HandleAvailability = (e)=>{
      e.preventDefault();
      setAvailability(e.target.value);
      
    }


    
    const handleInputChange = () => {
      setRouteNo("")
      setBusNumber("");
      setDriverID("");
      setDriverName("");
      setInspectorID("");
      setInspectorName(""); 
      setAvailability(""); 
      
    }; 

    const handleSubmit = async (e)=>{
      e.preventDefault();
  
      if(RouteNo===''|| BusNumber===''|| DriverID===''||DriverName===''|| InspectorID===''|| InspectorName==='' || Availability===''){
        alert("Fill All The Details!!")
  
      }else {
  
        let newData={
          RouteNo:RouteNo,
          BusNumber:BusNumber,
          DriverID:DriverID,
          DriverName:DriverName,
          InspectorID:InspectorID,
          InspectorName:InspectorName,
          Availability:Availability
        }
  
        console.log("Sending  Details...",newData);
  

        let data= await axios.post('http://localhost:5000/AppointDriver/save',{
            RouteNo:RouteNo,
            BusNumber:BusNumber,
            DriverID:DriverID,
            DriverName:DriverName,
            InspectorID:InspectorID,
            InspectorName:InspectorName,
            Availability:Availability
        });

        console.log("Saved Data : ",data);

      if(data.status !==200){
        alert("Data Didnt Store")
      }
      else{
    
        alert("Data succefully added............")
        navigate('/ViewAllAppoints')
      }

    }


  }

 


  
        

    return (
    <div>
        
                  
          
        <div>
        <br/><br/>
      
        <center>
       
       

            
              <br/><br/>
              <h1 style={{ textAlign:'center',fontSize:"60px", height:'80px', backgroundColor:"#87ceeb", marginTop:'-100px'}}>Appoint Drivers</h1>
            <table   style={{backgroundColor :'black', marginTop:'-10px'}}>
              <tr>
                <th>

                  
                  <br/><br/>
        
              <form style={{marginLeft:'30px', marginRight:'200px', marginTop:'-40px'}}>
           
              <br/><br/>
                <table>
                  <thead>
                    <tr>
                      <th>
             
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label  className="form-label">Route No:</label>
                              <input type="text" className="form-control"
                              name="RouteNo"
                              value={RouteNo} 
                              onChange={(e) => HandleRouteNo(e)} 
                              placeholder='Bus Route No'
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
                              onChange={(e) => HandleBusNumber(e)} 
                              placeholder='Bus Number'
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
                            onChange={(e) => HandleDriverID(e)}
                            placeholder="Driver ID"
                        
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
                            <label style={{margineBottom:'5px'}}>  Driver Name : </label>
                            <input type="text"
                            name="DriverName"
                            className="form-control"
                            value={DriverName} 
                            onChange={(e) => HandleDriverName(e)}
                            placeholder="Driver's Name"
                        
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
                            onChange={(e) => HandleInspectorID(e)}
                            placeholder="Inspector ID"
                        
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
                             name="InspectorName"
                             className="form-control"
                             value={InspectorName} 
                             onChange={(e) => HandleInspectorName(e)}
                             placeholder="Inspector Name"
                        
                                />
                             </div>
                             </td>
                         </tr>

                         <tr>
                           
                           <td>
                           <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label className="form-label" > Driver Availability :</label>
                              <input type="text"
                              list="type"
                              name="Availability"
                              className="form-control"
                              placeholder="Select Driver Availability state"              
                              value={Availability} 
                              onChange={(e) => HandleAvailability(e)}
                             />
                              <datalist id="type">
                                <option value="Undefined"></option>
                                <option value="Confirmed"></option>
                             
                              </datalist>
                          
                         </div>
                            </td>
                        </tr>
                        </tbody>
                         </table> 
                         <br/><br/>
                      
                     

                         <button className= "btn btn-primary" style={{marginRight:'0px', marginLeft:'200px', blockSize:'70px', width:'200px'}} type="submit" onClick={handleSubmit}>
                         Send Details </button>
                         <br/><br/>
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



export default AppointDrivers;
