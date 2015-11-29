let React = require('react');
let ReactDOM = require('react-dom');
let _ = require('lodash');
let data = require('../projects.json');


class ProjectTile extends React.Component {
	constructor (props) {
		super(props);
	}
	generateCaption () {
		if (this.props.data.url !== '') {
			return (
				<a className="link-out" href={this.props.data.url} target="_blank">visit site &gt;</a>
			);
		}
	}
	render () {
		return (
			<div className="tile photo col-xs-12 col-sm-6 col-md-4 col-lg-3"  style={{ backgroundImage: 'url(/images/'+this.props.data.image+')' }}>
				<footer>
					<div className="overlay" style={{ backgroundImage: 'url(/images/'+this.props.data.image+')' }}></div>
					<div className="caption">
						<div className="caption-content">
							<h1>{this.props.data.client}</h1>
							<h2>{this.props.data.title}</h2>
							{ this.generateCaption() }
						</div>
					</div>
				</footer>
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
							data={el}
							key={el.client + '-' + el.title}
						/>
					);
				})}
			</div>
		);
	}
};

ReactDOM.render(
	<ProjectGallery />,
	window.document.querySelector('#projects')
);