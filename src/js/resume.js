const React = require('react');


const ResumePage = React.createClass ({
  render () {
    return (
      <section className="resume container">
        <div className="row">
{/*
          <div className="col-xs-3 col-sm-offset-0 col-sm-4 col-md-3 col-lg-2">
            <div className="portrait"></div>
          </div>
*/}
          <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">

            <h1>Skills &amp; Tools</h1>
            <ul>
              <li>HTML, CSS, JavaScript, Node, PHP</li>
              <li>Browserify, ES2015, React, jQuery</li>
              <li>SCSS, Compass, Myth, Grid Systems</li>
              <li>Express, Socket.io</li>
              <li>MySQL, mongoDB</li>
              <li>Gulp, Grunt</li>
            </ul>

            <h1>Experience</h1>
            <ul>
              <li>
                <cite>Evolution Bureau</cite>
                <h2>Sr. Interactive Developer</h2>
                <strong>April 2012 -­ present</strong>
              </li>
              <li>
                <cite>Crispin Porter + Bogusky</cite>
                <h2>Interactive Developer</h2>
                <strong>January 2010 ­- March 2012</strong>
              </li>
            </ul>

            <h1>Education</h1>
            <p>Rochester Institute of Technology</p>
            <p>BS, New Media Interactive Development</p>
            <p>2005­ - 2009</p>

          </div>
        </div>
      </section>
    );
  }
});

module.exports = ResumePage;