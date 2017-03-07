var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AppStore = require('../stores/appStore');
var formatCurrency = require('format-currency');

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
    //var opts = { format: '%s%v %c', symbol: '$' };
    var opts = { format: '%s%v', symbol: '$' };
    var isoBaseRate = info.totUnits * info.isoManual;
    var prefPrice = isoBaseRate * 0.90;
    var basePrice = formatCurrency(isoBaseRate, opts);
    var hiTable;
    //var surchargePrice = Math.floor((isoBaseRate * 1.1)*100)/100;
    var surchargePrice = isoBaseRate * 1.1;
    isoBaseRate = formatCurrency(isoBaseRate, opts);
    surchargePrice = formatCurrency(surchargePrice, opts);
    var tbl;
    switch (info.sic) {
      case "1611":
        indenseoPricing = Math.floor((prefPrice * 0.932)*100)/100;
        //debugger;
        hiTable='Preferred';
        //x[0].bgColor = "Yellow";
        break;
      case "4213":
        indenseoPricing = Math.floor((prefPrice * 0.895)*100)/100;
        hiTable = 'Base';
        break;
      case "4111":
        indenseoPricing = Math.floor((prefPrice * 0.94)*100)/100;
        hiTable='Preferred';
        break;
      default:
        hiTable='Base';
        indenseoPricing = Math.floor((prefPrice * 0.95)*100)/100;
    }
    indenseoPricing = formatCurrency(indenseoPricing, opts);
    prefPrice = formatCurrency(prefPrice, opts);

    return (

      <div className="RiskInsight">
      <div className={hiTable === 'Preferred' ? 'riskTableHighlight' : "riskTable"}>
        <table id="Preferred" caption="Preferred">
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
      			<td>0.90</td>
      			<td>{prefPrice}</td>
    		   </tr>
         </tbody>
    		</table>
      </div>

      <br />

      <div className={hiTable === 'Base' ? 'riskTableHighlight' : "riskTable"}>
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
        <td>1.00</td>
        <td>{basePrice}</td>
       </tr>
       </tbody>
      </table>
      </div>
      <br />

      <div className={hiTable === 'Risk' ? 'riskTableHighlight' : "riskTable"}>
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
