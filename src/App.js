import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Relatability from "./Components/Relatability/Relatability";
import Reframing from "./Components/Reframing/Reframing";
import Resonance from "./Components/Resonance/Resonance";
import Reorient from "./Components/Reorient/Reorient";
import Reimagination from "./Components/Reimagination/Reimagination";
import Reports from "./Components/Reports/Reports";
import Login from "./Components/Login/Login";
import Introduction from "./Components/Empathy/Introduction/Introduction";
import Index from "./Components/Empathy/Index/Index";
import Welcome from "./Components/Welcome/Welcome";
import Home from "./Components/Home/Home";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLogIn: false,
    name: "",
    photo: "",
    email: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/relatability">
            <Relatability />
          </Route>
          <Route path="/reframing">
            <Reframing />
          </Route>
          <Route path="/resonance">
            <Resonance></Resonance>
          </Route>
          <Route path="/reorient">
            <Reorient></Reorient>
          </Route>
          <Route path="/reimagination">
            <Reimagination />
          </Route>
          <Route path="/reports">
            <Reports></Reports>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/introduction">
            <Introduction />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
