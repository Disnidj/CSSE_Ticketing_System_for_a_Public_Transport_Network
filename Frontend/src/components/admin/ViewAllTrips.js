//import reat and react component from react
import React, { Component } from 'react'

//import axios
import axios from 'axios'
// import Html from 'react-pdf-html';

//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'


export default class AdminViewAllTrips extends Component {

    //initialize constructor to pass the props
    constructor (props) {
        super(props);
        this.state={
        //initializing an array 
        GetAllTrips:[]
        };
        
    }
    
    //pdf generator function
    jsPdfGenarator = ()=>{
      var doc = new jsPdf('p','pt');

      doc.text(210,30,"Passenger List")
      doc.autoTable({html:'#pdf'})

      doc.autoTable({
        columnStyles:{europe:{halign:'center'}},
        margin:{top:10},
      })


    doc.save("Passenger_List.pdf");


    }

    //calling the method after componenets render to the page
    componentDidMount(){
        this.retrieveFuelDetails();
    }


    //get request method
    retrieveFuelDetails(){
        axios.get("http://localhost:5000/GetAllTrips").then(res=>{
        console.log(res.data);
        
        //if the request success, store the data to the array 
        if(res.data.success){
            this.setState({
                GetAllTrips:res.data.existingData
            });
                
                
        }
        })
    }

    //delete function

    onDelete = (id)=>{
        axios.delete(`http://localhost:5000/DeleteTrip/${id}`).then((res)=>{
        this.retrieveFuelDetails();
        })
        alert("Deleted succesfully");
    } 


//search data according to the shift and date
        
        
filterData(GetAllTrips,searchKey){

  
    const result =GetAllTrips.filter((FuelData)=>
   
    FuelData.Name.includes(searchKey)
    )
  
  this.setState({GetAllTrips:result})
  
  }
  
  handleSearchArea=(e)=>{
  
    const searchKey = e.currentTarget.value;
    
    axios.get("http://localhost:5000/GetAllTrips").then(res=>{
    if(res.data.success){
    
      this.filterData(res.data.existingData,searchKey)
    }
  });
  
  }


  render() {
    return (
      <div>


      <div style={{height:'80px', backgroundColor:"#00bfff", marginTop:'-20px'}}>
        <br/><br/>

        <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>Reservations For Journeys</h1>
        
        <div style={{height:'80px', backgroundColor:"#87ceeb", marginTop:'-50px'}}></div>
        </div>
        <br/> <br/> <br/><br/>

        <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px',marginLeft:'170px' }}>
      
          <input
          className="form-control" style={{marginTop:'100px',padding:'10px 50px', marginRight:'1150px'}}
          type="search"
          placeholder="Search By The Name"
          name="searchQuery"
          onChange={this.handleSearchArea}>
            </input>
            
            &nbsp;<button className="btn btn-success" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                              marginLeft:'900px', width:'300px', height:'80px', marginTop:'-100px'}} >
                              <i class="fa-solid fa-download"></i>&nbsp;Generate Requests List
            </button>


      </div>

      <br/>      
              
<div id="content">
      <table className="table table-hover" id="pdf" style={{marginTop:'50px',  marginLeft:'120px', width:'1500px'}}>
          <thead>
            <tr style={{fontSize:'20px'}}>
              <th scope="col"></th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Start Place</th>
                <th scope="col">Destination</th>
                <th scope="col">Type</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Passenger</th>
                <th scope="col">Delete</th>
                

                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllTrips.map((GetAllTrips,index)=>(
            <tr key ={index}>
              <th scope='row'>{index+1}</th>
              <td>{GetAllTrips.Date}</td>
              <td>{GetAllTrips.Time}</td>
              <td>{GetAllTrips.StartPlace}</td>
              <td>{GetAllTrips.Destination}</td> 
              <td>{GetAllTrips.BusType}</td> 
              <td>{GetAllTrips.Fare}</td>
              <td>{GetAllTrips.Name}</td>

              <td>
                            <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllTrips._id)}>
                            <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                            </a>  &nbsp;

                        </td>
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

     
      </div>
     
</div>
    )

  }
}

