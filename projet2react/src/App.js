import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Fav from "./pages/Fav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Seach from "./pages/Search";
import Event from "./pages/Event";

const App = () => {
 
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/seach" component={Seach} />
      <Route path="/favoris" component={Fav} />
      <Route path="/event" component={Event} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;



