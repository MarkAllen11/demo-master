var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AppStore = require('../stores/appStore');

var Scoring = React.createClass({
 mixins: [LinkedStateMixin],  // added 2/12
  _prevPage: function() {
    AppActions.changePage(1);
  },
  _nextPage: function () {

      AppActions.changePage(3);
  },
  render: function () {

  var info = AppStore.getReportInfo();

  return (
    <div className="Scoring">
    <div className="images">
      <img src="images/Indenseo_Logo.png"/>
    </div>
    <div className="reportHeader">
			<label htmlfor="name">ACCEPTED RISK</label>
    </div>
      <div className="riskTable">
  		<table caption="Risk Analysis">
      <thead>
		   <tr>
  			<th>Scoring Criteria</th>
	   {/*   <th>Relevance Weight</th>
  			<th>Actual Score</th>  */}
  			<th>Relative Score</th>
		   </tr>
      </thead>
     <tbody>
		{/*   <tr>
  			<td>SIC</td>
  			<td>5%</td>
  			<td>{info.sicActual}</td>
  			<td>{info.sicRelative}</td>
		   </tr>
		  <tr>
  			<td>Location of risk</td>
  			<td>10%</td>
  			<td>{info.locActual}</td>
  			<td>{info.locRelative}</td>
		   </tr>
		  <tr>
  			<td>Annual Miles</td>
  			<td>10%</td>
  			<td>{info.milesActual}</td>
  			<td>{info.milesRelative}</td>
		   </tr>
		  <tr>
  			<td>Vehicle Type</td>
  			<td>5%</td>
  			<td>{info.vehTypeActual}</td>
  			<td>{info.vehTypeRelative}</td>
	   </tr>
		  <tr>
  			<td>Driving Behavior</td>
  			<td>45%</td>
  			<td>{info.drvrBehaviorActual}</td>
  			<td>{info.drvrBehaviorRelative}</td>
		  </tr>
		  <tr>
  			<td>Claim History</td>
  			<td>20%</td>
  			<td>{info.claimsHistActual}</td>
  			<td>{info.claimsHistRelative}</td>
		   </tr>
		   <tr>
  			<td>Outside Objective Trends</td>
  			<td>5%</td>
  			<td>{info.outObjTrendsActual}</td>
  			<td>{info.outObjTrendsRelative}</td>
		   </tr>
       <tr border="none">
  		   <td colspan="4">&nbsp;</td>
       </tr> */}
       <tr>
  			<td>TOTAL RISK GRADE.. Range 0-30</td>
  		{/*}	<td>30</td>
  			<td>{info.totalRiskActual}</td>  */}
  			<td>{info.totalRiskRelative}</td>
		   </tr>
      </tbody>
  		</table>
    </div><br/>
    <div className="submitButton">
      <button onClick={this._prevPage}>Back</button>{" "}
      <button onClick={this._nextPage}>Accept</button>
    </div>

    </div>
    );
  }

});

module.exports = Scoring;
