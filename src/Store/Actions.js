import axios from 'axios';
export function goSearch(query){
	return {type:'FETCH_SEARCH',payload:axios.get("/data/search.json?s="+query)};
}

export function getMovie(id){
	return {type:'FETCH_MOVIE',payload:axios.get("/data/"+id+".json")};
}

export function addMovie(movie){
	return {type:'ADD_MOVIE',payload:movie};
}