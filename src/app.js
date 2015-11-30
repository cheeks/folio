let React = require('react');
let ReactDOM = require('react-dom');
let { Router, Route, Link } = require('react-router');
let WorkPage = require('./js/work');
let ResumePage = require('./js/resume');


class App extends React.Component {
	render () {
		return (
			<div>

				<header className="site-header">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1 className="pull-left">Joshua Kanner</h1>
								<nav className="pull-right">
									<Link to="/">Work</Link>
									<Link to="/resume">Resume</Link>
								</nav>
							</div>
						</div>
					</div>
				</header>

				{this.props.children}

				<footer className="site-footer">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">&copy; Joshua Kanner</div>
						</div>
					</div>
				</footer>

			</div>
		);
	}
};

ReactDOM.render((
  <Router>
    <Route component={App}>
      <Route path="/" component={WorkPage} />
      <Route path="resume" component={ResumePage} />
    </Route>
  </Router>
), document.querySelector('#app'))



// ReactDOM.render((
// 	<ProjectGallery />,
// 	window.document.querySelector('#projects')
// );