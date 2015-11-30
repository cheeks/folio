let React = require('react');


class ResumePage extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <div className="portrait"></div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
            <h1>Joshua Kanner</h1>
            <h2>Blah Blah Blah</h2>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ResumePage;