import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./courses.css"
import Topbar from './../../components/topbar/Topbar';
import Courselist from './../../components/courselist/Courselist';



export default function Courses() {
  return (
    <>
      <Topbar/>
      
      <div className="homeContainer">
      <Sidebar />
      <Courselist/>
      <Rightbar/>
      </div>
    </>
  );
}