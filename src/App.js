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
import { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
// import WhoWeAre from "./Component/WhoWEAre/WhoWeAre";
// import Tranc from "./Component/Transf/Trans";
function App() {
  const [showSlider, setshowSlider] = useState(false);
  const MAke_slider_open = () => {
    setshowSlider(!showSlider);
  };
  const Close_Slider = () => {
    setshowSlider(false);
  };
  return (
    <Fragment>
      <Helmet>
        <title>قمم الرياض ❤</title>
        <meta
          name="description"
          content="مؤسسه قمم الرياض لنقل جميع أنواع الأثاث"
        />
        <meta name="keywords" content="أثاث,أُثاث منزلي,نقل أثاث,نقل عفش,نقل" />
      </Helmet>
      <div className={Style.app}>
        <Router>
          <Nav open={MAke_slider_open} />
          <Slider closeSlider={Close_Slider} showSlider={showSlider} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <HomePage closeSlider={Close_Slider} {...props} />
              )}
            />

            <Route
              path="/About_us"
              exact
              render={(props) => (
                <Aboutus closeSlider={Close_Slider} {...props} />
              )}
            />
            <Route
              path="/Serviece"
              exact
              render={(props) => <Serv closeSlider={Close_Slider} {...props} />}
            />
            <Route
              path="/gallery"
              exact
              render={(props) => (
                <Gallery closeSlider={Close_Slider} {...props} />
              )}
              git
            />
          </Switch>
          <Whats />
          <Footer />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
