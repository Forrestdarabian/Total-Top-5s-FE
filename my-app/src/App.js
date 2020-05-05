import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Startup from "./components/startup";
import Home from "./components/home";
import Movies from "./components/movies";
import Music from "./components/music";
import Tv from "./components/tv";
import Games from "./components/games";
import Create from "./components/create-list";

function App() {
  return (
    <div className="App">
      {/* <Post /> */}
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/music" component={Music} />
        <Route path="/tv" component={Tv} />
        <Route path="/games" component={Games} />
        <Route path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
