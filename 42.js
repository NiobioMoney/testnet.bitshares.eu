webpackJsonp([42],{1318:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=n.n(o),i=n(25),u=n.n(i),s=n(107),m=n(6),p=n(15),d=n(170),b=n(13),f=(n.n(b),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),v=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),f(t,[{key:"_onClaim",value:function(e,t){var n=this;t.preventDefault(),d.a.claimVestingBalance(this.props.account.id,this.props.vb,e).then(function(){"function"==typeof n.props.handleChanged&&n.props.handleChanged()})}},{key:"render",value:function(){var e=this.props.vb;if(!this.props.vb)return null;var t=void 0,n=void 0,a=void 0,c=void 0,r=void 0;return e&&(r=e.balance.amount,t=m.b.getAsset(e.balance.asset_id),a=e.policy[1].coin_seconds_earned,n=e.policy[1].vesting_seconds,c=0===n?1:a/(n*r)),t&&r?l.a.createElement("div",{style:{paddingBottom:"1rem"}},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"grid-content no-padding"},l.a.createElement(u.a,{component:"h5",content:"account.vesting.balance_number",id:e.id}),l.a.createElement("table",{className:"table key-value-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.cashback"})),l.a.createElement("td",null,l.a.createElement(s.a,{amount:e.balance.amount,asset:e.balance.asset_id}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.earned"})),l.a.createElement("td",null,p.a.format_number(p.a.get_asset_amount(a/86400,t),0)," ",l.a.createElement(u.a,{content:"account.member.coindays"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.required"})),l.a.createElement("td",null,p.a.format_number(p.a.get_asset_amount(e.balance.amount*n/86400,t),0)," ",l.a.createElement(u.a,{content:"account.member.coindays"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.remaining"})),l.a.createElement("td",null,p.a.format_number(n*(1-c)/86400||0,2)," days")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(u.a,{content:"account.member.available"})),l.a.createElement("td",null,p.a.format_number(100*c,2),"% / ",l.a.createElement(s.a,{amount:c*e.balance.amount,asset:t.get("id")}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},l.a.createElement("button",{onClick:this._onClaim.bind(this,!1),className:"button outline"},l.a.createElement(u.a,{content:"account.member.claim"}))))))))):null}}]),t}(l.a.Component),h=function(e){function t(){a(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={vbs:null},e}return r(t,e),f(t,[{key:"componentWillMount",value:function(){this.retrieveVestingBalances.call(this,this.props.account.get("id"))}},{key:"componentWillUpdate",value:function(e){var t=e.account.get("id");t!==this.props.account.get("id")&&this.retrieveVestingBalances.call(this,t)}},{key:"retrieveVestingBalances",value:function(e){var t=this;e=e||this.props.account.get("id"),b.Apis.instance().db_api().exec("get_vesting_balances",[e]).then(function(e){t.setState({vbs:e})}).catch(function(e){console.log("error:",e)})}},{key:"render",value:function(){var e=this,t=this.state.vbs;if(!t||!this.props.account||!this.props.account.get("vesting_balances"))return null;var n=this.props.account.toJS(),a=t.map(function(t){if(t.balance.amount)return l.a.createElement(v,{key:t.id,vb:t,account:n,handleChanged:e.retrieveVestingBalances.bind(e)})}).filter(function(e){return!!e});return l.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},l.a.createElement(u.a,{content:"account.vesting.explain",component:"p"}),a.length?a:l.a.createElement("h4",{style:{paddingTop:"1rem"}},l.a.createElement(u.a,{content:"account.vesting.no_balances"})))}}]),t}(l.a.Component);h.VestingBalance=v,t.default=h}});
//# sourceMappingURL=42.js.map