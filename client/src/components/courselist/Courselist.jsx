import React from 'react';
import "./courselist.css";
import Button from '@material-ui/core/Button';


export default function Courselist() {

    //const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
            <div> 
                <div className="card">
                    <img src="assets/angular.png" alt="" className="courseimg"/>
                        <div className="container">
                        <h3><b>Angular</b></h3>
                        <h5>Professor : Vishal</h5>
                        <p>15 years experience</p>
                        <Button className="enrollbutton">Enroll</Button>
                        </div>
                </div>
                <div className="card">
                    <img src="assets/java.jpg" alt="" className="courseimg"/>
                        <div className="container">
                        <h3><b>Java</b></h3>
                        <h5>Professor : Majrul</h5>
                        <p>18 years experience</p>
                        <Button className="enrollbutton">Enroll</Button>
                        </div>
                </div>
                <div className="card">
                    <img src="assets/mongo.png" alt="" className="courseimg"/>
                        <div className="container">
                        <h3><b>MongoDB</b></h3>
                        <h5>Professor : Rajesh</h5>
                        <p>14 years experience</p>
                        <Button className="enrollbutton">Enroll</Button>
                        </div>
                </div>


                <div>
                <div className="card">
                    <img src="assets/react.png" alt="" className="courseimg"/>
                        <div className="container">
                        <h3><b>React js</b></h3>
                        <h5>Professor : Vishal</h5>
                        <p>15 years experience</p>
                        <Button className="enrollbutton">Enroll</Button>
                        </div>
                </div>



                <div className="card">
                    <img src="assets/express.png" alt="" className="courseimg"/>
                        <div className="container">
                        <h3><b>Express JS</b></h3>
                        <h5>Professor : Rahul</h5>
                        <p>17 years experience</p>
                        <Button className="enrollbutton">Enroll</Button>
                        </div>
                </div>

                <div className="card">
                    <img src="assets/node.png" alt="" className="courseimg"/>
                        <div className="container">
                        <h3><b>Node JS</b></h3>
                        <h5>Professor :Shubham</h5>
                        <p>12 years experience</p>
                        <Button className="enrollbutton">Enroll</Button>
                        </div>
                </div>

                    
                </div>


            </div>
            
  );
}


