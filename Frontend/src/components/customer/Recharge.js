//import react
import React from 'react'
// import useState and useEffect hooks
import {useState,useEffecr} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';

//import backgroud picture
import no from '../../img/no.png';
import airline from '../../img/airline.png';
import HSBC from '../../img/HSBC.jpg';
import boc from '../../img/boc.png';
import gold from '../../img/gold.png';
import blue from '../../img/blue.jpg';

function Recharge() {

    //to navigate to anohter page or the same page
    const navigate=useNavigate();
  
    // use state to track state in function components
    const [CardNo, setCardNo]=useState("");
    const [HolderName, setHolderName]=useState("");
    const [CreditCard, setCreditCard]=useState("");
    const [Expire, setExpire]=useState("");
    const [Amount, setAmount]=useState("");
    const [NewAmount, setNewAmount]=useState("");
    const [TotAmount, setTotAmount]=useState("");


   
 //handle the input data 
    
    //target.value use to get an input value from keyboard
    const HandleCardNo = (e)=>{
        e.preventDefault();
        setCardNo(e.target.value);
        //validation
        if ((e.target.value).length>4) {
          alert("Limit Exceeded!");
        }
        
      }

    const HandleHolderName = (e)=>{
        e.preventDefault();
        setHolderName(e.target.value);

        //validation
    if (Number(e.target.value)) {
      alert("Name Cannot Contain Numerical Value!");
    }
        
      }


      const HandleCreaditCard = (e)=>{
        e.preventDefault();
        setCreditCard(e.target.value);
         //validation
         if ((e.target.value).length>16) {
          alert("Limit Exceeded!");
        }
        
      }
  
      const HandleExpire = (e)=>{
        e.preventDefault();
        setExpire(e.target.value);
        
      }
  
      const HandleAmount = (e)=>{
        e.preventDefault();
        setAmount(e.target.value);
        
      }
  
      // const HandleNewAmount = (e)=>{
      //   e.preventDefault();
      //   setNewAmount(e.target.value);
        
      // }  
  
      
      // const HandleTotAmount = (e)=>{
      //   e.preventDefault();
      //   setTotAmount(e.target.value);
  
        
      // }
     // clear all input values
     const handleInputChange = () => {
        setCardNo("")
        setHolderName("");
        setCreditCard("");
        setExpire("");
        setAmount("");
        setNewAmount("");
        setTotAmount("");
        
       }; 
  
      //handle the submit data
      const handleSubmit = async (e)=>{
          e.preventDefault();

   
    if(CardNo===''|| HolderName===''|| CreditCard===''|| Expire===''|| Amount===''){
        alert("Fill All The Details!!")

    }else {

        let newData={
          CardNo:CardNo,
          HolderName:HolderName,
          CreditCard:CreditCard,
          Expire:Expire,
          Amount:Amount,
        //  NewAmount:NewAmount,
        //   TotAmount:TotAmount
          }

      console.log("Sending Details...",newData);

      let data= await axios.post('http://localhost:5000/postCharge/save',{
        CardNo:CardNo,
        HolderName:HolderName,
        CreditCard:CreditCard,
        Expire:Expire,
        Amount:Amount,
      //  NewAmount:NewAmount,
      //  TotAmount:TotAmount
        
      });

      

      console.log("Data saved: ",data);

      if(data.status !==200){
        alert("Data not added")
      }
      else{
    
        alert("Saving data............")
        navigate('/dashboard')
      }

    }


  }








  return (
     
    <div style={{ width:'100%', backgroundColor:"#080523", marginTop:'-20px'}}>
                    <br/><br/>
                    <h2 style={{color:'#49A8F1', textAlign:'center'}}>Re-Charge Season Card</h2><br/>
                    <h3 style={{color:'white', textAlign:'center', marginLeft:"350px", marginRight:"350px"}}>
                        First time in Sri Lanka now you can top up your season cards with any cryptocurrencies from anywhere in Sri Lanka
                    </h3>

                    <img src={no} style={{height:'130px', width:'280px', marginLeft:"270px", marginTop:'40px'}}/>



                    <div style={{height:'350px', width:'100%', backgroundColor:"black", marginTop:'25px' }}>
                    <br/>
                    <h3 style={{color:"white", marginLeft:"40px"}}>Select Paymnet Card</h3>

                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"100px"}} name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                
                                <label class="form-check-label"  style={{marginTop:"100px"}}>
                                    <img src={airline} style={{height:'160px', width:'240px', marginTop:'-70px', marginLeft:'-120px'}}/>
                                </label>
                        </>

                        < >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"260px"}} name="flexRadioDefault" id="flexRadioDefault1"/>
                        
                                <label class="form-check-label" style={{marginTop:"100px"}} >
                                    <img src={HSBC} style={{height:'160px', width:'240px', marginTop:'-70px', marginLeft:'-120px'}}/>
                                </label>
                        </>

                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"280px"}} name="flexRadioDefault" id="flexRadioDefault1"/>
                                
                                <label class="form-check-label">
                                    <img src={boc} style={{height:'160px', width:'240px', marginTop:'-70px', marginLeft:'-120px'}}/>
                                </label>
                        </>

                        <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="radio" style={{marginTop:"220px", marginLeft:"310px"}} name="flexRadioDefault" id="flexRadioDefault1"/>
                               
                                <label class="form-check-label" >
                                    <img src={gold} style={{height:'160px', width:'260px', marginTop:'-70px', marginLeft:'-120px'}}/>
                                </label>
                        </>
                        
                    </div>
                   

                   
                        
                        
                    
                    
                <div style={{backgroundImage: `url(${blue})`, marginTop:"-68px"}}>
                <div  >
                    <p></p>
                    <h4 style={{marginTop:'400px', marginLeft:"-350px", color:"white"}}>Enter Your Payment Details</h4>
                    <form onSubmit={(e) => handleSubmit(e)} >

                    <div className="form-group, container" style={{marginBottom:'10px', marginTop:'-370px', width:"400px"}}>
                            <input type="number"
                            className="form-control"
                            name="CardNo"
                            placeholder="Season Card Number"
                            value={CardNo}
                            onChange={(e) => HandleCardNo(e)}
                            />
                  
                        </div>

                        <div className="form-group, container"  style={{marginBottom:'10px', }}>
                            <label style={{marginBottom:'5px',color:"white"}}>Card Holder's Name</label>
                            <input type="text"
                            className="form-control"
                            name="HolderName"
                            placeholder="Enter name"
                            value={HolderName}
                            onChange={(e) => HandleHolderName(e)} 
                            />
                            
                        </div>

                        <div className="form-group, container"   style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Card Number</label>
                            <input type="number"
                            className="form-control"
                            name="CreditCard"
                            placeholder="credit/debit card"
                            value={CreditCard}
                            onChange={(e) => HandleCreaditCard(e)}
                            />
                            
                        </div>

                        <div className="form-group, container"  style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Expiry Date</label>
                            <input type="date"
                            className="form-control"
                            name="Expire"
                            placeholder="dd/mm/yyyy"
                            value={Expire}
                            onChange={(e) => HandleExpire(e)}
                           />
                            
                        </div>

                        <div className="form-group, container"  style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Re-Charge Amount Rs.</label>
                            <input type="number"
                            className="form-control"
                            name="Amount"
                            placeholder="Rs."
                            value={Amount}
                            onChange={(e) => HandleAmount(e)}
                            />
                            
                        </div>
                        

                        
                        <div className="form-group, container"  style={{marginBottom:'10px'}}>
                            <label style={{marginBottom:'5px',color:"white"}}>Existing Amount Rs.</label>
                            <input type="text"
                            className="form-control"
                            name="NewAmount"
                            placeholder=""
                            value="00"
                            />
                        </div>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type='submit' className='btn btn-success' style={{marginLeft:" 330px"}} > 
                        <i class="fa-solid fa-circle-check"></i>
                        &nbsp; SUBMIT</button>

                        </form>

                       
                   <br/><br/>
                </div>
            </div>
            
           
            </div>
  )
}

export default Recharge