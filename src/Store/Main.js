import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware'; 
import logger from 'redux-logger';

const initialState={
	loading:false,
	searchResult:[],
	currentMovie:null,
	favorites:[],
	error:null,
  showFeedback:true,
  totalResults:0
};

function reducer(state=initialState,action){
  switch (action.type) {
   	case 'FETCH_SEARCH_PENDING':{

   		return {...state,searchResult:[],loading:true,totalResults:0}
   	}
   	case 'FETCH_SEARCH_FULFILLED':{
   		return {...state,searchResult:action.payload.data.Search,loading:false,totalResults:parseInt(action.payload.data.totalResults)}
   	}
    case 'FETCH_MOVIE_PENDING':{
      return {...state,currentMovie:[],loading:true}
    }
    case 'FETCH_MOVIE_FULFILLED':{
      return {...state,currentMovie:action.payload.data,loading:false}
    }
    case 'ADD_MOVIE':{
      return {...state,favorites:state.favorites.concat([action.payload])};
    }
    default:
      return state
  }
}

const store=createStore(reducer,applyMiddleware(promiseMiddleware(),logger));



export default store;