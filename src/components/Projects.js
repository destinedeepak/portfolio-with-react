import React from 'react';
import projectData from '../project-data';
function Projects(props) {
  return (
    <section className="projects" id="projects" ref={props.projectRef}>
      <div className="project-container">
        <h2>My Projects</h2>
        {projectData.map((ele, index) => (
          <article
            className={`${index % 2 === 0 ? 'ml-30' : 'ml-n-30'}`}
            style={{
              background: `url('/media/${ele.imageUrl}')`,
              'background-repeat': 'no-repeat',
              'background-position': 'center',
              'background-size': 'cover',
            }}
          >
            <h1>{index + 1}</h1>
            <h2>{ele.title}</h2>
            <p>{ele.desc}</p>
            <ul>
              {ele.techStacks.map((techStack) => (
                <li className="tag" resize>
                  {techStack}
                </li>
              ))}
            </ul>
            <a href={ele.projectLink} target="_blank">
              <button className="about-btn">
                <span>
                  {/* <i className="fas fa-link"></i> */}
                  Go to Project
                  <small>
                    <i class="fas fa-angle-double-right"></i>
                  </small>
                </span>
              </button>
            </a>
            <a href={ele.githubLink} target="_blank">
              <button className="about-btn">
                <span>
                  {/* <i className="fab fa-github"></i> */}
                  Go to Git repo
                  <small className="git">
                    <i class="fas fa-angle-double-right"></i>
                  </small>
                </span>
              </button>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
