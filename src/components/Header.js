import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="container flex align-center">
        <a href="#projects" className="brand">
          <i className="fab fa-dochub"></i>
        </a>
        <nav>
          <ul className="flex navbar">
            <li
              onClick={() => {
                props.scrollToProjects('project');
              }}
            >
              <span>Projects</span>
            </li>
            <li
              onClick={() => {
                props.scrollToProjects('blog');
              }}
            >
              <span>Blogs</span>
            </li>
            <li
              onClick={() => {
                props.scrollToProjects('contact');
              }}
            >
              <span>Contact</span>
            </li>
            <li>
             <span>
                  {/* <i className="fas fa-adjust"></i> */}
             </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
