var React = require('react');
var ReactDOM = require('react-dom');
var AppStore = require('./stores/appStore');
var Navbar = require('./components/navbar');
var Login = require('./components/Login');
var Index = require('./components/index');
var Aggregate = require('./components/aggregate');
var VehicleClass = require('./components/vehicleClass');
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

    var pages = [<Login />, <Index /> , <Scoring />, <Aggregate />, <IRReport />, <RiskInsight />, <Dashboard />];

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
