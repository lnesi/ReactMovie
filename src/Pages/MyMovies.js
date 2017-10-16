import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieEntry from '../Components/MovieEntry';

function mapStateProps(state){
	return {list:state.favorites};
}

class MyMovies extends Component{
	render(){
		let result=(<p>No Results</p>);
		if(this.props.list.length>0){
			result=this.props.list.map(function(item){
				return(<MovieEntry movie={item} key={item.imdbID}/>)
			})
		}
		return(
			<div className="row">
				<div className="col col-sm-12">
					<div className="list-group">
					  {result}
					</div>

				</div>
			</div>
		
			)
	}

}

export default connect(mapStateProps)(MyMovies);