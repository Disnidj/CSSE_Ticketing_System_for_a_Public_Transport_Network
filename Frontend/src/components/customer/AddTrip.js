//import react
import React from 'react'
// import useState and useEffect hooks
import {useState,useEffecr} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';

//import backgroud picture
import BgAdmin6 from '../../img/seat1.jpg';

import grp from '../../img/grp.png';
import grp1 from '../../img/tik.webp';  


function AddTrip() {

    //to navigate to anohter page or the same page
    const navigate=useNavigate();
  
    // use state to track state in function components
    const [Date, setDate]=useState("");
    const [Time, setTime]=useState("");
    const [StartPlace, setStartPlace]=useState("");
    const [Destination, setDestination]=useState("");
    const [BusType, setBusType]=useState("");
    const [Fare, setFare]=useState("");
    const [Name, setName]=useState();


   
 //handle the input data 
    
    //target.value use to get an input value from keyboard
    const HandleDate = (e)=>{
        e.preventDefault();
        setDate(e.target.value);
        
      }

    const HandleName = (e)=>{
        e.preventDefault();
        setName(e.target.value);
        
      }


      const HandleTime = (e)=>{
        e.preventDefault();
        setTime(e.target.value);
        
      }
  
      const HandleStartPlace = (e)=>{
        e.preventDefault();
        setStartPlace(e.target.value);
        
      }
  
      const HandleDestination = (e)=>{
        e.preventDefault();
        setDestination(e.target.value);
        
      }
  
      const HandleBusType = (e)=>{
        e.preventDefault();
        setBusType(e.target.value);
        
      }  
  
      
      const HandleFare = (e)=>{
        e.preventDefault();
        setFare(e.target.value);
  
        
      }
     // clear all input values
     const handleInputChange = () => {
        setDate("")
        setTime("");
        setStartPlace("");
        setDestination("");
        setBusType("");
        setFare("");
        setName("");
        
      }; 
  
      //handle the submit data
      const handleSubmit = async (e)=>{
          e.preventDefault();

   
    if(Date===''|| Time===''|| StartPlace===''||Destination===''|| BusType===''||Fare===''||Name===''){
        alert("Fill All The Details!!")

    }else {

        let newData={
          Date:Date,
          Time:Time,
          StartPlace:StartPlace,
          Destination:Destination,
          BusType:BusType,
          Fare:Fare,
          Name:Name
          }

      console.log("Sending Details...",newData);

      let data= await axios.post('http://localhost:5000/trip/Save',{
        Date:Date,
        Time:Time,
        StartPlace:StartPlace,
        Destination:Destination,
        BusType:BusType,
        Fare:Fare,
        Name:Name
      });

      

      console.log("Data saved: ",data);

      if(data.status !==200){
        alert("Data not added")
      }
      else{
    
        alert("Saving data............")
        navigate('/')
      }

    }


  }







  return (
      <div>


            <div style={{height:'80px', backgroundColor:"#CFD8DC", marginTop:'-20px'}}>
                
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Reservation For Journeys</h1>
                <div style={{height:'80px', backgroundColor:"#CFD8DC", marginTop:'-50px', marginBottom:'5px'}}></div>


            </div>

            <br/>

            
            <div className='FORM2'style={{ marginTop: '40px',backgroundImage: `url(${BgAdmin6})`, backgroundSize: 'cover', padding:'10px 30% 10px 20%' }}>
            

            <form onSubmit={(e) => handleSubmit(e)}>
                

                  <table className='tableSalary' style={{width:"1000px", marginLeft:"-150px", marginTop:'50px', background:"rgba(100,100,120,0.65)"}}  >
                  

                    <tr>
                    <td>
                        <div className='form-group'>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <label  style={{color:'white', marginBottom: '20px', width:'300px', marginTop:'22px', marginRight:'10px', marginBottom:'30px' }}>Start / Bus Station :</label><br /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <input 
                            type='text' 
                            value={StartPlace} 
                            placeholder="Please Enter The Start Place "
                            className='form-control' 
                            style={{ marginBottom: '20px', marginLeft:'10px', marginRight:'20px', marginTop:'-10px' }} 
                            onChange={(e) => HandleStartPlace(e)} 
                            required='true' />
                            
                        </div>
                        
                        <br/>
                      
                        <div className='form-group'>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <label style={{color:'white'}}>Destination :</label><br /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <input 
                            type='text' 
                            value={Destination} 
                            placeholder="Please State The Place Journey Ends "
                            className='form-control' 
                            style={{ marginBottom: '10px', marginLeft:'10px', marginRight:'20px', marginTop:'-10px' }} 
                            onChange={(e) => HandleDestination(e)} 
                            required='true' />
                            
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;

                        <tr>
                          <td>
                        <div className='form-group'>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <label style={{color:'white',marginBottom:'10px'}}>Type of Bus :</label><br />&nbsp;&nbsp;&nbsp;&nbsp;
                            <br/>
                            <select 
                            type='text'
                            id='BusType' 
                            value={BusType} 
                            className='form-control' 
                            style={{ marginLeft:'10px' , marginRight:'20px', marginTop:'-20px'}} 
                            onChange={(e) => HandleBusType(e)}
                            required='true' >
                              <option value=" ">Choose The Type </option>
                                          <option value="Air Conditioned">Air Conditioned</option>
                                          <option value="Normal-Private">Normal-Private</option>
                                    
                              </select>
                        </div>
                        </td>
                        <td>
                        <div className='form-group'>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <label  style={{ color:'white',marginBottom: '10px', width:'300px', marginTop:'10px', marginRight:'10px', marginLeft:'35px'}}>Name For The Booking :</label><br /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <input 
                            type='text' 
                            value={Name} 
                            placeholder="Please Enter The Name"
                            className='form-control' 
                            style={{ marginBottom: '20px', marginLeft:'50px', marginRight:'20px', marginTop:'-15px' }} 
                            onChange={(e) => HandleName(e)} 
                            required='true' />
                            
                        </div>
                        </td>
                        </tr>
                        <br/>
                    
                        <div className='form-group'>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <label style={{color:'white',}}>Payment Method : </label><br />&nbsp;&nbsp;&nbsp;&nbsp;
                            <select type='text'
                            id='Fare'
                            value={Fare} 
                            placeholder="Select The Payment Method"
                            className='form-control' 
                            style={{ marginBottom: '10px', marginLeft:'5px' , marginRight:'20px'}}
                            onChange={(e) => HandleFare(e)} 
                            required='true'>
                            <option value="">Select The Payment Method </option>
                                          <option value="Pay By Cash">Pay By Cash</option>
                                          <option value="Pay By QR-Account">Pay By QR-Account</option>
                                          <option value="Pay By Card">Pay By Card</option>
                                     
                              </select>
                              
                        </div>
                        </td>
                        <tr>
                        <td>
                        <br/>
                        <div className='form-group'>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;
                            
                            <label  style={{ color:'white',marginBottom: '10px'}}>Date of Journey :</label><br />
                            
                            <br/>
                            <input 
                            type='date' 
                            value={Date} 
                            className='form-control' 
                            style={{ marginBottom: '20px', width:'300px', marginLeft:'50px',marginTop:'10px', marginRight:'0px', marginBottom:'30px' }} 
                            onChange={(e) => HandleDate(e)} 
                            required='true' />
                        </div>

                       
                        
                       
                        
                        </td>
                        <td>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        <br/>
                        <label  style={{ color:'white',marginBottom: '15px', width:'300px', marginTop:'5px', marginRight:'20px', marginBottom:'0px', marginLeft:'-10px' }}>Time of Journey :</label><br />
                            
                            <br/>
                            <input 
                            type='Time' 
                            value={Time} 
                            className='form-control' 
                            style={{ marginBottom: '20px', width:'300px', marginTop:'12px', marginRight:'10px', marginBottom:'30px', marginLeft:'20px' }} 
                            onChange={(e) => HandleTime(e)} 
                            required='true' />
                        
                        </td>
                        </tr>
                        <tr>
                          <td>
                          <center>
                          <img src={grp} style={{ width: 300, height:280, marginTop: '50px', marginBottom: '-10px', marginLeft: '50px', marginRight:'-10px' }}></img>
                          </center>
                          </td>
                          <td>
                          <center>
                          <img src={grp1} style={{ width: 300, height:280, marginTop: '50px', marginBottom: '-10px', marginLeft: '10px', marginRight:'-10px' }}></img>
                          </center>
                          </td>
                        </tr>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;
                              <center>
                            <button type='submit' className='btn btn-success btn-lg' style={{marginLeft:"400px", width:"200px"}} > 
                            <i class="fa-solid fa-circle-check"></i>
                            &nbsp; Submit</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            </center>
                            </td>


                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <button onClick={(e)=>ChangeOnClick(e)} className="btn btn-primary" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px', marginTop:'28px'}}>
                            <a href="#"
                            style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                            <i class="far fa-arrow-alt-circle-left"></i>&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;</a>
                            </button>


                          </tr>
                      <br/><br/>
                  </table> 

                 <br/>
                  
            </form>
      </div>


    </div>
  )
}

export default AddTrip