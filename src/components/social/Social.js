import React from 'react'
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function Social() {
  return (
    <div className="social">
      <div className="social_title">Follow me!</div>
      <div className="social_row">
        <div className="social_youtube social_button">
          <FontAwesomeIcon icon={faYoutube}  className="social-icon"/>
          <FontAwesomeIcon icon={faHeadset}  className="social-deco"/>
        </div>
        <div className="social_facebook social_button">
          <FontAwesomeIcon icon={faFacebook}  className="social-icon"/>
          <FontAwesomeIcon icon={faGamepad}  className="social-deco"/>
        </div>
        <div className="social_twitter social_button">
          <FontAwesomeIcon icon={faTwitter}  className="social-icon"/>
          <FontAwesomeIcon icon={faGhost}  className="social-deco"/>
        </div>
        <div className="social_instagram social_button">
          <FontAwesomeIcon icon={faInstagram}  className="social-icon"/>
          <FontAwesomeIcon icon={faHeart}  className="social-deco"/>
        </div>
      </div>
    </div>
  )
}

export default Social
