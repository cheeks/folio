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
			<a href="" className="tile col-xs-12 col-sm-6 col-md-4">
				<figure>
					<div className="photo" style={{ backgroundImage: 'url(/images/'+this.props.data.image+')' }}></div>
					<figcaption className="caption">
						<h2>{this.props.data.client}</h2>
						<h1>{this.props.data.title}</h1>
						<p>{this.props.data.description}</p>
					</figcaption>
				</figure>
			</a>
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