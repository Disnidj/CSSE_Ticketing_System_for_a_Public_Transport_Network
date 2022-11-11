import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateAdmin } from "../../Services/AuthServices";
import Swal from 'sweetalert2';
import { ValidateSignUp } from "./Validation";
import grp from '../../img/grp.jpeg';
import reg1 from '../../img/grp.jpg';

const RegisterStaff = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		NIC:"",
		mobileno:"+94",
		userRole:"Employee"
	});

	const { name, email, password, password2 , NIC , mobileno } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {

		let validate = ValidateSignUp(formData);

		if(validate.status == false)
		{
			alert(validate.message);
		}

		console.log("Form data", e);
		e.preventDefault();
		if (password !== password2) {
			alert("Password do not match", "danger");
		} else {
			let data = await CreateAdmin(formData);
			console.log("data",data)
			if(data?.data?._id)
			{
				Swal.fire({
					icon: 'success',
					title: 'Congrats!',
					text: 'Register successfull...!',
				  })
				navigate("/dashboard");
			}
			else
			{
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Registration Failed..!',
				  })
			}
		}
	};


	return (
		<div style={{backgroundImage: `url(${reg1})`, marginTop:'-100px', marginBottom:'-100px'}}>
		<br/>
		<div className="register-form">
		<div style={{height:'90px', backgroundColor:"#97B9EE"}}>
		<h1 className="heading">Employee Registration Form</h1>
		
		</div>
		<div style={{height:'750px', backgroundColor:"white"}}>
			<table>
			
             <tr>
             <td>
            <div >
            <form  style={{backgroundColor:"#ebecf0", textAlign:'left'}} onSubmit={(e) => onSubmit(e)}>
            <br/>
            <div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
			
            <label className="form-label"><h4>Name of the User : </h4></label>
						<input type="text"
						class="form-control"
						placeholder="Full Name"
						name="name"
						pattern="[a-zA-Z]*"
						title="Cannot have numerical values"
						value={name}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
            <br/>
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Email Address : </h4></label>
                <input type="email"
						class="form-control"
						placeholder="Email Address - abc@gmail.com"
						name="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						title="Email type is wrong!"
						value={email}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
			<br/>
            <div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Create a Password : </h4></label>
                <input type="password"
						class="form-control"
						placeholder="Password - should be atleast 4 characters "
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
			<br/>
           
    
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Confirm Password : </h4></label>
                <input type="password"
						class="form-control"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
            <br/>
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Contact Number : </h4></label>
                <input type="text"
						class="form-control"
						maxLength="12"
						placeholder="Mobile no"
						name="mobileno"
						value={mobileno}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
            <br/>
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>NIC : </h4></label>
                <input type="text"
						class="form-control"
						placeholder="NIC"
						name="NIC"
						maxLength="12"
						value={NIC}
						onChange={(e) => onChange(e)}
                
              />
            </div>
            <br/>
            <center>
            <input type="submit" className="btn-lg btn-secondary" value="Register" />
            </center>
			
            <br/>
            </form>
           
            </div>
            </td>
         
            <td>
            <center>
			&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <img src={grp} class="img-fluid" alt="" width="600" height="2000" />
             </center>
             </td>
             </tr>
             </table>
			 </div>
			 <br/>
			 </div>
			 </div>
	);
};

export default RegisterStaff;
