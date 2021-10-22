import { Link } from 'react-router-dom';
import SocialNav from './SocialNav';
function Hero() {
  return (
    <section
      className="hero page align-center flex"
      style={{
        background: 'url("/media/header-bg.png") no-repeat center center',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
      }}
    >
      <article className="container">
        <h1>
          Hello, my name is <span>Deepak Kumar Singh</span>{' '}
        </h1>
        <h5>
          I am Mern Stack Developer. Passionate about <br /> implementing and
          launching new projects. Ability <br /> to translate business
          requirements into technical <br /> solutions.
        </h5>
        <Link to="/about">
        <button className="about-btn">
                <span>
                  {/* <i className="fas fa-link"></i> */}
                  Go to Project
                  <small>
                    <i class="fas fa-angle-double-right"></i>
                  </small>
                </span>
              </button>
        </Link>
      </article>
      <SocialNav />
    </section>
  );
}

export default Hero;
