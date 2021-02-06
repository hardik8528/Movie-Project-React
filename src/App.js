import './App.css';
import MovieList from './Movie/MovieList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './Movie/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/find/:id'>
            <MovieDetails />
          </Route>
          <Route path='/'>
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
