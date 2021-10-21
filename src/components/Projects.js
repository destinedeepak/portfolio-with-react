import React from 'react';

function Projects(props) {
  return (
    <section className="projects" id="projects" ref={props.projectRef}>
      <div className="project-container">
        <h2>My Projects</h2>
        {new Array(4).fill(0).map((ele, index) => (
          <article
            className={`${index % 2 === 0 ? 'ml-30' : 'ml-n-30'}`}
            style={{
              background: "url('/media/blog.jpg')",
            }}
          >
            <h1>{index + 1}</h1>
            <h2>Project Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              consectetur a explicabo dolorem aliquam vitae, odit quod. Eaque,
              earum rem voluptatibus corrupti quos excepturi officiis aspernatur
              ab reprehenderit iste labore.
            </p>
            <ul className="tag">
              <span resize>NodeJs</span>
              <span resize>NodeJs</span>
              <span resize>NodeJs</span>
              <span resize>NodeJs</span>
            </ul>
            <button target="_blank" className="about-btn">
              <span>
                {/* <i className="fas fa-link"></i> */}
                Go to Project
                <small>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </small>
              </span>
            </button>
            <button target="_blank" className="about-btn">
              <span>
                {/* <i className="fab fa-github"></i> */}
                Go to Git repo
                <small className="git">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </small>
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
