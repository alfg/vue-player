(function(e){function t(t){for(var n,l,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)l=s[p],a[l]&&d.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-player/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"0a0b":function(e,t,r){},"160f":function(e,t,r){},"42b7":function(e,t,r){},"46e7":function(e,t,r){"use strict";var n=r("cf87"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("Player"),r("Footer")],1)},o=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("h1",[e._v("vue-player")])])}],i={name:"Header"},u=i,c=(r("a300"),r("2877")),p=Object(c["a"])(u,l,s,!1,null,"7f8cf9ca",null),d=p.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"player container"},[r("video",{ref:"video",attrs:{controls:e.controls,autoPlay:e.autoplay}}),r("label",[e._v("Media URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],staticClass:"u-full-width",attrs:{type:"text"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value)}}}),r("label",[e._v("License Server URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.licenseUrl,expression:"licenseUrl"}],staticClass:"u-full-width",attrs:{type:"text"},domProps:{value:e.licenseUrl},on:{input:function(t){t.target.composing||(e.licenseUrl=t.target.value)}}}),r("label",{attrs:{for:"drm"}},[e._v("DRM")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.drm,expression:"drm"}],staticClass:"u-full-width",attrs:{id:"drm"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.drm=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"none"}},[e._v("None")]),r("option",{attrs:{value:"widevine"}},[e._v("Widevine")]),r("option",{attrs:{value:"playready"}},[e._v("PlayReady")])]),r("div",{staticClass:"control-buttons"},[r("button",{staticClass:"button-primary",on:{click:e.load}},[e._v("Load Media")]),r("button",{on:{click:e.stop}},[e._v("Stop")])])])},m=[],v=r("446e"),h=r.n(v),y={defaultUrl:"https://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel-dash-widevine.ism/.mpd",defaultLicenseUrl:"https://widevine-proxy.appspot.com/proxy",defaultDrm:"widevine",videoItems:[{name:"Tears of Steel (DASH Clear)",url:"https://storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd"},{name:"Tears of Steel (DASH Clear) 2",url:"https://storage.googleapis.com/shaka-demo-assets/tos-ttml/dash.mpd2"},{name:"Angel One (multicodec, multilingual)",url:"https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"},{name:"Angel One (multicodec, multilingual, Widevine)",url:"https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd"},{name:"Sintel 4k (multicodec)",url:"https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd"},{name:"Big Buck Bunny",url:"https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd"}],licenseServers:{"com.microsoft.playready":"https://test.playready.microsoft.com/service/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1","com.widevine.alpha":"https://cwip-shaka-proxy.appspot.com/no_auth"}},g=y,b=(r("160f"),r("42b7"),r("0a0b"),g.defaultUrl),_=g.defaultLicenseUrl,w=g.defaultDrm,P={name:"Player",props:{},data:function(){return{player:null,autoplay:!0,controls:!0,url:b,licenseUrl:_,drm:w}},mounted:function(){this.setQueryParams(),this.init()},methods:{setQueryParams:function(){this.$route.query.url&&(this.url=this.$route.query.url),this.$route.query.licenseUrl&&(this.licenseUrl=this.$route.query.licenseUrl),this.$route.query.drm&&(this.drm=this.$route.query.drm.toLowerCase())},init:function(){h.a.polyfill.installAll();var e=this.$refs.video;this.player=new h.a.Player(e),this.player.configure({drm:{servers:g.licenseServers}})},load:function(){this.player.load(this.url).then(function(){console.log("video loaded")}).catch(function(e){console.log(e)})},stop:function(){},setProtection:function(){this.player.configure({drm:{servers:g.licenseServers}})}}},x=P,O=(r("46e7"),Object(c["a"])(x,f,m,!1,null,"55007459",null)),S=O.exports,U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("ul",[r("li",[e._v("View the source on\n      "),r("a",{attrs:{href:"http://github.com/alfg/vue-player"}},[e._v("Github")])])])])}],k={name:"Footer"},j=k,C=(r("5761"),Object(c["a"])(j,U,$,!1,null,"33db225c",null)),L=C.exports,M={name:"app",components:{Header:d,Player:S,Footer:L}},q=M,E=(r("034f"),Object(c["a"])(q,a,o,!1,null,null,null)),A=E.exports,R=r("8c4f"),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Player")],1)},D=[],H={name:"home",components:{Player:S}},N=H,B=Object(c["a"])(N,T,D,!1,null,null,null),F=B.exports;n["a"].use(R["a"]);var J=new R["a"]({routes:[{path:"/",name:"home",component:F}]});n["a"].config.productionTip=!1,new n["a"]({router:J,render:function(e){return e(A)}}).$mount("#app")},5761:function(e,t,r){"use strict";var n=r("91f4"),a=r.n(n);a.a},"64a9":function(e,t,r){},"91f4":function(e,t,r){},a300:function(e,t,r){"use strict";var n=r("a4f5"),a=r.n(n);a.a},a4f5:function(e,t,r){},cf87:function(e,t,r){}});
//# sourceMappingURL=app.e88712b3.js.map