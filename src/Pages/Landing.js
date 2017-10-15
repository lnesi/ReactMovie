import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieEntry from '../Components/MovieEntry';
import {goSearch} from '../Store/Actions.js';

function mapStateProps(state){
	return state;
}
class Landing extends Component{
	goSearch(){
		this.props.dispatch(goSearch("res"));
		
	}

	render(){
		let result=(<p>No Results</p>);
		if(this.props.searchResult.length>0){
			result=this.props.searchResult.map(function(item){
				return(<MovieEntry movie={item} key={item.imdbID}/>)
			})
		}
		if(this.props.loading){
			result=(<p>Loading...</p>);
		}
		
		return(
				<div className="row">
					<div className="col col-sm-12">
						<div className="row">
							<div className="col col-sm-12">
								 <div className="input-group">
							      <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..."/>
							      <span className="input-group-btn">
							        <button onClick={this.goSearch.bind(this)} className="btn btn-secondary" type="button">Go!</button>
							      </span>
							    </div>
							</div>
						</div>
						<hr/>
						<div className="row">
							<div className="col col-sm-12">
								<div className="list-group">
								  {result}
								</div>

							</div>
						</div>
					</div>
				</div>
			)
	}

}

export default connect(mapStateProps)(Landing);