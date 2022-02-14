
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
//import {Person} from "@material-ui/icons";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Courses from "./pages/courses/Courses";

import {


  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";



function App() {
  const { user } = useContext(AuthContext);

  return (
    // <div style={{ backgroundImage: "url(/1.png)" }}>
    <Router>
    <Switch>
      <Route exact path="/">
{user ? <Home/> : <Register/>}
      </Route>
      <Route path="/login">
      {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/register">
      {user ? <Redirect to="/" /> : <Register />}
<Register/>
      </Route>
      <Route path="/profile/:username">
<Profile/>
      </Route>
      
      <Route path="/courses">
<Courses/>
      </Route>
    </Switch>

  </Router>
  // </div>
    );

}

export default App;
