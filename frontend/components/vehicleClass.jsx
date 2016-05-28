var React = require('react');
var AppActions = require('../actions/appActions');

var VehicleClass = React.createClass({

  _nextPage: function (e) {
    e.preventDefault();
    AppActions.changePage(2);
  },

  render: function () {
    return (
      <div className="vehicleClass">
      <div className="txt-input-2col">
        <label htmlfor="ref">Policy Reference</label>
        <input type="text" id="ref"/>
        <label htmlfor="effDate">Policy Effective Date</label>
        <input type="text" id="effDate"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="New">New or Renewal</label>
        <input type="text" id="New"/>
        <label htmlfor="underwriter">Underwriter</label>
        <input type="text" id="underwriter"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="insName">Insured Name</label>
        <input type="text" id="insName"/>
        <label htmlfor="agent">Agent</label>
        <input type="text" id="agent"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="insNameAddr">Insured Address</label>
        <input type="text" id="insAddr"/>
        <label htmlfor="dot">DOT</label>
        <input type="text" id="dot"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="insState">Insured State</label>
        <input type="text" id="insState"/>
        <label htmlfor="insZip">   Zip</label>
        <input type="text" id="insZip"/>
      </div>
      <div className="txt-input-3col">
        <label htmlfor="claimCount">Expiring Term Claim Count</label>
        <input type="text" id="claimCount"/>
        <label htmlfor="2yrclaimCount">  2 yr Claim Count</label>
        <input type="text" id="  2 yr claimCount"/>
        <label htmlfor="3yrclaimCount">  3 yr Claim Count</label>
        <input type="text" id="3yrclaimCount"/>
      </div>
      <div className="txt-input-3col">
        <input type="checkbox" id="claimCountUnavail"/><label>  Unavailable  </label>
        <input type="checkbox" id="2yrclaimCountUnavail"/><label>  Unavailable</label>
        <input type="checkbox" id="3yrclaimCountUnavail"/><label>  Unavailable</label>
      </div>
      <table class="vehicleTable">
          <tbody>
              <tr class="header_row">
                  <td>Garage Zip</td>
                  <td>Vehicle Class</td>
                  <td>Total Units</td>
                  <td>Total Premium</td>
                  <td>Liability Units</td>
                  <td>Liability Premium</td>
              </tr>
              <tr class="blank_row">
                  <td bgcolor="#FFFFFF" colspan="3">&nbsp;</td>
              </tr>
              <tr class="data_row">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>7</td>
              </tr>
          </tbody>
      </table>
      <br/><br/><button onClick={this._nextPage}>Submit</button>
      </div>
    );
  }

});

module.exports = VehicleClass;
