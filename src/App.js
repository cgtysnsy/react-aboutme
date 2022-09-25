import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Tools from "./Components/Tools";
import Mychoices from "./Components/Mychoices";
import Websitetofollow from "./Components/Websitetofollow";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/tools" component={Tools} />
          <Route exact path="/mychoices" component={Mychoices} />
          <Route exact path="/websitetofollow" component={Websitetofollow} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
