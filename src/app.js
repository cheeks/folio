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
				<a className="link-out" href={this.props.data.url} target="_blank">
					<h1>{this.props.data.client}</h1>
					<h2>{this.props.data.title}</h2>
				</a>
			);
		} else {
			return (
				<div>
					<h1>{this.props.data.client}</h1>
					<h2>{this.props.data.title}</h2>
				</div>
			);
		}
	}
	render () {
		return (
			<div className="tile photo col-xs-12 col-sm-6 col-lg-4"  style={{ backgroundImage: 'url(/images/'+this.props.data.image+')' }}>
				<div className="vignette"></div>
				<footer className="caption">
					{this.generateCaption()}
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
							key={el.title + ' - ' + el.client} 
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