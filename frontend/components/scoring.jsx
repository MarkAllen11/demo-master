var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var Scoring = React.createClass({

  _prevPage: function() {
    AppActions.changePage(0);
  },
  _nextPage: function () {
      AppActions.changePage(2);
  },
  render: function () {

  return (
    <div className="Scoring">
    <div className="images">
      <img src="images/Indenseo_Logo.png" />
    </div>
    <div className="reportHeader">
			<label htmlfor="name">ACCEPTED RISK</label>
    </div>
      <div className="riskTable">
  		<table caption="Risk Analysis">
      <thead>
		   <tr>
  			<th>Scoring Criteria</th>
  			<th>Relevance Weight</th>
  			<th>Actual Score</th>
  			<th>Relative Score</th>
		   </tr>
      </thead>
      <tbody>
		  <tr>
  			<td>SIC</td>
  			<td>5%</td>
  			<td>10</td>
  			<td>0.5</td>
		   </tr>
		  <tr>
  			<td>Location of risk</td>
  			<td>10%</td>
  			<td>8</td>
  			<td>0.8</td>
		   </tr>
		  <tr>
  			<td>Annual Miles</td>
  			<td>10%</td>
  			<td>15</td>
  			<td>1.5</td>
		   </tr>
		  <tr>
  			<td>Vehicle Type</td>
  			<td>5%</td>
  			<td>10</td>
  			<td>0.5</td>
	   </tr>
		  <tr>
  			<td>Driving Behavior</td>
  			<td>45%</td>
  			<td>18</td>
  			<td>8.1</td>
		  </tr>
		  <tr>
  			<td>Claim History</td>
  			<td>20%</td>
  			<td>5</td>
  			<td>1</td>
		   </tr>
		   <tr>
  			<td>Outside Objective Trends</td>
  			<td>5%</td>
  			<td>9</td>
  			<td>0.45</td>
		   </tr>
       <tr border="none">
  		   <td colspan="4">&nbsp;</td>
       </tr>
       <tr>
  			<td>TOTAL RISK GRADE.. Range 0-30</td>
  			<td>30</td>
  			<td>75</td>
  			<td>12.85</td>
		   </tr>
      </tbody>
  		</table>
    </div><br/>
    <div className="submitButton">
      <button onClick={this._prevPage}>Back</button>{" "}
      <button onClick={this._nextPage}>Submit</button>
    </div>

    </div>
    );
  }

});

module.exports = Scoring;
