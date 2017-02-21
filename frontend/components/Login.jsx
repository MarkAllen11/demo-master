var React = require('react');
var AppActions = require('../actions/appActions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Login = React.createClass({
  mixins: [LinkedStateMixin],
  _validCredentials: function(u,p) {
    return (u === "indenseo" && p === 420590337);
  },
  componentDidMount: function(){
    document.getElementById("uname").focus();
  },
  _hashPwd: function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  },
  getInitialState: function () {
    return ({
      uname: "",
      pwd: ""
    });
  },
  _nextPage: function () {
    if (this._validCredentials(this.state.uname , this._hashPwd(this.state.pwd )))
      {
        AppActions.changePage(1);
      } else
       {
        //AppActions.changePage(1);
         alert ('Username and Password Invalid');
         this.setState({pwd: ""}) ;
         document.getElementById("uname").focus();
        }
   },
  render: function () {
    return (
      <div className="Login">
        <div>
          <img src="images/Indenseo_Logo.png" />
        </div>
        <div className="txt-input-2col">
          <label htmlfor="uname">Username:</label>
          <input type="text" id="uname" valueLink={this.linkState('uname')}/>
        </div>
          <div className="txt-input-2col">
            <label htmlfor="pwd">Password:</label>
            <input type="password" id="pwd" valueLink={this.linkState('pwd')}/>
        </div><br /><br />

        <div>
          <button onClick={this._nextPage}>Enter Site</button>
        </div>
      </div>
    );
  }

});

module.exports = Login;
