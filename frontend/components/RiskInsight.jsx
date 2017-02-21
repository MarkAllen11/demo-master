var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AppStore = require('../stores/appStore');

var RiskInsight = React.createClass({
 mixins: [LinkedStateMixin],  // added 2/12
 getInitialState: function () {
   return ({
     totUnits: AppStore.getReportInfo().totUnits || "",
     effDate: AppStore.getReportInfo().effDate || "",
     garAddr: AppStore.getReportInfo().garAddr || "",
     sic: AppStore.getReportInfo().sic || ""
   })
 },
  _prevPage: function() {
    AppActions.changePage(4);
  },
  _nextPage: function () {
      AppActions.changePage(6);
  },
  render: function () {

    var info = AppStore.getReportInfo();

    var isoBaseRate = info.totUnits * info.isoManual;
    var prefPrice = Math.floor((isoBaseRate * 0.90)*100)/100;
    var basePrice = isoBaseRate;
    var surchargePrice = Math.floor(((isoBaseRate * 1.1)*100))/100;

    switch (info.sic) {
      case "1611":
        indenseoPricing = Math.floor((prefPrice * 0.932)*100)/100;
        break;
      case "4213":
        indenseoPricing = Math.floor((prefPrice * 0.895)*100)/100;
        break;
      case "4111":
        indenseoPricing = Math.floor((prefPrice * 0.94)*100)/100;
        break;
      default:
          indenseoPricing = Math.floor((prefPrice * 0.95)*100)/100;
    }
    return (

      <div className="RiskInsight">
      <div className="riskTable">
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
      			<td>{isoBaseRate}</td>
      			<td>.90</td>
      			<td>{prefPrice}</td>
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
        <td>{isoBaseRate}</td>
        <td>1.0</td>
        <td>{basePrice}</td>
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
        <td>{isoBaseRate}</td>
        <td>1.10</td>
        <td>{surchargePrice}</td>
       </tr>
       </tbody>
      </table>
      </div>
      <br /><br /><br />

      <div className="riskTable">
      <div className="riskTableHighlight">
      <table caption="Indenseo Insight Pricing">
      <thead>
       <tr>
        <th>Final Price</th>
       </tr>
       </thead>
       <tbody>
      <tr>
        <td>{indenseoPricing}</td>
       </tr>
       </tbody>
      </table>
      </div>
      </div>
      <br/><br/>
      <div className="submitButton">
        <button onClick={this._prevPage}>Back</button>{" "}
        <button onClick={this._nextPage}>Submit</button>
      </div>
      </div>
    );
  }

});

module.exports = RiskInsight;
