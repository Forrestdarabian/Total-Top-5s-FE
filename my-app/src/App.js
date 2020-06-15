import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Startup from "./components/startup";
import Home from "./components/home";
import Movies from "./components/movies";
import Music from "./components/music";
import Tv from "./components/tv";
import Games from "./components/games";
import Holidays from "./components/holidays";
import Consoles from "./components/game-consoles";
import Zombies from "./components/zombie-maps";
import Animals from "./components/animals";
import Create from "./components/create-list";
import Register from "./components/register";
import Login from "./components/login";
import PrivateRoute from "./utils/authRouter";
import PostedList from "./components/posted-list";
import EditList from "./components/edit-list";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/music" component={Music} />
        <Route path="/tv" component={Tv} />
        <Route path="/games" component={Games} />
        <Route path="/holidays" component={Holidays} />
        <Route path="/zombies-maps" component={Zombies} />
        <Route path="/game-consoles" component={Consoles} />
        <Route path="/animals" component={Animals} />
        <Route path="/create" component={Create} />
        <Route path="/posted-list" component={PostedList} />
        <Route path="/edit-list" component={EditList} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
