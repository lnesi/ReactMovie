import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovie,addMovie} from '../Store/Actions.js';
import AddedFeedback from '../Components/AddedFeedback.js';

function mapStateProps(state){
	return {movie:state.currentMovie,loading:state.loading,showFeedback:state.showFeedback,dispatch:state.dispatch};
}
class Movie extends Component{
	constructor(props){
		super(props);
		this.state={showFeedback:false};
	}
	componentDidMount(){
		this.props.dispatch(getMovie(this.props.match.params.imdbID));
		
	}
	
	goBack(){
		window.history.back();
	}
	
	addMovie(){
		var movie={
			"Title": this.props.movie.Title,
			"Year": this.props.movie.Year,
			"imdbID": this.props.movie.imdbID,
			"Type": this.props.movie.Type,
			"Poster": this.props.movie.Poster
		}
		this.props.dispatch(addMovie(movie));
		this.setState({showFeedback:true});
		setTimeout(function(){
			this.setState({showFeedback:false});
		}.bind(this),2000);
		
	}

	render(){
		let movie=this.props.movie;
		console.log(movie);
		if(this.props.loading || movie===null ){
			return (<p>Loading...</p>)
		}else {
			let ratings=movie.Ratings.map(function(item,i){
				return (<li key={i}><strong>{item.Source}:</strong> {item.Value}</li>)
		});
		
		return(
			<div>
				<AddedFeedback show={this.state.showFeedback}/>
				<div className="movie row">
					<div className="col col-sm-4">

						<img src={movie.Poster} alt={movie.Title} />
					</div>
					<div className="col col-sm-8">
						<h1>{movie.Title}</h1>
						<p className="h6">Rated: {movie.Rated}</p>
						<p>{movie.Plot}</p>
						<footer className="blockquote-footer">{movie.Genre}</footer>
						<hr/>
						<dl className="row">
						  <dt className="col-sm-3">Language</dt>
						  <dd className="col-sm-3">{movie.Language}</dd>
						  <dt className="col-sm-3">Runtime</dt>
						  <dd className="col-sm-3">{movie.Runtime}</dd>
						  <dt className="col-sm-3">Director</dt>
						  <dd className="col-sm-3">{movie.Director}</dd>
						  <dt className="col-sm-3">Year</dt>
						  <dd className="col-sm-3">{movie.Year}</dd>
						  <dt className="col-sm-3">Country</dt>
						  <dd className="col-sm-3">{movie.Country}</dd>
						  <dt className="col-sm-3">Released</dt>
						  <dd className="col-sm-3">{movie.Released}</dd>
						  <dt className="col-sm-3">Actors</dt>
						  <dd className="col-sm-9">{movie.Actors}</dd>
						 </dl>
						 <hr/>
						 <dl className="row">
						  <dt className="col-sm-3">Awards</dt>
						  <dd className="col-sm-9">{movie.Awards}</dd>
						  <dt className="col-sm-3">imdb Rating</dt>
						  <dd className="col-sm-3">{movie.imdbRating}</dd>
						  <dt className="col-sm-3">imdb Votes</dt>
						  <dd className="col-sm-3">{movie.imdbVotes}</dd>
						</dl>
						<h5>Ratings:</h5>
						<ul>
							{ratings}
						</ul>
					</div>
					
				</div>
				<div className="row">
					<div className="col-sm-12">
					<button onClick={this.goBack} className="btn btn-dark"><i className="fa fa-fw fa-chevron-circle-left"></i> Back</button>
					<button onClick={this.addMovie.bind(this)} className="btn btn-primary pull-right"><i className="fa fa-fw fa-plus"></i> Add to My Movies</button>
					</div>
				</div>
			</div>
			)
		}
		
	}

}

export default connect(mapStateProps)(Movie);
