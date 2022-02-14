import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from 'react-router';
// import Login  from  "./pages/login/Login";
import { useRef } from "react";
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function Topbar() {
  const history = useHistory();
  const username = useRef();
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
     const handlelogout = (e) =>{
       
       localStorage.clear();
       window.location='/'
// return <Login />      //  history.pushState("/login");
     }
     const handlesearch = (e) =>{
      const a = username.current.value;
      window.location = '/profile/'+a;
      
    }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}> 
        <span className="logo">Quemates</span>
        </Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput" ref={username} onMouseLeave={handlesearch} ></input>
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        {/* <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div> */}
        <div className="b1">
          <Button color="default" onClick={handlelogout}>< PowerSettingsNewIcon/><b>Logout</b></Button>
         
          </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg"/> 
        </Link>
      </div>
    </div>
  );
}