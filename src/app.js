let React = require('react');
let ReactDOM = require('react-dom');
let _ = require('lodash');
let data = require('../projects.json');


class ProjectTile extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="col-xs-12 col-sm-6 col-md-4">
				<h1>{this.props.title}</h1>
				<h2>{this.props.client}</h2>
				<p>{this.props.description}</p>
			</div>
		);
	}
};

class ProjectGallery extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			projects: _.clone(data, true)
		};
	}
	render () {
		return (
			<div className="projects">
				{this.state.projects.map((el) => {
					return (
						<ProjectTile
							title={el.title}
							client={el.client}
							description={el.description}
							key={el.title}
						/>
					);
				})}
			</div>
		);
	}
};

ReactDOM.render(
	<ProjectGallery />, 
	window.document.querySelector('#target')
);