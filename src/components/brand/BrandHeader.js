import React from 'react'
import './BrandHeader.css'
import '../../fonts/Natalie.ttf'
import { ReactComponent as BrandLogo } from './Natalie.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function BrandHeader() {
  return (
    <div className="brand">
      <div className="brand_logo-name-container">
        <BrandLogo name="brand-logo" className="brand_logo" />
        <span className="brand_name">Natalie</span>
      </div>
      <div className="brand_social">
        <FontAwesomeIcon icon={faTwitter} className="brand_social-icon"/>
        <FontAwesomeIcon icon={faFacebook}  className="brand_social-icon"/>
        <FontAwesomeIcon icon={faYoutube}  className="brand_social-icon"/>
        <FontAwesomeIcon icon={faInstagram}  className="brand_social-icon"/>
        <FontAwesomeIcon icon={faDiscord}  className="brand_social-icon"/>
      </div>
    </div>
  )
}
