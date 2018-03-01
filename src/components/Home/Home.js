import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(req, res, next) {}

  render() {
    return (
      <div>
        <div className="login">
          <A HREF={"#home"}>
            <button className="headerbutton">Home</button>
          </A>
          <A HREF={"#projects"}>
            <button className="headerbutton">Projects</button>
          </A>
        </div>

        <div name="home" className="landingImage">
          <div className="spacer" />
          <h1> Keith Hammer </h1>
          <h2 className="subHead">Contact</h2>
          <div className="contact">
            <div>
              <p className="contactText">keith@michaelrobertson.com</p>
            </div>
            <div>
              <p className="contactText">(858)847-5356</p>
            </div>
            <div>
              <a
                href="https://github.com/Hammer-Keith/"
                className="contactText"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/keith-hammer/"
                className="contactText"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="skills">
            <h2 className="subHead">Skills</h2>
            <div>
              <a href="https://reactjs.org/">
                <img
                  className="logos"
                  src="https://cdn-images-1.medium.com/max/1600/1*g6s1lvpfArJGorALkKNhvw.png"
                />
              </a>
              <a href="https://www.w3schools.com/html/">
                <img
                  className="logos"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png"
                />
              </a>

              <a href="https://www.w3schools.com/css/">
                <img
                  className="logos"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png"
                />
              </a>

              <a href="https://www.javascript.com/">
                <img
                  className="logos"
                  src="http://en.webdreamlab.com/assets/images/technologies/JavaScript-logo.png"
                />
              </a>

              <a href="https://redux.js.org/">
                <img
                  className="logos"
                  src="https://i.warosu.org/data/g/img/0613/30/1499829220274.png"
                />
              </a>
            </div>
            <div>
              <a href="https://www.postgresql.org/">
                <img
                  className="logos"
                  src="http://logonoid.com/images/postgresql-logo.png"
                />
              </a>

              <a href="https://nodejs.org/en/">
                <img
                  className="logos"
                  src="https://glenneggleton.com/files/2016-02/nodejs-logo.png"
                />
              </a>

              <a href="https://heroku.com/">
                <img
                  className="logos"
                  src="https://cdn.worldvectorlogo.com/logos/heroku.svg"
                />
              </a>

              <a href="https://git-scm.com/">
                <img
                  className="logos"
                  src="http://freevector.co/wp-content/uploads/2012/06/52234-git-logo.png"
                />
              </a>

              <a href="https://github.com/">
                <img
                  className="logos"
                  src="http://damas-software.com/bin/Github.svg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="aboutMe">
          <h2 className="subHead">About Me</h2>
          <p className="aboutMeText">
            I am a full stack web developer, and a graduate from the DevMountain
            Web Development Fully-Immersive course. This program is an intensive
            13 week process where students are taught to independently build
            full stack websites.
          </p>
        </div>
        <div name="projects" className="projects">
          <h2>Projects</h2>
          <div>
            <h3>Yelp Clone</h3>
            <a href="http://www.yelpclone.keith-hammer.com/">
              http://www.yelpclone.keith-hammer.com/
            </a>
            <p>
              A full stack clone of Yelp.com made with a team of 3 other
              students.
            </p>

            <h3>Bitshares Wallet Info</h3>
            <a href="http://165.227.55.253/">http://165.227.55.253/</a>
            <p>
              A Website that displayes and analyzes a given bitshares wallet,
              and compares the value of each of your currencies.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default mapStateToProps(Home);
