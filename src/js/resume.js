const React = require('react');


const ResumePage = React.createClass ({
  render () {
    return (
      <section className="resume">
        <div className="container">
          <div className="row">
  {/*
            <div className="col-xs-3 col-sm-offset-0 col-sm-4 col-md-3 col-lg-2">
              <div className="portrait"></div>
            </div>
  */}
            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">

              <h1>Skills &amp; Tools</h1>
              <ul className="skills">
                <li>HTML, CSS, JavaScript, Node, PHP</li>
                <li>Browserify, ES2015, React, jQuery</li>
                <li>SCSS, Compass, Myth, Grid Systems</li>
                <li>Express, Socket.io</li>
                <li>MySQL, mongoDB</li>
                <li>Gulp, Grunt</li>
              </ul>

              <h1>Experience</h1>
              <ul className="jobs">
                <li>
                  Evolution Bureau<br />
                  Sr. Interactive Developer<br />
                  April 2012 -­ present
                </li>
                <li>
                  Crispin Porter + Bogusky<br />
                  Interactive Developer<br />
                  January 2010 ­- March 2012
                </li>
              </ul>

              <h1>Education</h1>
              <p className="education">
                Rochester Institute of Technology<br />
                BS, New Media Interactive Development<br />
                2005­ - 2009
              </p>

            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = ResumePage;