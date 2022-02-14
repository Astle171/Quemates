import "./login.css";
import { loginCall } from './../../apiCalls';
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
//import bg from '../public/assets/bg.jpg';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(" + { Background } + ")"
// };



export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      //email: email.current.value, password: password.current.value
      dispatch
    );
  };

const handleca = (e) => {
  window.location = "/"
}

  console.log(user);
  return (
   
    <div className="loginpage" style={{
      backgroundImage: "url(/bg4.jpg)",
      // height: "100%",
      // width:"100%",
      backgroundRepeat: "no-repeat"
    }} > 
       {/* <section style={ sectionStyle }> */}
      {/* <img src="/assets/person/1.jpeg" alt=""/> */}
      <div className="loginWrapper">
        <div className="loginLeft">
          {/* <h3 className="login1">Quemates</h3> */}
          {/* <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span> */}
        </div>
        <div className="loginRight">
        <h3 className="login1">Quemates</h3>
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" size="20px"/> : "Log In"}</button>
          
            <button className="loginRegisterButton" onClick={handleca}>
            {isFetching ? <CircularProgress color="inherit" size="20px"/> : "Create a New Account"}
              
            </button>
          </form>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}