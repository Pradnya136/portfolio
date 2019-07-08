import React from "react";
import "./Contact.css";
import Tilt from "react-tilt";

function Contact(params) {
  return (
    <>
      <div className="contactDiv">
        <div>
          Have a vision for a Website or looking for a full-time developer?..{" "}
          <br />
          Send me a message here and let's talk about it!
          <br />
          <br />
          <span className="spanOfcontact">
            <a
              className="link"
              href="mailto:pradnyasonawane133@gmail.com? subject=subject text"
            >
              Let's talk!📤
            </a>
          </span>
          <br />
          <section className="sectionOfLinks">
            <br />
            <ul className="ulLink">
              <Tilt className="Tilt" options={{ max: 50 }} style={{}}>
                <a href="https://www.linkedin.com/in/pradnya-sonawane-35191990/">
                  <div className="liLink1" />
                </a>
              </Tilt>
              <br />{" "}
              <Tilt className="Tilt" options={{ max: 50 }} style={{}}>
                <a href="https://github.com/Pradnya136">
                  {" "}
                  <div className="liLink2" />
                </a>
              </Tilt>
              <br />
              <Tilt className="Tilt" options={{ max: 50 }} style={{}}>
                <a href="mailto:pradnyasonawane133@gmail.com? subject=subject text">
                  {" "}
                  <div className="liLink3" />
                </a>
              </Tilt>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
export default Contact;
