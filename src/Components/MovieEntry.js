import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieEntry.css';
class MovieEntry extends Component{

	render(){
		const link="/movie/"+this.props.movie.imdbID;
		return(
			<Link to={link} className="list-group-item list-group-item-action flex-column align-items-start">
			    <div className="d-flex bd-highlight">
				    <div className="p-2 bd-highlight">
				    	<img className="MovieEntry-poster" src={this.props.movie.Poster}
				    	alt={this.props.movie.Title}/>
				    </div>
			    	<div className="align-self-stretch w-100 p-2 bd-highlight">
					    <div className="d-flex w-100 justify-content-between">
					      <h5 className="mb-1">{this.props.movie.Title}</h5>
					      <small className="text-muted">{this.props.movie.Year}</small>
					    </div>
				    </div>
			    </div>
			  </Link>
			);
	}
}

export default MovieEntry;