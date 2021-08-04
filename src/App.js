import About from "./pages/about/About";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Mobmenu from "./component/mobheader/Mobmenu";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import {
  Switch,
  Route,

} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import { useState } from "react";
import Cover from "./component/cover/Cover";

function App() {
  const [bgCover, setbgCover] = useState('-100%');



  const showbg = () => {
    if (bgCover === "-100%") {
      setbgCover("100%");

    } else {
      setbgCover("-100%")
    }

  }


  return (
    <>
      <Cover bgCover={bgCover} />
      <Header showbg={showbg} />
      <Mobmenu showbg={showbg} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  )
}

export default App;