var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AppStore = require('../stores/appStore');
var score = 0.0;
var isoManual;

var IRReport = React.createClass({
 mixins: [LinkedStateMixin],  // added 2/12
 getInitialState: function () {
   return ({
     totUnits: AppStore.getReportInfo().totUnits || "",
     effDate: AppStore.getReportInfo().effDate || "",
     garAddr: AppStore.getReportInfo().garAddr || "",
     sic: AppStore.getReportInfo().sic || "",
     isoManual: AppStore.getReportInfo().isoManual || ""
   })
 },
  _prevPage: function() {
    AppActions.changePage(3);
  },
  _nextPage: function() {

    AppActions.updateReportInfo({
       sic: this.state.sic,
       totUnits: this.state.totUnits,
       score: score,
       isoManual: isoManual
     });

    AppActions.changePage(5);
  },

  render: function () {

    var info = AppStore.getReportInfo();

    var d = new Date();
    var now = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();

    // var score = (Math.floor(Math.random() * (100 - 90) + 90))/100;
    switch (info.sic) {
      case "1611":
        score = 0.9;
        isoManual = 3024;
        break;
      case "4213":
        score = 1.01;
        isoManual = 4528;
        break;
      case "4111":
        score = 0.90;
        isoManual = 1926;
        break;
      default:
        score = 0.95;
        isoManual = 3150;
    }

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
            <tr><td>Insured Address:</td><td>{info.garAddr}</td><td>Expiring Term Claim Count</td><td>{info.claimCount}</td></tr>
            <tr><td></td><td>Anytown, USA</td><td>2 yr Expiring Term Claim Count</td><td>{info.twoYrClaimCount}</td></tr>
            <tr><td></td><td></td><td>3 yr Expiring Term Claim Count</td><td>{info.threeYrClaimCount}</td></tr>
          </tbody>
        </table>
        <div className="reportHeader">
          <p>Underwriting Risk</p>
        </div>
        <table className="reportTable">
          <thead>
          <tr><td width='300px' align='left'>Liability Risk Score:</td><td>{score}</td><td width='300px' align='left'>ISO Manual</td><td>{isoManual}</td></tr>
          </thead>
        </table>

        <br/><br/>


        <div className="submitButton">
          <button onClick={this._prevPage}>Back</button>{" "}
          <button onClick={this._nextPage}>Submit</button>
        </div>
      </div>
    );
  }

});

module.exports = IRReport;
