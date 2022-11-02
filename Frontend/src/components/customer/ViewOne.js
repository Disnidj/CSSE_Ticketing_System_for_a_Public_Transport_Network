//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

//import backgroud picture
import BgAdmin2 from '../../img/background.jpg';

//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'

function ViewOne() {

//track the states in function and set values with useState 
    const [Date, setDate]=useState("");
    const [Time, setTime]=useState("");
    const [StartPlace, setStartPlace]=useState("");
    const [Destination, setDestination]=useState("");
    const [BusType, setBusType]=useState("");
    const [Fare, setFare]=useState("");
    const [Name, setName]=useState();

//id initialize to match the data
const id=useParams();


const [trip] = useState({

  Date:"",
  Time:"",
  StartPlace:"",
  Destination:"",
  BusType:"",
  Fare:"",
  Name:""
})

//get one data for a matching ID
useEffect(function effectFunction() {
 console.log("get ID",id);

 axios.get(`http://localhost:5000/GetOneTrip/${id?.id}`)
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

//pdf generator function
jsPdfGenarator = ()=>{
  var doc = new jsPdf('p','pt');

  doc.text(210,30,"Season Card Request")
  doc.autoTable({html:'#my-pdf'})

  doc.autoTable({
    columnStyles:{europe:{halign:'center'}},
    margin:{top:10},
  })


doc.save("Season_Card_Request.pdf");


}




  return (
    <div>

<div style={{height:'80px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
        <br/><br/>
        <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Season Card Request</h1>
        <div style={{height:'80px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>

        </div>
<br/>

<div className='FORM2'style={{ marginTop: '40px',backgroundSize: 'cover', padding:'10px 20% 10px 20%' }}>
<br/><br/>
                  <form >

                            

                        <table className='tableSalarySheet' style={{border:"1px solid black", color:'black', width:'1000px'}} id="my-pdf" >
                          <br/>
                          
                          <tr>
                         
                          <td>
                            <div className='form-group'>&nbsp;
                            <label style={{fontWeight:'700'}}>Passenger Name: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           {Name} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Time: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Time} 
                                
                            </div>
                          </td>
                          </tr>


                          <br/>
                          <tr>
                          <td >
                            <div className='form-group'>&nbsp;
                                <label style={{fontWeight:'700'}}>Start Place: </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {StartPlace} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Destination:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Destination} 
                                
                                
                            </div>
                          </td>
                          </tr>
                          <br/>
                          
                          <tr>
                          <td>
                            <div className='form-group'>&nbsp;
                                <label style={{fontWeight:'700'}}>Type of Bus:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                {BusType} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>&nbsp;
                                <label style={{fontWeight:'700'}}>Payment Method:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;
                                {Fare} 
                              
                            </div>
                            
                          </td>
                          
                          </tr>
                          

                          <br/>
                          

                          <tr>
                          <td colspan="2">
                            <div>
                              <p>-----------------------------------------------------------------------------------------------------------------</p>
                              <tr><td><div className='form-group'>
                              <label style={{fontWeight:'700'}} >Requested Date:</label> {Date}   
                            </div></td></tr>
                            </div>
                          </td>
                          </tr>
                          
                          
                          <tr>
                           
                          </tr>
                          <br/><br/>
                        </table> 

                        
                        
                  </form>
                  <br/>
                  <button className="btn btn-success" style={{marginLeft:'330px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                  <a href="/viewAll"
                  style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                  <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>
                  <button className="btn btn-success" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                     marginLeft:'20px', width:'220px'}} >
                      <i class="fa-sharp fa-solid fa-file-arrow-down"></i> Download Receipt</button>  


                <br/><br/><br/><br/><br/><br/>
              </div>







    </div>
  )
}

export default ViewOne