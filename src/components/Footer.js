import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="footer-brand">
          <i className="fab fa-dochub"></i>
        </span>
        <nav>
          <ul className="flex center">
            <li>
              <a target="blank" href="https://twitter.com/destinedeepak_">Twitter</a>
            </li>
            <li>
              <a target="blank" href="linkedin.com/in/destinedeepak">Linkedin</a>
            </li>
            <li>
              <a target="blank" href="https://github.com/destinedeepak">Github</a>
            </li>
            <li>
              <a target="blank" href="https://www.facebook.com/destinedeepak">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
