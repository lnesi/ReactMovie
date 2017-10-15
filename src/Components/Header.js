import React, { Component } from 'react';

class Header extends Component{

render(){
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="#">Movies</a>
		  

		  <div className="" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <a className="nav-link" href="#">My Movies <span className="sr-only">(current)</span></a>
		      </li>
		      
		    </ul>
		  </div>
		</nav>
		)
	}
}

export default Header;