import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

render(){
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <Link className="navbar-brand" to="/">Movies</Link>
		  

		  <div className="" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <Link className="nav-link" to="/mymovies">My Movies <span className="sr-only">(current)</span></Link>
		      </li>
		      
		    </ul>
		  </div>
		</nav>
		)
	}
}

export default Header;