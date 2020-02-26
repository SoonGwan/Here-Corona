import React from "react";
import AdminLogin from "containers/AdminContainer/AdminLogin/AdminLoginContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import Social from "./social/Social";
import DaeguBoard from "./Board/Daegu/DaeguBoard";
import SeoulBoard from "./Board/Seoul/SeoulBoard";
import BusanBoard from "./Board/Busan/BusanBoard";
import NewsTemplate from "./News/NewsTemplate";
import Symptom from "./Symptom/symptom";
import Market from "./Market/market";
import WorldWide from "./WorldWide/WorldWide";
import World from "./WorldInfoAsia/World";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/" component={Main} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/worldWide" component={WorldWide} />
        <Route exact path="/worldInfoAsia" component={World} />
        <Route exact path="/DaeguBoard" component={DaeguBoard} />
        <Route exact path="/SeoulBoard" component={SeoulBoard} />
        <Route exact path="/BusanBoard" component={BusanBoard} />
        <Route exact path="/News" component={NewsTemplate} />
        <Route exact path="/symptom" component={Symptom} />
        <Route exact path="/market" cmoponent={Market} />
      </Switch>
    </Router>
  );
}

export default App;
