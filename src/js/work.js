const React = require('react');
const _ = require('lodash');
const data = require('../../projects.json');

const ProjectTile = React.createClass ({
  generateCaption () {
    if (this.props.data.url !== '') {
      return (
        <a className="link-out" href={this.props.data.url} target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="68.132" height="30.769" viewBox="0 0 68.132 30.769"><path className="visit-btn" fill="#FFF" d="M68.132 24.77a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h56.132a6 6 0 0 1 6 6v18.77zM25.26 15.3c-.25.897-.396 1.526-.44 1.886-.022-.156-.082-.435-.178-.835s-.188-.75-.278-1.05l-1.61-5.1h-1.835l2.905 8.567h1.98l2.912-8.566h-1.834l-1.623 5.1zm5.29-3.897c.325 0 .568-.077.73-.23s.243-.37.243-.648c0-.582-.324-.873-.973-.873s-.973.29-.973.873c0 .585.325.878.974.878zm.89.814h-1.786v6.55h1.787v-6.55zm6.277 3.768c-.113-.234-.29-.44-.527-.62s-.613-.374-1.125-.58c-.574-.23-.946-.405-1.116-.522s-.256-.256-.256-.416c0-.285.264-.428.79-.428.298 0 .59.044.874.134s.592.205.92.346l.54-1.29a5.445 5.445 0 0 0-2.304-.515c-.828 0-1.468.16-1.92.478s-.676.77-.676 1.35c0 .34.054.627.16.86s.28.437.517.617.606.375 1.11.586c.352.148.633.278.844.39s.358.21.444.3.13.2.13.342c0 .375-.325.562-.974.562-.316 0-.683-.053-1.1-.158s-.79-.236-1.12-.393v1.476c.292.125.606.22.942.284s.742.097 1.22.097c.93 0 1.627-.176 2.094-.527s.7-.863.7-1.535c0-.326-.056-.606-.17-.84zm2.46-4.582c.325 0 .568-.077.73-.23s.243-.37.243-.648c0-.582-.324-.873-.973-.873s-.973.29-.973.873c0 .585.325.878.974.878zm.89.814h-1.786v6.55h1.788v-6.55zm4.07 5.063c-.142-.12-.213-.31-.213-.562V13.56h1.834v-1.342h-1.834v-1.395H43.78l-.515 1.383-.984.598v.756h.856v3.158c0 .723.163 1.265.49 1.626s.846.542 1.56.542c.65 0 1.196-.1 1.642-.3v-1.33c-.438.138-.812.206-1.125.206-.234 0-.423-.06-.565-.182z"/></svg>
        </a>
      );
    }
  },
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
});

const ProjectGallery = React.createClass ({
  getInitialState() {
    return {
      projects: _.clone(data, true)
    }
  },
  render () {
    return (
      <section className="projects container-fluid">
        <div className="row">
          {this.state.projects.map((el) => {
            return (
              <ProjectTile
                data={el}
                key={el.client + '-' + el.title}
              />
            );
          })}
        </div>
      </section>
    );
  }
});


module.exports = ProjectGallery;