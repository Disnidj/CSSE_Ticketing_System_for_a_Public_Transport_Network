import React from "react";
import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";

import { GetallUsers, DeleteAdmin } from "../../Services/AuthServices";
import Swal from "sweetalert2";



const Viewallusers = () => {

    const navigate = useNavigate();

    // const handleSubmit= ()=>{
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("userRole");
    //   navigate("/Login");
    // }

    




	const [customers , setcustomers] = useState([])
  
	const GetCustomers = async () =>{
        let data = await GetallUsers();
        let cusdata =[];
        console.log("All Customers",data?.data);
         data?.data.map((customers)=>{
            if(customers?.userRole == "customer")
            {
                cusdata.push(customers);
            }
        });
        setcustomers(cusdata);
    }
  

	useEffect(() => { 
        GetCustomers();
   },[])
  
   const [employees , setemployees] = useState([])
  
   const GetEmployees= async () =>{
         let data = await GetallUsers();
         let empdata =[];
         console.log("All Employees",data?.data);
          data?.data.map((employees)=>{
             if(employees?.userRole == "Employee")
             {
                 empdata.push(employees);
             }
         });
         setemployees(empdata);
     }
   
 
   useEffect(() => { 
         GetEmployees();
    },[])

    const deleteRowData = async (id) => {
            let data = await DeleteAdmin(id);
            console.log("return", data);
            if (data?.status == 200) {
              Swal.fire({
                icon: "success",
                title: "Successful!",
                text: "Delete successfull...!",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed!",
              });
            }
          };

   
   

	return (
		
            
             <div style={{ marginTop: '0px',   backgroundSize: 'cover',backgroundColor:"#daf0ff"}}>                  
              <div style={{ textAlign: "center" }}>
            </div>
           
            
			<div>
               
                <div >
                    <center >
                        
                                <div >

                                <h1 style={{color:'#1338be', textAlign:'center',fontSize:"80px"}}><u>User Details</u></h1>
                                
                                
                                </div>
                    </center>
                  
                    <br/><br/><br/><br/>
                    
                    <h3>Registered Customers</h3>


                    <table className="table" style={{backgroundColor:"#80dfff"}}>
                        <thead>
                            <tr >
                            <th>No</th>
                            <th>FullName</th>
                            <th>Email Address</th>
                            <th>Contact Number</th>
                            <th>NIC</th>
                            <th>User Type</th>
                            <th>Delete user</th>

                          
                            </tr>
                        </thead>  
                        <tbody>
                            {customers.map((customers,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{customers?.name}</td>
                                    <td>{customers?.email}</td>
                                    <td>{customers?.mobileno}</td>
                                    <td>{customers?.NIC}</td>
                                    <td>{customers?.userRole}</td>


       
                                    {<td>  <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}} onClick={() => deleteRowData(customers?._id)} >
                               &nbsp;Delete
                                </a></td> }
                                </tr>
                            ))}
                           
                        </tbody>
                    </table>
                </div>
                <h3>Registered Employees</h3>
                <br/>
                    <table className="table"  style={{backgroundColor:"#5ced73"}}>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>FullName</th>
                            <th>Email Address</th>
                            <th>Contact Number</th>
                            <th>NIC</th>
                            <th>User Type</th>
                            <th>Delete user</th>
                          
                            </tr>
                        </thead>  
                        <tbody>
                            {employees.map((employees,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{employees?.name}</td>
                                    <td>{employees?.email}</td>
                                    <td>{employees?.mobileno}</td>
                                    <td>{employees?.NIC}</td>
                                    <td>{employees?.userRole}</td>


                                    {<td>  <a className="btn btn-primary" style = {{textDecoration:'none',color:'white'}} onClick={() => deleteRowData(employees?._id)} >
                               &nbsp;Delete
                                </a></td> }
                                
              
       

                                </tr>
                            ))}
                        </tbody>
                    </table>
			</div>
      
      <br/><br/><br/><br/><br/><br/><br/>
		</div>
	);
};


export default Viewallusers;