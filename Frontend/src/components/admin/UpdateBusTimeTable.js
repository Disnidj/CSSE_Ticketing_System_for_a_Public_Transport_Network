import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import timetableImage from '../../img/Bustimetable.jpg';


function UpdateBusTimeTable() {




  //use state to track state in function components
  const [RouteNo, setRouteNo]=useState("");
  const [RouteName, setRouteName]=useState("");
  const [DepartureFrom, setDepartureFrom]=useState("");
  const [DestinationTo, setDestinationTo]=useState("");
  const [Start, setStart]=useState("");
  const [End, setEnd]=useState("");
  
  const id = useParams();

  
  const [bustimetable] = useState({

    RouteNo:"",
    RouteName:"",
    DepartureFrom:"",
    DestinationTo:"",
    Start:"",
    End:""
   
 })
   
//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("RouteNo",RouteNo);
    formData.append("RouteName",RouteName);
    formData.append("DepartureFrom",DepartureFrom);
    formData.append("DestinationTo",DestinationTo);
    formData.append("Start",Start);
    formData.append("End",End);
   

    setRouteNo("")
    setRouteName("");
    setDepartureFrom("");
    setDestinationTo("");
    setStart("");
    setEnd("");
  
   
console.log(formData.get('RouteNo'));


bustimetable.RouteNo=formData.get('RouteNo');
bustimetable.RouteName=formData.get('RouteName');
bustimetable.DepartureFrom=formData.get('DepartureFrom');
bustimetable.DestinationTo=formData.get('DestinationTo');
bustimetable.Start=formData.get('Start');
bustimetable.End=formData.get('End');



console.log(bustimetable);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/BusTimeTables/update/${id.id}`,bustimetable)
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

  axios.get(`http://localhost:5000/BusTimeTables/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setRouteNo(res.data.bustimetable.RouteNo)
    setRouteName(res.data.bustimetable.RouteName)
    setDepartureFrom(res.data.bustimetable.DepartureFrom)
    setDestinationTo(res.data.bustimetable.DestinationTo)
    setStart(res.data.bustimetable.Start)
    setEnd(res.data.bustimetable.End)
    
   
  }).catch(err => console.log(err));



},[]);



  
     

    return (

          
        <div>
        
                  
          
        <div>
    <br/><br/>
  
    <center>
   
   

        
          <br/><br/>
          <h1 style={{ textAlign:'center',fontSize:"60px", height:'90px', backgroundColor:"#87ceeb", marginTop:'-100px'}}>Bus Time Table - Update</h1>
        <table   style={{backgroundColor :'black', marginTop:'-30px'}}>
          <tr>
            <th>

    
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
                          <label  className="form-label">RouteName :</label>
                          <input type="text" className="form-control"
                          name = "RouteName"
                          value={RouteName} 
                          onChange={e => setRouteName(e.target.value)}
                         
                        />
                        </div>
                        </tr>
                      <br/>
                       <tr>
                      <td>
                        <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                        <label style={{margineBottom:'5px'}}>  Departure From: </label>
                        <input type="text"
                        name="DepartureFrom"
                        className="form-control"
                        value={DepartureFrom} 
                        onChange={e => setDepartureFrom(e.target.value)}
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
                        <label style={{margineBottom:'5px'}}>  Destination To : </label>
                        <input type="text"
                        name="DestinationTo"
                        className="form-control"
                        value={DestinationTo} 
                        onChange={e => setDestinationTo(e.target.value)}
                        placeholder="update"
                    
                            />
                         </div>
                         </td>
                         </tr>
                        <br/>
                       
                         <tr>
                        <td>
                         <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                        <label style={{margineBottom:'5px'}}>  Start: </label>
                        <input type="time"
                        name="Start"
                        className="form-control"
                        value={Start} 
                        onChange={e => setStart(e.target.value)}
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
                        <label style={{margineBottom:'5px'}}>  End: </label>
                        <input type="time"
                         name="End"
                         className="form-control"
                         value={End} 
                         onChange={e => setEnd(e.target.value)}
                         placeholder="update"
                    
                            />
                         </div>
                         </td>
                    
                       
                        
                        

                       
                        
                        
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








export default UpdateBusTimeTable