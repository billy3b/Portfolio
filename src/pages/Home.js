import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Avinash Roy</h2>
        <div className="prompt">
          <p>A Full Stack developer with a passion for learning and creating.</p>
          <a href ='https://www.linkedin.com/in/avinashroy15'><LinkedInIcon /></a>
          <a href ='mailto:avinashroy45678@gmail.com'><EmailIcon /></a>
          <a href ='https://github.com/billy3b'><GithubIcon /> </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB, Firebase, Prisma
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C++, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
