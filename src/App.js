import Style from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Component/HomePag/HomePage";
import Nav from "./Component/NavBar/NAv";
import Slider from "./Component/Slider/Slider";
import Whats from "./Component/Whats/Whats";
import Aboutus from "./Component/Aboutus/Aboutus";
import Serv from "./Component/Transf/Trans";
import Gallery from "./Component/Gallery/Gallery";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";
// import WhoWeAre from "./Component/WhoWEAre/WhoWeAre";
// import Tranc from "./Component/Transf/Trans";
function App() {
  const [showSlider, setshowSlider] = useState(false);
  const MAke_slider_open = () => {
    setshowSlider(!showSlider);
  };
  return (
    <div className={Style.app}>
      <Router>
        <Nav open={MAke_slider_open} />
        <Slider showSlider={showSlider} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/About_us" exact component={Aboutus} />
          <Route path="/Serviece" exact component={Serv} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
        <Whats />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
