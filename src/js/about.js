const React = require('react');


const AboutPage = React.createClass ({
  render () {
    return (
      <section className="about">
        <div className="container">
          <div className="row">
  {/*
            <div className="col-xs-3 col-sm-offset-0 col-sm-4 col-md-3 col-lg-2">
              <div className="portrait"></div>
            </div>
  */}
            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">

              <p><a href="mailto:joshuakanner@gmail.com">email</a></p>
              <p><a href="http://www.linkedin.com/jkanner">linkedin</a></p>

              <h1>Skills &amp; Tools</h1>
              <ul className="skills">
                <li>HTML, CSS, JavaScript, Node, PHP</li>
                <li>SCSS, Myth, RWD, Grid Systems</li>
                <li>Browserify, ES2015, jQuery</li>
                <li>Express, React, Backbone, Socket.io</li>
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

module.exports = AboutPage;