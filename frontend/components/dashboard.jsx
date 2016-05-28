var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var Dashboard = React.createClass({
  _comingSoon: function() {
    alert("Coming Soon");
  },
  _firstPage: function() {
    AppActions.changePage(0);
  },
  _nextPage: function () {
      AppActions.changePage(3);
  },
  render: function () {
    return (

      <div className="Dashboard">
      <div className="images">
        <img src="images/Indenseo_Logo.png" />
      </div>
      <div className="displayBox">
        <h1>Customer Portal and Dashboard</h1>
        <p>Risk Indicator Score</p><br />
        <p>8.75</p><br />
        <p>Indenseo Benchmark RIS</p><br />
        <p>9</p><br />
        <h1>IMPROVEMENT INCICATED</h1>
      </div>

      <a className="hrefs" href="http://idrivesafely.cust.footprint.net/CoPilot/SC05/story.html" target="_blank">Online Targeted Driver Training</a>
      <br />
      <div className="hrefs" onClick={this._comingSoon}>Best Practive Guidance</div>
      <button onClick={this._firstPage}>Start Over</button>
      </div>
    );
  }

});

module.exports = Dashboard;
