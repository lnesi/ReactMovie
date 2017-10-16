import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieEntry from '../Components/MovieEntry';
import {goSearch} from '../Store/Actions.js';

function mapStateProps(state){
	return {searchResult:state.searchResult,totalResults:state.totalResults,loading:state.loading};
}
class Landing extends Component{
	constructor(props){
		super(props);
		this.state={currentPage:1};
	}
	goSearch(){
		this.props.dispatch(goSearch(document.getElementById("input_search").value,this.state.currentPage));
		
	}
	
	handleKey(e){
		if (e.key === 'Enter') {
			this.setState({currentPage:1});
		    this.goSearch();
		}
	}
	handlerClick(){
		this.setState({currentPage:1});
		this.goSearch();
	}
	nextPage(){
		
		if(this.state.currentPage<Math.ceil(this.props.totalResults/10)){
			let page=this.state.currentPage+1;
			this.setState({currentPage:page},()=>{
				this.goSearch();
			});
		}
	}
	prevPage(){
		if(this.state.currentPage>1){
			let page=this.state.currentPage-1;
			this.setState({currentPage:page},()=>{
				this.goSearch();
			});
			
		}
	}
	render(){
		let result=(<p>No Results</p>);
		if(this.props.searchResult && this.props.searchResult.length>0){
			result=this.props.searchResult.map(function(item){
				return(<MovieEntry movie={item} key={item.imdbID}/>)
			})
		}
		if(this.props.loading){
			result=(<p>Loading...</p>);
		}
		let pagination=null;
		console.log("totalResults",this.props.totalResults);
		if(this.props.totalResults!=0 && !isNaN(this.props.totalResults)){
			let classPrev='page-item';
			let classNext='page-item';
			if(this.state.currentPage==1) classPrev+=" disabled"
			if(this.state.currentPage==Math.ceil(this.props.totalResults/10)) classNext+=" disabled"
			pagination=(<nav className="App-pagination">
								  <ul className="pagination">
								    <li className={classPrev}>
								      <button className="page-link" onClick={this.prevPage.bind(this)}><i className="fa fa-fw  fa-chevron-left"></i> Previous</button>
								    </li>
								    <li className={classNext}>
								      <button className="page-link" onClick={this.nextPage.bind(this)} >Next <i className="fa fa-fw  fa-chevron-right"></i></button>
								    </li>
								  </ul>
								</nav>
							);
		}
		return(
				<div className="row">
					<div className="col col-sm-12">
						<div className="row">
							<div className="col col-sm-12">
								 <div className="input-group">
							      <input id="input_search" type="text" onKeyPress={this.handleKey.bind(this)} className="form-control" placeholder="Search for..." aria-label="Search for..."/>
							      <span className="input-group-btn">
							        <button onClick={this.handlerClick.bind(this)}  className="btn btn-secondary" type="button">Go!</button>
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
						<div className="row">
							<div className="col col-sm-12">
							{pagination}
							</div>
						</div>
					</div>
				</div>
			)
	}

}

export default connect(mapStateProps)(Landing);