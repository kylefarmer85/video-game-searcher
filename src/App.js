import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopGames from "./TopGames";
import Search from "./Search";
import Nav from "./Nav";
import GameDetail from "./GameDetail";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/topgames' component={TopGames} />
          <Route exact path='/search' component={Search} />
          <Route path='/game/:name' component={GameDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



