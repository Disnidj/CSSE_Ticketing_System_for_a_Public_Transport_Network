import React, { Component } from  'react';
import axios from 'axios';


export default class D_ViewAllAppoints extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        appointdriver: []
      };
    }
    
    componentDidMount(){
      this.retrieveAppointDriver();
    }
    
    retrieveAppointDriver(){
      axios.get("http://localhost:8000/AppointDriver").then(res =>{
        if(res.data.success){
          this.setState({
            appointdriver:res.data.existingAppointDriver
          });
        
          console.log(this.state.appointdriver)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:8000/AppointDriver/delete/${id}`).then((res)=>{
          this.retrieveAppointDriver();
            
      })
      alert("Delete successfully");
    }

    filterData(appointdriver,searchKey){
      const result = appointdriver.filter((appointdriver) =>
      appointdriver.DriverID.toLowerCase().includes(searchKey)||
      appointdriver.DriverID.toUpperCase().includes(searchKey)
    
      )
    
      this.setState({appointdriver:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:8000/AppointDriver").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingAppointDriver,searchKey)
        }
      });
    }

    

    
  
      render(){
        return (
    
    
    
    
   
                     
        <div>
        <div>
    
        <h1 style={{ textAlign:'center',fontSize:"80px", height:'150px', backgroundColor:"#87ceeb", marginTop:'-03px'}}>Appointed Driver Details</h1>
          
        </div>
        <br/> <br/> <br/>
            

       
        <br/>
        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              style={{marginLeft:'-200px',width:'500px'}}
              type="search"
              placeholder="search by Driver ID"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
            </center>
        
       
            <br/>
            <center>
            <table className = "table table-striped" style={{width:'1800px'}}>
                 <thead style={{backgroundColor:'black'}}>
                    <tr>
                    <th style={{color:'white'}} scope = "col"></th>  
                    <th style={{color:'white'}} scope = "col" >Route No</th>
                    <th style={{color:'white'}} scope = "col">Bus Number</th>
                    <th style={{color:'white'}} scope = "col">Driver ID</th> 
                    <th style={{color:'white'}} scope = "col">Driver Name</th>  
                    <th style={{color:'white'}} scope = "col">Inspector ID</th> 
                    <th style={{color:'white'}} scope = "col">Inspector Name</th>
                    <th style={{color:'white'}} scope = "col">Availability State</th>

                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.appointdriver.map((appointdriver,index) =>(
                <tr key ={index} style={{color:'black'}}>
                  <th scope = "row">{index+1}</th>
                  <td>{appointdriver.RouteNo}  </td>  
                  <td>{appointdriver.BusNumber}</td>
                  <td>{appointdriver.DriverID}</td>
                  <td>{appointdriver.DriverName}</td>  
                  <td>{appointdriver.InspectorID}</td> 
                  <td>{appointdriver.InspectorName}  </td> 
                
                 
               
                  <td>
    
                  
                  <br/>
                    <a className="btn btn-outline-primary" style = {{textDecoration:'none',color:'#00008B'}}  href={`/MarkAvailability/${appointdriver._id}`}>
                                &nbsp;Mark Availability
                                </a>
                                &nbsp;

                  
                 
                    
                  </td>
               
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>
        <br/>

        </center>

        <br/>
       

        </div>
         

 

        
  

        
        )
    }
    
    }


