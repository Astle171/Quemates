import axios from "axios";
import "./register.css";
import { useHistory } from "react-router";
import { useRef } from "react";
import {


  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";



export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const profession = useRef();
  const gender = useRef();
  const age = useRef();
  const desc = useRef();
  const city = useRef();
  const from = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        profession:profession.current.value,
        gender: gender.current.value,
        age: age.current.value,
        desc: desc.current.value,
        city: city.current.value,
        from: from.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleli = (e) =>{
    window.location="/login"
  }

  return (

    <div className="login"  style={{
      backgroundImage: "url(/bg4.jpg)",
      // height: "100%",
      // width:"100%",
      backgroundRepeat: "no-repeat"
    }} >
      
      <div className="loginWrapper">
         <div className="loginLeft">
          {/* <h3 className="login1">Quemates</h3> */}
          {/* <span className="loginDesc">
            Connect with your classmates and professors.
          </span> */}
        </div>
         
        <div className="loginRight">
        <h3 className="login1">Quemates</h3>
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" required ref={email} className="loginInput" />
            <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
            <input placeholder="Password Again" minLength="6" type="password" required ref={passwordAgain} className="loginInput" />
            <input placeholder="Profession" type="text" required ref={profession} className="loginInput" />
            <input placeholder="Gender" type="text" required ref={gender} className="loginInput" />
            <input placeholder="Age" type="number" required ref={age} className="loginInput" />
            <input placeholder="Description" type="text" required ref={desc} className="loginInput" />
            <input placeholder="City" type="text" required ref={city} className="loginInput" />
            <input placeholder="Town" type="text" required ref={from} className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton" onClick={handleli}>
              Log into Account
            </button>
            {/* <script>
              function login() {
                <Router>
                  <Switch>
                  onClick="login()"
                    <Redirect to="/login" />
                  </Switch>
                </Router>
                
              }
            </script> */}
          </form>
        </div>
      </div>
    </div>
  );
}