import React from 'react';

function Blog(props) {
  return (
    <section className="blog" ref={props.blogRef}>
      <h2>My Blogs</h2>
      <div className="flex wrap">
        {new Array(4).fill(0).map((ele)=>(
            <article>
            <div className="image-container">
              <img
                src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg"
                alt=""
              />
            </div>
            <h6> <span>-</span> Title</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic incidunt nihil!</p>
            <a href="">Read More...</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
