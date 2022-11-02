import React from 'react'
// import useState and useEffect hooks
import {useState} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';
import timetableImage from '../../img/Bustimetable.jpg';
 



function AddBusTimeTable() {

  //to navigate to anohter page or the same page
  const navigate=useNavigate();

  //use state to track state in function components
  const [RouteNo, setRouteNo]=useState("");
  const [RouteName, setRouteName]=useState("");
  const [DepartureFrom, setDepartureFrom]=useState("");
  const [DestinationTo, setDestinationTo]=useState("");
  const [Start, setStart]=useState("");
  const [End, setEnd]=useState("");
  


   
    //target.value use to get an input value from keyboard
    const HandleRouteNo = (e)=>{
      e.preventDefault();
      setRouteNo(e.target.value);
      
    }

    const HandleRouteName = (e)=>{
      e.preventDefault();
      setRouteName(e.target.value);
      
    }

    const HandleDepartureFrom = (e)=>{
      e.preventDefault();
      setDepartureFrom(e.target.value);
      
    }

    const HandleDestinationTo = (e)=>{
      e.preventDefault();
      setDestinationTo(e.target.value);
      
    }  

    
    const HandleStart = (e)=>{
      e.preventDefault();
      setStart(e.target.value);
      
    }

    const HandleEnd = (e)=>{
      e.preventDefault();
      setEnd(e.target.value);
      
    }


    
    const handleInputChange = () => {
      setRouteNo("")
      setRouteName("");
      setDepartureFrom("");
      setDestinationTo("");
      setStart("");
      setEnd("");
      
    }; 

    const handleSubmit = async (e)=>{
      e.preventDefault();
  
      if(RouteNo===''|| RouteName===''|| DepartureFrom===''||DestinationTo===''|| Start===''|| End===''){
        alert("Fill All The Details!!")
  
      }else {
  
        let newData={
          RouteNo:RouteNo,
          RouteName:RouteName,
          DepartureFrom:DepartureFrom,
          DestinationTo:DestinationTo,
          Start:Start,
          End:End
        }
  
        console.log("Sending time table Details...",newData);
  

        let data= await axios.post('http://localhost:5000/BusTimetables/save',{
            RouteNo:RouteNo,
            RouteName:RouteName,
            DepartureFrom:DepartureFrom,
            DestinationTo:DestinationTo,
            Start:Start,
            End:End
        });

        console.log("Saved Data : ",data);

      if(data.status !==200){
        alert("Data Didnt Store")
      }
      else{
    
        alert("Data succefully added............")
        navigate('/ViewAllTimeTable')
      }

    }


  }


  
        

    return (
    <div>
        
                  
          
            <div>
        <br/><br/>
      
        <center>
       
       

            
              <br/><br/>
              <h1 style={{ textAlign:'center',fontSize:"60px", height:'90px', backgroundColor:"#87ceeb", marginTop:'-100px'}}>Bus Time Table Creation</h1>
            <table   style={{backgroundColor :'black', marginTop:'-30px'}}>
              <tr>
                <th>

                  
                  <br/><br/>
        
              <form style={{marginLeft:'30px', marginRight:'200px', marginTop:'-50px', margineBottom:'200px'}}>
           
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
                              onChange={(e) => HandleRouteNo(e)} 
                              placeholder = "Route No"
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
                              onChange={(e) => HandleRouteName(e)} 
                              placeholder = "Route Name"
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
                            onChange={(e) => HandleDepartureFrom(e)}
                            placeholder="start "
                        
                            />
                            </div>
                            </td>
                            </tr>
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <tr>
                            <td>

                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Destination To : </label>
                            <input type="text"
                            name="DestinationTo"
                            className="form-control"
                            value={DestinationTo} 
                            onChange={(e) => HandleDestinationTo(e)}
                            placeholder="End "
                        
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
                            onChange={(e) => HandleStart(e)}
                            placeholder="number of motobikes"
                        
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
                             onChange={(e) => HandleEnd(e)}
                             placeholder="number of Cars"
                        
                                />
                             </div>
                             </td>
                        
                           
                            
                            

                           
                            
                            
                         </tr>
                 
                        </tbody>
                         </table> 
                         <br/>
                      
                     

                         <button className= "btn btn-primary" style={{marginRight:'0px', marginLeft:'200px', blockSize:'70px', width:'200px'}} type="submit" onClick={handleSubmit}>
                         Send Details </button>
                      
                         </form> 
                         <br/> <br/>
                         </th>
                         <th>
                         <img src={timetableImage} alt="timetableImage" height={950} width={1260}/>
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



export default AddBusTimeTable;
