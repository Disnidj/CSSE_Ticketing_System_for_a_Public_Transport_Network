import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import img02 from '../img/admin.jpeg'




const Dashboard = () => {

	return (
		<div>
			<center>
				<table>
					<tr>
						<td>
							<span style={{marginTop: '0px',marginBottom: '20px',color:"#00008B",fontSize:'50px', fontWeight:'bold'}}>Welcome to</span>
							<span style={{marginTop: '0px',marginBottom: '20px', color:"#66CC66", fontSize:'100px'}}> TravelGo</span>
							<br/>
							<span style={{marginTop: '0px',marginBottom: '20px',color:"#778899",fontSize:'40px', fontWeight:'bold'}}>{localStorage.getItem("userRole")}:</span>
							<span style={{marginTop: '0px',marginBottom: '20px', color:"#778899", fontSize:'40px'}}> {localStorage.getItem("user")}</span>
							
						</td>
					
						<td>
							<img src={img02} style={{ width: 600, height:700,  marginBottom: '20px', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></img>
						</td>
					</tr>
				</table>
			</center>
		</div>
	);
};


export default Dashboard;
