var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var AppStore = require('../stores/appStore');
var Sic;
var sicAct, sicRel;
var locAct, locRel ;
var milesAct, milesRel;
var vehTypeAct, vehTypeRel;
var drvrBehaviroAct, drvrBehaviorRel;
var claimHistAct, claimHistRel;
var outObjTrendsAct, outObjTrendsRel;

var Index = React.createClass({
  mixins: [LinkedStateMixin],
  componentDidMount: function(){
    document.getElementById("name").focus();
  },
  getInitialState: function () {
    return ({
      insName: AppStore.getReportInfo().insName || "",
      effDate: AppStore.getReportInfo().effDate || "",
      garAddr: AppStore.getReportInfo().garAddr || ""
    });
  },
 _nextPage: function () {

   Sic = document.getElementById("sicCode").value;
   switch (Sic) {
     case "1611":
        sicAct = 11;
        locAct = 8;
        milesAct = 17;
        vehTypeAct = 15;
        drvrBehaviorAct = 19;
        claimHistAct = 6;
        outObjTrendsAct = 6;
        break;
     case "4213":
        sicAct = 9;
        locAct = 20;
        milesAct = 23;
        vehTypeAct = 12;
        drvrBehaviorAct = 26;
        claimHistAct = 21;
        outObjTrendsAct = 7;
        break;
      case "4111":
         sicAct = 13;
         locAct = 9;
         milesAct = 20;
         vehTypeAct = 10;
         drvrBehaviorAct = 25;
         claimHistAct = 19;
         outObjTrendsAct = 9;
         break;
     default:
       sicAct = 10;
       locAct = 8;
       milesAct = 15;
       vehTypeAct = 10;
       drvrBehaviorAct = 18;
       claimHistAct = 5;
       outObjTrendsAct = 9;
   }
   sicRel = sicAct / 20;
   locRel = locAct / 10;
   milesRel = milesAct / 10;
   vehTypeRel = vehTypeAct / 20;
   drvrBehaviorRel = Math.round((drvrBehaviorAct * 0.45)*100)/100;
   claimHistRel = claimHistAct / 5;
   outObjTrendsRel = outObjTrendsAct / 20

   AppActions.updateReportInfo({
      insName: this.state.insName,
      effDate: this.state.effDate,
      garAddr: this.state.garAddr,
      sic: this.state.sic,
      sicActual: sicAct,
      sicRelative: sicRel,
      locActual: locAct,
      locRelative: locRel,
      milesActual: milesAct,
      milesRelative: milesRel,
      vehTypeActual: vehTypeAct,
      vehTypeRelative: vehTypeRel,
      drvrBehaviorActual: drvrBehaviorAct,
      drvrBehaviorRelative: drvrBehaviorRel,
      claimsHistActual: claimHistAct,
      claimsHistRelative: claimHistRel,
      outObjTrendsActual: outObjTrendsAct,
      outObjTrendsRelative: outObjTrendsRel,
      totalRiskActual: Math.round((sicAct + locAct + milesAct + vehTypeAct +
        drvrBehaviorAct + claimHistAct + outObjTrendsAct)*100)/100,
      totalRiskRelative: Math.round((sicRel + locRel + milesRel + vehTypeRel +
          drvrBehaviorRel + claimHistRel + outObjTrendsRel)*100)/100
    });
      AppActions.changePage(2);
  },
  render: function () {

    return (

    <div className="Index">
      <div className="images">
        <img src="images/Indenseo_Logo.png" />
      </div>

			<div className="reportHeader">BUSINESS INFO</div>

      <div className="txt-input-2col">
        <label htmlfor="name">Business Name</label>
        <input type="text"  id="name" valueLink={this.linkState('insName')} />
        <label htmlfor="fein">FEIN/SSN</label>
        <input type="text"  id="fein"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="address">Business Address</label>
        <input type="text"  id="address" valueLink={this.linkState('garAddr')}/>
        <label htmlfor="loc">Business Locations</label>
        <input type="text"  id="loc"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="effectdate">Effective Date</label>
        <input type="text"  id="effectdate" valueLink={this.linkState('effDate')} />
        <label htmlfor="expDate">Expiration Date</label>
        <input type="text"  id="expdate"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="sic">SIC</label>
        <input type="text"  id="sicCode" valueLink={this.linkState('sic')} />
      </div>

      <div className="reportHeader">COVERAGES REQUESTED</div>
      <div className="txt-input-2col">
        <label htmlfor="liability">Liability Limits</label>
        <input type="text"  id="liability"/>
        <label htmlfor="pdliabilty">PD Liability Limits</label>
        <input type="text"  id="pdliabilty"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="uimlimits">UM and UIM Limits</label>
        <input type="text"  id="uimlimits"/>
        <label htmlfor="compdeduct">Comprehensive Deductible</label>
	      <input type="text"  id="compdeduct"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="colldeduct">Collission Deductible</label>
        <input type="text"  id="colldeduct"/>
        <label htmlfor="othext">Other Coverage Extensions</label>
        <input type="text"  id="othext"/>
      </div>

      <div className="reportHeader">VEHICLE INFO</div>
      <div className="txt-input-2col">
        <label htmlfor="yrmakemod">Year/make/Model</label>
        <input type="text"  id="yrmkmod"/>
        <label htmlfor="weight">Weight</label>
        <input type="text"  id="weight"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="vin">VIN</label>
        <input type="text"  id="vin"/>
        <label htmlfor="zip">Zip Code Operated In</label>
        <input type="text"  id="zip"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="radius">Radius Traveled</label>
        <input type="text"  id="radius"/>
        <label htmlfor="loanholder">Loan Holder</label>
        <input type="text"  id="loanholder"/>
      </div>

      <div className="reportHeader">DRIVER INFO</div>
      <div className="txt-input-2col">
        <label htmlfor="dname">Name</label>
        <input type="text"  id="dname"/>
        <label htmlfor="daddress">Address</label>
        <input type="text"  id="daddress"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="dage">Age</label>
        <input type="text"  id="dage"/>
        <label htmlfor="dlicense">License #</label>
        <input type="text"  id="dlicense"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="dviolations">Violations</label>
        <input type="text"  id="dviolations"/>
        <label htmlfor="datfaultacc">At Fault Accidents</label>
        <input type="text"  id="datfaultacc"/>
      </div>
      <div className="txt-input-2col">
        <label htmlfor="dotheracc">Other Accidents</label>
        <input type="text"  id="dotheracc"/>
      </div>

      <div className="reportHeader">LOSS HISTORY</div>
      <div className="txt-input-2col">
        <label htmlfor="lh3years">Min 3 Years of Loss Runs</label>
        <input type="text"  id="lh3years"/>
      </div>
      <div className="reportHeader">UNDERWRITING QUESTIONS</div>
      <div className="txt-input-2col">
        <label htmlfor="prevcov">Previous Insurance Coverage and Carrier</label>
        <input type="text"  id="prevcov"/>
      </div>

      <div>
        <button onClick={this._nextPage}>Submit</button>
      </div>

    </div>

    );
  }

});

module.exports = Index;
