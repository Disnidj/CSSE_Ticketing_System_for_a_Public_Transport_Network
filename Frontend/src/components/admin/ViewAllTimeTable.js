import React, { Component } from  'react';
import axios from 'axios';
//import backgroundImage from '../../img/anodya2.jpg';

export default class ViewAllTimeTable extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        bustimetable: []
      };
    }
    
    componentDidMount(){
      this.retrieveTimetables();
    }
    
    retrieveTimetables(){
      axios.get("http://localhost:5000/BusTimetables").then(res =>{
        if(res.data.success){
          this.setState({
            bustimetable:res.data.existingBusTimetables
          });
        
          console.log(this.state.bustimetable)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:5000/BusTimetables/delete/${id}`).then((res)=>{
          this.retrieveTimetables();
            
      })
      alert("Delete successfully");
    }

    filterData(bustimetable,searchKey){
      const result = bustimetable.filter((bustimetable) =>
      bustimetable.RouteNo.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({bustimetable:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:5000/BusTimetables").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingBusTimetables,searchKey)
        }
      });
    }

    

    
  
      render(){
        return (
    
    
    
    
   
                     
        <div>
        <div>
    
        <h1 style={{ textAlign:'center',fontSize:"80px", height:'150px', backgroundColor:"#87ceeb", marginTop:'-03px'}}>Bus Time Table</h1>
          
        </div>
        <br/> <br/> <br/>
            

       
        <br/>
        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              style={{marginLeft:'-200px',width:'500px'}}
              type="search"
           
              placeholder="search by route no"
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
                    <th style={{color:'white'}} scope = "col">Route Name</th>
                    <th style={{color:'white'}} scope = "col">Departure From</th> 
                    <th style={{color:'white'}} scope = "col"> Destination To</th>  
                    <th style={{color:'white'}} scope = "col"> Start Time</th> 
                    <th style={{color:'white'}} scope = "col">End Time</th>
                    <th style={{color:'white'}} scope = "col"></th>

                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.bustimetable.map((bustimetable,index) =>(
                <tr key ={index} style={{color:'black'}}>
                  <th scope = "row">{index+1}</th>
                  <td>{bustimetable.RouteNo}  </td>  
                  <td>{bustimetable.RouteName}</td>
                  <td>{bustimetable.DepartureFrom}</td>
                  <td>{bustimetable.DestinationTo}</td>  
                  <td>{bustimetable.Start}</td> 
                  <td>{bustimetable.End}  </td> 
                
                 
               
                  <td>
    
                    <br/>
                    <a className="btn btn-outline-primary" style = {{textDecoration:'none',color:'#00008B'}}  href={`/UpdateBusTimeTable/${bustimetable._id}`}>
                                &nbsp;Edit
                                </a>
                                &nbsp;
          
                 
                                &nbsp;
                                <a className="btn btn-outline-primary" style = {{textDecoration:'none',color:'#00008B'}}  href="/ViewAllTimeTable" onClick={()=> this.onDelete(bustimetable._id)}>
                               &nbsp;Delete
                                </a>

                  
                 
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>
        <br/>

        </center>

        <br/>

        <button className= "btn btn-light" style={{marginRight:'-700px', marginLeft:'1700px', blockSize:'70px', width:'200px'}} type="submit">
        <a href='/AddBusTimeTable'>Add New</a> </button>
       <br/>

        </div>
         

 

        
  

        
        )
    }
    
    }


