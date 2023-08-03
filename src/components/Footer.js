import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href ='https://www.instagram.com/avinash_144/'> <InstagramIcon /> </a>
        <a href ='https://twitter.com/Avinash24279762'><TwitterIcon /></a>
        <a href ='https://www.linkedin.com/in/avinashroy15'><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Avinash Roy</p>
    </div>
  );
}

export default Footer;
