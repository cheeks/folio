const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, History } = require('react-router');
const ProjectGallery = require('./work');
const AboutPage = require('./about');
const createBrowserHistory = require('history/lib/createBrowserHistory');

const SiteLink = React.createClass ({
  mixins: [History],
  render () {
    let isActive = this.history.isActive(this.props.to, this.props.query);
    let currClass = this.props.className;
    let className = isActive ? currClass += ' active' : currClass;
    return (
      <Link {...this.props} />
    )
  }
});

const App = React.createClass ({
  render () {
    return (
      <div>
        <header className="site-header">
          <div className="container">
            <div className="row">
              <cite className="col-xs-12 col-sm-6">
                <h1>Joshua Kanner</h1>
                <h2>Front-End Developer</h2>
              </cite>
              <nav className="col-xs-12 col-sm-3">
                <SiteLink to="/" className="work">Work</SiteLink>
                <SiteLink to="/about" className="about">About</SiteLink>
              </nav>
            </div>
          </div>
        </header>

        {this.props.children}

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12" dangerouslySetInnerHTML={{__html: '&copy; Joshua Kanner'}} />
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route component={App}>
      <Route path="/" component={ProjectGallery} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>
), document.querySelector('#app'));