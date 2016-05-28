var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Aggregate = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      ref: "",
      effDate: "",
      new: "",
      underwriter: "",
      insName: "",
      agent: "",
      garAddr: "",
      dot: "",
      garState: "",
      garZip: "",
      claimCount: "",
      twoYrClaimCount: "",
      threeYrClaimCount: "",
      primVehClass: "",
      totUnits: "",
      totPrem: "",
      totPowerUnits: "",
      totLiabPrem: "",
      totTrailers: "",
      totUnitsPriorTerm: ""
    });
  },

  _addRow: function () {
    var newRow = "<tr class='data_row'>";
      for (var i = 0; i < 6; i++) {
        newRow += "<td><input type='text' /></td>";
      }
    newRow += "</tr>";
    $('.vehicleTable tr:last').after(newRow);
  },

  _nextPage: function () {
    AppActions.updateReportInfo({
      ref: this.state.ref,
      effDate: this.state.effDate,
      insName: this.state.insName,
      garAddr: this.state.garAddr,
      dot: this.state.dot,
      claimCount: this.state.claimCount,
      twoYrClaimCount: this.state.twoYrClaimCount,
      threeYrClaimCount: this.state.threeYrClaimCount
    });


    AppActions.changePage(1);
  },

  _tableRows: function () {

  },

  render: function () {
      return (
      <div className="Aggreagate">
        <div className="images">
          <img src="images/Indenseo_Logo.png" />
        </div>
        <div className="txt-input">
          <div className="txt-input-2col">
            <label htmlfor="ref">Policy Reference</label>
            <input type="text" id="ref" valueLink={this.linkState('ref')}/>
            <label htmlfor="effDate">   Policy Effective Date</label>
            <input type="text" id="effDate" valueLink={this.linkState('effDate')}/>
          </div>
          <div className="txt-input-2col">
            <label htmlfor="New">New or Renewal</label>
            <input type="text" id="New" valueLink={this.linkState('new')}/>
            <label htmlfor="underwriter">Underwriter</label>
            <input type="text" id="underwriter" valueLink={this.linkState('underwriter')}/>
          </div>
          <div className="txt-input-2col">
            <label htmlfor="insName">Insured Name</label>
            <input type="text" id="insName" valueLink={this.linkState('insName')}/>
            <label htmlfor="agent">Agent</label>
            <input type="text" id="agent" valueLink={this.linkState('agent')}/>
          </div>
          <div className="txt-input-2col">
            <label htmlfor="garAddr">Primary Garage Address</label>
            <input type="text" id="garAddr" valueLink={this.linkState('garAddr')}/>
            <label htmlfor="dot">DOT</label>
            <input type="text" id="dot" valueLink={this.linkState('dot')}/>
          </div>
          <div className="txt-input-2col">
            <label htmlfor="garState">Primary Garage State</label>
            <input type="text" id="garState" valueLink={this.linkState('garState')}/>
            <label htmlfor="garZip">Zip</label>
            <input type="text" id="garZip" valueLink={this.linkState('garZip')}/>
          </div>
          <div className="txt-input-3col">
            <label htmlfor="claimCount">Expiring Term Claim Count</label>
            <input type="text" id="claimCount" valueLink={this.linkState('claimCount')}/>
            <label htmlfor="2yrclaimCount">2 yr Claim Count</label>
            <input type="text" id="2yrclaimCount" valueLink={this.linkState('twoYrClaimCount')}/>
            <label htmlfor="3yrclaimCount">3 yr Claim Count</label>
            <input type="text" id="3yrclaimCount" valueLink={this.linkState('threeYrClaimCount')}/>
          </div>
          <div className="txt-input-3col checkboxes">
            <input type="checkbox" id="claimCountUnavail"/><label>Unavailable</label>
            <input type="checkbox" id="2yrclaimCountUnavail"/><label>Unavailable</label>
            <input type="checkbox" id="3yrclaimCountUnavail"/><label>Unavailable</label>
          </div>
          <div className="txt-input-3col">
            <label htmlfor="primVehClass">Primary Vehicle Class</label>
            <input type="text" id="primVehClass" valueLink={this.linkState('primVehClass')}/>
            <label htmlfor="totUnits">Total Units</label>
            <input type="text" id="totUnits" valueLink={this.linkState('totUnits')}/><br/>
            <label htmlfor="totPrem">Total Premium</label>
            <input type="text" id="totPrem" valueLink={this.linkState('totPrem')}/>
            <label htmlfor="totPowerUnits">Total Power Units</label>
            <input type="text" id="totPowerUnits" valueLink={this.linkState('totPowerUnits')}/>
          </div>
          <div className="txt-input-3col">
            <label htmlfor="totLiabPrem">Total Liability Premium</label>
            <input type="text" id="totLiabPrem" valueLink={this.linkState('totLiabPrem')}/>
            <label htmlfor="totTrailers">Total Trailers</label>
            <input type="text" id="totTrailers" valueLink={this.linkState('totTrailers')}/>
            <label htmlfor="totUnitsPriorTerm">Total Units Prior Term</label>
            <input type="text" id="totUnitsPriorTerm" valueLink={this.linkState('totUnitsPriorTerm')}/>
          </div>

          <button onClick={this._addRow}>+Line</button>
          <table className="vehicleTable">
              <tbody>
                  <tr className="header_row">
                      <td>Garage Zip</td>
                      <td>Vehicle Class</td>
                      <td>Total Units</td>
                      <td>Total Premium</td>
                      <td>Liability Units</td>
                      <td>Liability Premium</td>
                  </tr>
                  <tr className="blank_row">
                      <td bgcolor="#FFFFFF" colspan="3">&nbsp;</td>
                  </tr>
              </tbody>
          </table>
          <br/><button onClick={this._nextPage}>Submit</button>

        </div>
      </div>
    );
  }

});

module.exports = Aggregate;
