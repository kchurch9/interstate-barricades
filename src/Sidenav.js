import React, { Component } from "react"
import "./Sidenav.css"

export default class Sidenav extends Component {
	render() {
	  return (
			<div className= "sidenav">
				<ul>
					<li>Traffic Control</li>
					<li>Pavement Marking</li>
					<li>Line Removal</li>
					<li>Sales and Rental</li>
					<li>Sign Marking</li>
				</ul>
			</div>
		);
	}	
}