import React from 'react';
import { Link } from 'react-router-dom';
import SocialNav from './SocialNav';
function About() {
  return (
    <div className="flex page about">
      <div
        className="personal page flex-50"
        style={{ background: 'url("/media/about-bg.png")' }}
        // style={{ background: '#EBEBEB' }}
      >
        <h2>Education</h2>
        <div className="mt-4 border-b ">
          <h4>
            AltCampus Dharamsala <span>(Bootcamp)</span>
          </h4>
          <h6>Mar 2021 - Oct 2021</h6>
        </div>
        <div className="mt-4 border-b ">
          <h4>Sharda University, Greter Noida</h4>
          <h5>B.tech (Computer Science)</h5>
          <h6>Mar 2015 - Dec 2019</h6>
        </div>
      </div>

      <div className="stack flex-50" style={{ background: '#1B1D24' }}>
        <div className="flex">
          <h2>My Skills</h2>
          <Link to="/">❌</Link>
        </div>
        <ul className="flex wrap">
          <li>
            <i className="fab fa-react"></i>
            <small>React</small>{' '}
          </li>
          <li>
            <i className="fab fa-node"></i>
            <small>NodeJS/ExpressJS</small>
          </li>
          <li>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path>
            </svg>
            <small>MongoDB</small>
          </li>
          <li>
            <i className="fab fa-js"></i>
            <small>JavaScript</small>
          </li>
          <li>
            <i className="fab fa-sass"></i>
            <small>SCSS</small>
          </li>
          <li>
            <i className="fab fa-html5"></i>
            <small>HTML</small>
          </li>
          <li>
            <i className="fab fa-css3-alt"></i>
            <small>CSS</small>
          </li>
        </ul>
      </div>
      <div className="about-social-nav self-center">
        <SocialNav />
      </div>
    </div>
  );
}

export default About;
