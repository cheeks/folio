let React = require('react');
let ReactDOM = require('react-dom');
let { Router, Route, Link } = require('react-router');
let WorkPage = require('./js/work');
let ResumePage = require('./js/resume');
let createBrowserHistory = require('history/lib/createBrowserHistory');

class App extends React.Component {
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
									<Link to="/">Work</Link> / <Link to="/resume">Resume</Link>
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
};

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route component={App}>
      <Route path="/" component={WorkPage} />
      <Route path="resume" component={ResumePage} />
    </Route>
  </Router>
), document.querySelector('#app'));