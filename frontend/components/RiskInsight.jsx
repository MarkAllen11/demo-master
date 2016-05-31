var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var RiskInsight = React.createClass({

  _prevPage: function() {
    AppActions.changePage(3);
  },
  _nextPage: function () {
      AppActions.changePage(5);
  },
  render: function () {
    return (

      <div className="RiskInsight">
      <div className="riskTableHighlight">
        <table caption="Preferred">
        <thead>
         <tr>
    			<th>ISO Base Rate</th>
    			<th>PREFERRED COMPANY</th>
    			<th>Indicated Price</th>
  		   </tr>
         </thead>
         <tbody>
  		  <tr>
    			<td>$50000</td>
    			<td>.90</td>
    			<td>$45000</td>
  		   </tr>
         </tbody>
    		</table>
      </div>
      <br />

      <div className="riskTable">
      <table caption="Base">
      <thead>
       <tr>
        <th>ISO Base Rate</th>
        <th>BASE RATE COMPANY</th>
        <th>Indicated Price</th>
       </tr>
       </thead>
       <tbody>
      <tr>
        <td>$50000</td>
        <td>1.0</td>
        <td>$50000</td>
       </tr>
       </tbody>
      </table>
      </div>
      <br />

      <div className="riskTable">
      <table caption="Surcharge">
      <thead>
       <tr>
        <th>ISO Base Rate</th>
        <th>SURCHARGE COMPANY</th>
        <th>Indicated Price</th>
       </tr>
       </thead>
       <tbody>
      <tr>
        <td>$50000</td>
        <td>1.10</td>
        <td>$55000</td>
       </tr>
       </tbody>
      </table>
      </div>
      <br />
      <div className="submitButton">
        <button onClick={this._prevPage}>Back</button>{" "}
        <button onClick={this._nextPage}>Submit</button>
      </div>
      </div>
    );
  }

});

module.exports = RiskInsight;
