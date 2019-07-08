import React from "react";
import "./Carousel.css";
import ItemList from "./ItemList.png";
import appleType from "./appleType.png";
import faceRec from "./faceRec.png";
import appleTypeinWhite from "./appleTypeinWhite.png";
import insiders from "./insiders.png";
import robo2 from "./robo2.png";
import ToDoList from "./ToDoList.png";
const Carousel = () => {
  return (
    <>
      <div className="wrapper">
        <div className="flipCard">
          <div className="flipinner">
            <div className="frontfilp">
              <img src={faceRec} alt="FaceRecogizer" />
            </div>
            <div className="backflip">
              <h3>Project:Face Detector</h3>
              <h5>
                Used Rest API's(Clarifia api) and built single page app which
                detects faces in image url provided.Here you can detect face
                from image which you submit.Its fun app.
              </h5>
            </div>
          </div>
        </div>
        <br />
        <div className="flipCard">
          <div className="flipinner">
            <div className="frontfilp">
              <img src={ToDoList} alt="ToDoList" />
            </div>
            <div className="backflip">
              <h3>Project:Simple To Do List</h3>
              <h5>
                This is a simple react project using of CSS- dark theme.A do to
                list in dark theme. remove and add items, see how many are left
                and how many tasks are done.
              </h5>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="flipCard">
          <div className="flipinner">
            <div className="frontfilp">
              <img src={appleType} alt="appleType" />
            </div>
            <div className="backflip">
              <h3>Project:Static website</h3>
              <h5>
                In this project, the website is built like apples website, but
                its simple static site by using html, css and javascript.
              </h5>
            </div>
          </div>
        </div>
        <br />
        <div className="flipCard">
          <div className="flipinner">
            <div className="frontfilp">
              <img src={robo2} alt="robo2" />
            </div>
            <div className="backflip">
              <h3>Project:Robo friends</h3>
              <h5>
                {" "}
                Built this one using react js.. a dynamic app which fetches data
                from online fake API.
              </h5>
            </div>
          </div>
        </div>
        <div className="flipCard">
          <div className="flipinner">
            <div className="frontfilp">
              <img src={ItemList} alt="ItemList" />
            </div>
            <div className="backflip">
              <h3>Project:Item List</h3>
              <h5>
                App created using React Js, we can search for a particular app
                from list of availablr items and increase its count.(app is
                still in progress)
              </h5>
            </div>
          </div>
        </div>
        <div className="flipCard">
          <div className="flipinner">
            <div className="frontfilp">
              <img src={appleTypeinWhite} alt="appleTypeinWhite" />
            </div>
            <div className="backflip">
              <h3>Project:Static website</h3>
              <h5>Simple website built with CSS, html, javascript.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
