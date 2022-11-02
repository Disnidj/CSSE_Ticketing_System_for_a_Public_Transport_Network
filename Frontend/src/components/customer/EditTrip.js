import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import grp from '../../img/tik.webp';

function UpdateTrip() {

//pdf generator function
jsPdfGenarator = ()=>{
  var doc = new jsPdf('p','pt');

  doc.text(210,30,"Season Card Request")
  doc.autoTable({html:'#pdf'})

  doc.autoTable({
    columnStyles:{europe:{halign:'center'}},
    margin:{top:10},
  })


doc.save("Season_Card.pdf");


}

  //use state to track state in function components
  const [Date, setDate]=useState("");
    const [Time, setTime]=useState("");
    const [StartPlace, setStartPlace]=useState("");
    const [Destination, setDestination]=useState("");
    const [BusType, setBusType]=useState("");
    const [Fare, setFare]=useState("");
    const [Name, setName]=useState();
  
  const id = useParams();

  
  const [trip] = useState({

     Date:"",
     Time:"",
     StartPlace:"",
     Destination:"",
     BusType:"",
     Fare:"",
     Name:""
 })
   
//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("Date",Date);
    formData.append("Time",Time);
    formData.append("StartPlace",StartPlace);
    formData.append("Destination",Destination);
    formData.append("BusType",BusType);
    formData.append("Fare",Fare);
    formData.append("Name",Name);
    

    setDate("")
    setTime("");
    setStartPlace("");
    setDestination("");
    setBusType("");
    setFare("");
    setName("");
    
console.log(formData.get('Date'));


trip.Date=formData.get('Date');
trip.Time=formData.get('Time');
trip.StartPlace=formData.get('StartPlace');
trip.Destination=formData.get('Destination');
trip.BusType=formData.get('BusType');
trip.Fare=formData.get('Fare');
trip.Name=formData.get('Name');


console.log(trip);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/UpdateTrip/${id.id}`,trip)
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

  axios.get(`http://localhost:5000/GetOneTrip/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setDate(res.data.Onedata.Date)
    setTime(res.data.Onedata.Time)
    setStartPlace(res.data.Onedata.StartPlace)
    setDestination(res.data.Onedata.Destination)
    setBusType(res.data.Onedata.BusType)
    setFare(res.data.Onedata.Fare)
    setName(res.data.Onedata.Name)
    
   
  }).catch(err => console.log(err));



},[]);



  
     

    return (

          
                  
        //   <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
      <div>
        <br/><br/>
        <center>
        <center>
        <h1 style={{marginTop:'-50px',marginBottom:'3px', backgroundColor:'#04619F', color:'white'}}>Update Details</h1>
        </center>
        <table  width = "1200" height = "500">
            <tr>
              <td>
              <div class="container-fluid bg-3 text-left">
              <br/><br/>
              <form>
             
                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label  className="form-label">Date :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text" className="form-control"
                              name="Date"
                              style={{marginBottom:'15px',color:'black'}}
                              value={Date}
                              onChange={e => setDate(e.target.value)}
                              
                            />
                            </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label  className="form-label">Time:</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text" className="form-control"
                              name = "amount"
                              onChange={e => setTime(e.target.value)}
                              value={Time}
                            />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label className="form-label" >Start Place :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text"
                              list="type"
                              name="StartPlace"
                              className="form-control"            
                              value={StartPlace} 
                              onChange={e => setStartPlace(e.target.value)} required
                             />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginRight:'30px'}}>  Destination </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="text"
                            name="Destination"
                            className="form-control"
                            value={Destination} 
                            onChange={e => setDestination(e.target.value)}
                        
                            />
                            </div>


                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginLeft:'10px', marginRight:'30px'}}>  Type Of Bus : </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                            name="BusType"
                            className="form-control"
                            value={BusType} 
                            onChange={e => setBusType(e.target.value)}
                        
                                />&nbsp;&nbsp;&nbsp;&nbsp;
                             </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginLeft:'10px', marginRight:'30px'}}>  Fee To Be Paid By : </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                            name="Fare"
                            className="form-control"
                            value={Fare} 
                            onChange={e => setFare(e.target.value)}
                        
                                />&nbsp;&nbsp;&nbsp;&nbsp;
                             </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginLeft:'10px', marginRight:'30px'}}>  Name Of Passenger : </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                            name="Name"
                            className="form-control"
                            value={Name} 
                            onChange={e => setName(e.target.value)}
                        
                                />&nbsp;&nbsp;&nbsp;&nbsp;
                             </div>
          
    
                         

                            
          
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 


                        <button className="btn btn-outline-primary btn-lg" type="submit" onClick={(e)=>ChangeOnClick(e)}>
                        Update Details </button>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    
                        <br/>
                            
                        <div>

                       
                        <br/><br/>
                        </div>
                        
                        </form>        
                        <br/>
                            
            </div>
            
            </td>
            
            <td><img src={grp} class="img-fluid" alt="" width="900" height="1000" marginLeft="300px"/></td>
            </tr>
            </table>
            </center>
      </div>
    // </div>
  )
};



export default UpdateTrip