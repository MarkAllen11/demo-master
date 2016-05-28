var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var RiskInsight = React.createClass({

  _firstPage: function() {
    AppActions.changePage(0);
  },
  _nextPage: function () {
      AppActions.changePage(3);
  },
  render: function () {
    return (

      <div className="RiskInsight">
      <div className="images">
        <img src="images/valen.png" />
      </div>
      <table caption="Risk Analysis">
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
      <br />
      <button onClick={this._nextPage}>Submit</button>
      </div>
    );
  }

});

module.exports = RiskInsight;
