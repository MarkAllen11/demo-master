var React = require('react');
var ReactDOM = require('react-dom');
var AppStore = require('./stores/appStore');
var Navbar = require('./components/navbar');
var Aggregate = require('./components/aggregate');
var VehicleClass = require('./components/vehicleClass');
var Retrieve = require('./components/retreive');
var IRReport = require('./components/IRReport');
var Scoring = require('./components/scoring');
var RiskInsight = require('./components/RiskInsight');
var Dashboard = require('./components/dashboard');


var App = React.createClass({

  getInitialState: function () {
    return { currentPage: 0 };
  },

  componentDidMount: function () {
    this.listener = AppStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ currentPage: AppStore.currentPage()});
  },

  render: function () {

    var pages = [<Aggregate />,  <Scoring />, <RiskInsight />, <IRReport />, <Dashboard />];

    return (
      <div className="main-container">
        <Navbar />
        {pages[this.state.currentPage]}
      </div>
    );
  }

});

$(
  function () {
    ReactDOM.render(<App />, document.getElementById("main"));
  }
);
