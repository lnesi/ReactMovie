import React, { Component } from 'react';

class AddedFeedback extends Component{

render(){
	if(this.props.show){
		return(
				<div class="alert alert-success" role="alert">
				  <strong>OK: </strong>The movie has been added!
				</div>
			)	
	}else{
		return null;
	}
	
	}
}

export default AddedFeedback;