import React from 'react';

function SocialNav() {
  return (
    <nav>
      <ul className="flex social-nav column">
        <li>
          <a target="blank" href="linkedin.com/in/destinedeepak">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a target="blank" href="https://github.com/destinedeepak">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a target="blank" href="https://twitter.com/destinedeepak_">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a target="blank" href="https://www.facebook.com/destinedeepak">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;
