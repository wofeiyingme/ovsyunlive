webpackJsonp([4],{OjLt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("NYxO"),a=n("PJh5"),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{timer:0,runningTime:""}},computed:r({},(0,i.mapState)(["serverInfo"])),mounted:function(){var t=this;this.timer=setInterval(function(){if(t.serverInfo&&t.serverInfo.StartUpTime){var e=(0,s.default)(t.serverInfo.StartUpTime,"YYYY-MM-DD HH:mm:ss"),n=(0,s.default)(),r=s.default.duration(n.diff(e));t.runningTime=parseInt(r.asDays())+" Days "+r.hours()+" Hours "+r.minutes()+" Mins "+r.seconds()+" Secs"}},1e3)},beforeDestroy:function(){this.timer&&(clearInterval(this.timer),this.timer=0)},methods:{}}},qc3z:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid no-padding"},[n("div",{staticClass:"col-lg-offset-2 col-lg-8 no-padding server-info"},[n("div",{staticClass:"box box-widget"},[t._m(0),t._v(" "),n("div",{staticClass:"box-body table-responsive no-padding"},[n("table",{staticClass:"table table-striped"},[n("tbody",[n("tr",[n("td",{staticStyle:{width:"20%"}},[t._v("硬件信息")]),t._v(" "),n("td",[n("span",{attrs:{id:"hardware-info"}},[t._v(t._s(t.serverInfo.Hardware))])])]),t._v(" "),t._m(1),t._v(" "),n("tr",[n("td",[t._v("运行时间")]),t._v(" "),n("td",[n("span",{attrs:{id:"running-time-info"}},[t._v(t._s(t.runningTime||t.serverInfo.RunningTime))])])]),t._v(" "),t._m(2)])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-header"},[n("h3",[n("i",{staticClass:"fa fa-support"}),t._v(" 版本信息")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("系统版本")]),t._v(" "),n("td",[n("span",{attrs:{id:"interface-info"}},[t._v("V 6.06")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("软件信息")]),t._v(" "),n("td",[n("span",{attrs:{id:"software-info"}},[t._v("版权所有")])])])}]},sZXX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("OjLt"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);var s=n("qc3z"),o=n("XyMi"),u=Object(o.a)(i.a,s.a,s.b,!1,null,null,null);e.default=u.exports}});