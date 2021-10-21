import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { createRef } from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
class App extends React.Component {
  state = {
    prevDepth: this.getPathDepth(this.props.location),
  };
  projectRef = createRef();
  blogRef = createRef();
  contactRef = createRef();

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  scrollTo = (page) => {
    let ref;
    if (page === 'project') ref = this.projectRef;
    else if (page === 'blog') ref = this.blogRef;
    else if (page === 'contact') ref = this.contactRef;
    else return;
    return window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  getPathDepth(location) {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter((n) => n !== '');
    return pathArr.length;
  }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 800, exit: 400 };
    return (
      <>
        <Header scrollToProjects={this.scrollTo} />
        <TransitionGroup component="div" className="App">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <div
              className={
                this.getPathDepth(location) - this.state.prevDepth >= 0
                  ? 'left'
                  : 'right'
              }
            >
              <Switch location={location}>
                <Route path="/" exact component={Hero} />
                <Route path="/about" exact component={About} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Projects projectRef={this.projectRef} />
        <Blog blogRef={this.blogRef} />
        <Contact contactRef={this.contactRef} />
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
