import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieEntry.css';
class MovieEntry extends Component{

	render(){
		const link="/movie/"+this.props.movie.imdbID;
		return(
			<Link to={link} class="list-group-item list-group-item-action flex-column align-items-start">
			    <div class="d-flex bd-highlight">
				    <div class="p-2 bd-highlight">
				    	<img class="MovieEntry-poster" src={this.props.movie.Poster}
				    	alt={this.props.movie.Title}/>
				    </div>
			    	<div class="align-self-stretch w-100 p-2 bd-highlight">
					    <div class="d-flex w-100 justify-content-between">
					      <h5 class="mb-1">{this.props.movie.Title}</h5>
					      <small class="text-muted">{this.props.movie.Year}</small>
					    </div>
				    </div>
			    </div>
			  </Link>
			);
	}
}

export default MovieEntry;