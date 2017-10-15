import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import MyMovies from './Pages/MyMovies';
import Movie from './Pages/Movie';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Header/>
            <div class="container content-holder">
              <div class="row ">
                <div class="col col-md-12">
                  <Route exact path="/" component={Landing}/>
                  <Route path="/mymovies" component={MyMovies}/>
                  <Route path="/movie/:imdbID" component={MyMovies}/>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
