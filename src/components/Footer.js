import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import {SiCodeforces} from 'react-icons/si';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(70, 0, 0)' }} id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: 'center', color: 'white', marginTop: '2rem', fontSize: '1.2rem' }}>Developed by Prashant Choudhary</p>
            <div style={{ height: '2rem' }}></div>
            <ul className="social-icons" style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '2rem', padding: 0 }}>
              <li>
                <a href="https://github.com/prashant6802" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <FaGithub size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/prashant-choudhary-007989206/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <FaLinkedin size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/prashantcj68/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <FaInstagram size={32} />
                </a>
              </li>
              <li>
                <a href="https://codeforces.com/profile/prashant68" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <SiCodeforces size={32} height={32} />
                </a>
              </li>
              <li>
                <a href="mailto:jakharprashant6802@gmail.com" style={{ color: 'white' }}>
                  <FaEnvelope size={32} />
                </a>
              </li>
            </ul>
            <div style={{ height: '2rem' }}></div>
            <p style={{ textAlign: 'center', color: 'white' }}>&copy; 2023 Bluestar Interactive. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
