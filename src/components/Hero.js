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
        <h5>I am Mern Stack Developer. Passionate about <br /> implementing and launching new projects. Ability <br />  to translate business requirements into technical <br />  solutions.</h5>
        <Link to="/about">
          <button className="about-btn" href="">
            <span>
              More about me{' '}
              <small>
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 476.213 476.213"
                >
                  <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
                </svg>
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
