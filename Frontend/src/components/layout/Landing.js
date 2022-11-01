import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import "./script.js";

//<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

const Landing = () => {

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">

					<div className = "home" >
					<h1 style={{color:"#66CC66"}}><b>TravelGo </b></h1>
					</div>
					
					<br /><br/>
					
					<h4>A new technical solution to Sri Lankan people, TravelGo! With TravelGo , you will never lose your way to your loved ones. </h4>
					<br/> <br/>
					<div className="buttons">
						<Link to="/register" className="btn btn-lg btn-block">
							Sign Up
						</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/login" className="btn btn-lg btn-block">
							Login 
						</Link>
					</div>
				
				</div>
			</div>
		</section>
	);
};

export default Landing;
