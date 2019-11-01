import React from 'react'
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import YouTube from "./Youtube.png";
import Facebook from "./Facebook.png";
import Twitter from "./Twitter.png";
import Instagram from "./Instagram.png";


function Social() {
  return (
    <div className="social">
      <div className="social_title">Follow me!</div>
      <div className="social_row">
        <div className="social_youtube social_button">
          <FontAwesomeIcon icon={faYoutube}  className="social-icon"/>
          <img src={YouTube} />
        </div>
        <div className="social_facebook social_button">
          <FontAwesomeIcon icon={faFacebook}  className="social-icon"/>
          <img src={Facebook} />
        </div>
        <div className="social_twitter social_button">
          <FontAwesomeIcon icon={faTwitter}  className="social-icon"/>
          <img src={Twitter} />
        </div>
        <div className="social_instagram social_button">
          <FontAwesomeIcon icon={faInstagram}  className="social-icon"/>
          <img src={Instagram} />
        </div>
      </div>
    </div>
  )
}

export default Social
