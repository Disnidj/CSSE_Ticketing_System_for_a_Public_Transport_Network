//import react
import React, { Component } from 'react'

//import axios
import axios from 'axios'

//import backgroud picture
// import BgAdmin2 from '../../img/BgAdmin2.jpeg';

export default class CusViewSalary extends Component {

//initializing a constructor to pass the props
constructor (props) {
    //to call the constructor of the parent class
    super(props);
    this.state={
        //initializing an array to store the passed data
        GetAllSalary:[]
    };
}


//to call the mehtods after components render to the page
//use-> when the component is already placed in the DOM, allow to execute the react code
componentDidMount(){
    this.retrieveSalaryData();
}

//Get request method to get all data
retrieveSalaryData(){
    axios.get("http://localhost:5000/GetAllTrips").then(res=>{
        console.log(res.data);
        //data - the payload returned from the server


    //condition to check the success of the data and store inside the array
    if(res.data.success){
        this.setState({
            GetAllSalary:res.data.existingData
        });
    }

    })
}

//delete button function
onDelete =(id)=>{
    axios.delete(`http://localhost:5000/DeleteTrip/${id}`).then((res)=>{
        this.retrieveSalaryData();
    })
    alert("Sheet Deleted Successfuly");
}

//search data according to the Emp name or emp ID

filterData(GetAllSalary,searchKey){
    const result= GetAllSalary.filter((SalaryData)=>
        SalaryData.Name.toLowerCase().includes(searchKey) ||
        SalaryData.Date.includes(searchKey)
      
    )
    this.setState({GetAllSalary:result})
}

handleSearchArea=(e)=>{
    const searchKey= e.currentTarget.value;

    axios.get("http://localhost:5000/GetAllTrips").then(res=>{
        if(res.data.success){
            this.filterData(res.data.existingData,searchKey)
        }
    });
}



  render() {
    return (
      <div>

        <div style={{height:'80px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
        <br/><br/>
        <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Requests for Season Cards</h1>
        <div style={{height:'80px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>

        <br/><br/>

       
        <button className="btn btn-success" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px'}}>
        <a href="/dashboard"
        style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
        <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
        </button>

        </div>
        <br/>

       
        <div style={{ marginTop: '54px',  backgroundSize: 'cover'}}>
            <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px', marginLeft:'170px'}}>

            <br/><br/>
                            <input
                            className="form-control" style={{marginTop:'100px',padding:'10px 50px', width:'1150px'}}
                            type="search"
                            placeholder="Search For Your Request By Name or Date of Request"
                            name="searchQuery"
                            onChange={this.handleSearchArea}>
                            </input>
                
                        
                            </div>


                    <button className="btn btn-success" style={{padding:'9px 9px',backgroundColor:'#051094', marginLeft:'170px', marginTop:'80px'}}>
                    <a href="/AddTrip"
                    style={{textDecoration:'none',backgroundColor:'#051094',color:'white',fontSize:'17px'}}> 
                    <i class="fa-sharp fa-solid fa-circle-plus"></i>&nbsp;Create Another Request</a>
                    </button>

                    
                    <br/> 
                        <table className="table table-hover" style={{marginTop:'50px',  marginLeft:'200px', width:'1300px'}}>
                            <thead>
                                <tr style={{fontSize:'20px'}}>
                                    <th scope="col">NO</th>
                                    <th scope="col">Passenger Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            
                            <tbody>

                                {this.state.GetAllSalary.map((GetAllSalary,index)=>(
                                <tr key ={index}>
                                <th scope='row'>{index+1}</th>
                                <td>{GetAllSalary.Name}</td>
                                <td>{GetAllSalary.Date}</td>
                                <td><a href={`/GetOneTrip/${GetAllSalary._id}`} style={{textDecoration:'none' }}>
                                    My Ticket {index+1}
                                    </a>
                                </td> 
                                
                                
                                
                                <td>
                                <a className ="btn btn-warning" href={`/${GetAllSalary._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllSalary._id)}>
                                    <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                                    </a>  &nbsp;
                                </td>
                                </tr>

                                
                                
                                    ))} 

                            </tbody>


                        </table>

                            <br/>
                        </div>
      </div>
    )
  }
}
