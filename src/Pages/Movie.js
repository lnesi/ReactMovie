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
				<div class="movie row">
					<div class="col col-sm-4">

						<img src={movie.Poster} alt="{movie.Title}"/>
					</div>
					<div class="col col-sm-8">
						<h1>{movie.Title}</h1>
						<p class="h6">Rated: {movie.Rated}</p>
						<p>{movie.Plot}</p>
						<footer class="blockquote-footer">{movie.Genre}</footer>
						<hr/>
						<dl class="row">
						  <dt class="col-sm-3">Language</dt>
						  <dd class="col-sm-3">{movie.Language}</dd>
						  <dt class="col-sm-3">Runtime</dt>
						  <dd class="col-sm-3">{movie.Runtime}</dd>
						  <dt class="col-sm-3">Director</dt>
						  <dd class="col-sm-3">{movie.Director}</dd>
						  <dt class="col-sm-3">Year</dt>
						  <dd class="col-sm-3">{movie.Year}</dd>
						  <dt class="col-sm-3">Country</dt>
						  <dd class="col-sm-3">{movie.Country}</dd>
						  <dt class="col-sm-3">Released</dt>
						  <dd class="col-sm-3">{movie.Released}</dd>
						  <dt class="col-sm-3">Actors</dt>
						  <dd class="col-sm-9">{movie.Actors}</dd>
						 </dl>
						 <hr/>
						 <dl class="row">
						  <dt class="col-sm-3">Awards</dt>
						  <dd class="col-sm-9">{movie.Awards}</dd>
						  <dt class="col-sm-3">imdb Rating</dt>
						  <dd class="col-sm-3">{movie.imdbRating}</dd>
						  <dt class="col-sm-3">imdb Votes</dt>
						  <dd class="col-sm-3">{movie.imdbVotes}</dd>
						</dl>
						<h5>Ratings:</h5>
						<ul>
							{ratings}
						</ul>
					</div>
					
				</div>
				<div class="row">
					<div class="col-sm-12">
					<button onClick={this.goBack} className="btn btn-dark"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</button>
					<button onClick={this.addMovie.bind(this)} className="btn btn-primary pull-right"><i class="fa fa-fw fa-plus"></i> Add to My Movies</button>
					</div>
				</div>
			</div>
			)
		}
		
	}

}

export default connect(mapStateProps)(Movie);
