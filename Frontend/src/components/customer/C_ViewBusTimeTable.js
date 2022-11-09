import React, { Component } from  'react';
import axios from 'axios';
import timeimage from '../../img/timetable1.webp';


//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class C_ViewBusTimeTable extends Component{
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

    //pdf generator function
    jsPdfGenarator = ()=>{
      var doc = new jsPdf('p','pt');

      doc.text(210,30,"TimeTable List")
      doc.autoTable({html:'#pdf'})

      doc.autoTable({
        columnStyles:{europe:{halign:'center'}},
        margin:{top:10},
      })


    doc.save("TimeTable.pdf");


    }

    

    
  
      render(){
        return (
    
    
    
    
   
                     
        <div>
        <center>
        <img src={timeimage} alt="timetableImage" height={600} width={1000}/>
        </center>
        <div>
    
        <h1 style={{ textAlign:'center',fontSize:"80px", height:'100px', backgroundColor:"#357EC7", marginTop:'-03px'}}>
        Bus Time Table</h1>
          
        </div>
        <br/> 
            

       
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
            <table className = "table table-striped" id="pdf" style={{width:'1800px',height:'300px'}}>
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
                
         
          
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>
        <br/>

        </center>

        <br/><br/><br/>
       
       <button className="btn btn-primary" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                              marginLeft:'900px', width:'300px', height:'80px'}} >
                              <i class="fa-solid fa-download"></i>&nbsp;download Table
       </button>
            <br/><br/>

        </div>
         

 

        
  

        
        )
    }
    
    }


