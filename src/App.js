import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Component/HomePag/HomePage'
import Nav from "./Component/NavBar/NAv";
import Footer from './Component/Footer/Footer'
import WhoWeAre from './Component/WhoWEAre/WhoWeAre';
import Tranc from './Component/Transf/Trans'
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Who_We" exact component={WhoWeAre} />
          <Route path="/Trans" exact component={Tranc} />


        
        </Switch>
        <Footer/>
      </Router>
    </div> 
  );
}

export default App;
 