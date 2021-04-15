import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Component/HomePag/HomePage'
import Nav from "./Component/NavBar/NAv";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
        
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
 