(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{27:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(0)),u=r(30),l=i(u),s=i(r(31));function i(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return a.default.createElement(l.default,n({},this.props,{partName:this.props.partName,width:this.props.mmWidth,terminals:this.props.terminals,leds:this.props.leds,raisedMidsection:!1,hasTopRow:!1,partNumber:this.props.partNumber,labels:["a","0","1","2","3","4","5","6","7"],colorCard:{isAnalogIn:!0}}),a.default.createElement(s.default,{type:"POWER",isBlack:!0,numRows:4,numCols:1}),a.default.createElement(s.default,{type:"IO",isBlack:!1,numRows:4,numCols:2}),a.default.createElement(s.default,{type:"IO",isBlack:!1,numRows:4,numCols:2}),a.default.createElement(s.default,{type:"IO",isBlack:!1,numRows:4,numCols:2}),a.default.createElement(s.default,{type:"IO",isBlack:!1,numRows:4,numCols:2}))}}]),t}(a.default.PureComponent);t.default=p,p.defaultProps={partName:"DI32/1",partNumber:"2702052",mmWidth:53.6,mmHeight:122,terminals:(0,u.defaultTerminals)(12),leds:(0,u.defaultLeds)(12)}}}]);