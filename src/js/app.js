const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link, History } = require('react-router');
const ProjectGallery = require('./work');
const ResumePage = require('./resume');
const createBrowserHistory = require('history/lib/createBrowserHistory');

const SiteLink = React.createClass ({
  mixins: [History],
  render () {
    let isActive = this.history.isActive(this.props.to, this.props.query);
    let className = isActive ? 'active' : '';
    return (
      <Link {...this.props} className={className} />
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
              <div className="col-xs-12">
                <cite className="pull-left">
                  <h1>Joshua Kanner</h1>
                  <h2>Front-End Developer</h2>
                </cite>
                <nav className="pull-right">
                  <SiteLink to="/">Work</SiteLink>
                  <SiteLink to="/resume">Resume</SiteLink>
                </nav>
              </div>
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
      <Route path="resume" component={ResumePage} />
    </Route>
  </Router>
), document.querySelector('#app'));