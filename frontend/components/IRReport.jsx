var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var IRReport = React.createClass({

  _firstPage: function() {
    AppActions.changePage(0);
  },
  _nextPage: function() {
    AppActions.changePage(4);
  },

  render: function () {

    var info = AppStore.getReportInfo();

    var d = new Date();
    var now = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    var score = (Math.floor((Math.random() * 10) + 90))/100;

    return (

      <div className="IRReport">
        <div className="reportHeader">
          <h1>Valen InsureRight Report - Commercial Auto</h1>
          <p>Powered by Valen Analytics</p>
        </div>
        <table className="reportTable">
          <thead>
          <tr><td width='300px' align='left'>Report ID:</td><td>1000001</td><td width='300px' align='left'>Date Ordered:</td><td>{now}</td></tr>
          </thead>
          <tbody>
            <tr><td>Policy Reference:</td><td>{info.ref}</td><td>DOT</td><td>{info.dot}</td></tr>
            <tr><td>Policy Effective Date:</td><td>{info.effDate}</td></tr>
            <tr><td>Insured Name:</td><td>{info.insName}</td></tr>
            <tr><td>Insured Address:</td><td>{info.garAddr}</td><td>Expiring Term Claim Count</td><td>{info.ClaimCount}</td></tr>
            <tr><td></td><td>Anytown, USA</td><td>2 yr Expiring Term Claim Count</td><td>{info.twoYrClaimCount}</td></tr>
            <tr><td></td><td></td><td>3 yr Expiring Term Claim Count</td><td>{info.threeYrClaimCount}</td></tr>
          </tbody>
        </table>
        <div className="reportHeader">
          <p>Underwriting Risk</p>
        </div>
        <div className="txt-Display">
          <p width='300px' align='center'>Liability Risk Score</p>
          <p width='300px' align='center'>{score}</p>
        </div>

        <button onClick={this._nextPage}>Customer Portal</button>
      </div>
    );
  }

});

module.exports = IRReport;
