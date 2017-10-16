import axios from 'axios';

export function goSearch(query){
	console.log("goSearch",window.location.protocol);
	return {type:"FETCH_SEARCH",payload:axios.get(window.location.protocol+"//www.omdbapi.com/?s="+encodeURI(query)+"&apikey=BanMePlz")}; 
	//return {type:'FETCH_SEARCH',payload:axios.get("/data/search.json?s="+query)};
}

export function getMovie(id){
	return {type:'FETCH_MOVIE',payload:axios.get(window.location.protocol+"//www.omdbapi.com/?i="+encodeURI(id)+"&plot=full&apikey=BanMePlz")};
	//return {type:'FETCH_MOVIE',payload:axios.get("/data/"+id+".json")};
}

export function addMovie(movie){
	return {type:'ADD_MOVIE',payload:movie};
}