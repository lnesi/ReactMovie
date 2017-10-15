import React, { Component } from 'react';
import MovieEntry from '../Components/MovieEntry';

class Landing extends Component{
	goSearch(){

	}

	render(){
		return(
				<div className="row">
					<div class="col col-sm-12">
						<div class="row">
							<div class="col col-sm-12">
								 <div class="input-group">
							      <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for..."/>
							      <span class="input-group-btn">
							        <button onClick={this.goSearch.bind(this)} class="btn btn-secondary" type="button">Go!</button>
							      </span>
							    </div>
							</div>
						</div>
						<hr/>
						<div class="row">
							<div class="col col-sm-12">
								<div class="list-group">
								  <MovieEntry />
								</div>

							</div>
						</div>
					</div>
				</div>
			)
	}

}

export default Landing;