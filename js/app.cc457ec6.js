(function(){"use strict";var t={5336:function(t,e,n){var o=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticStyle:{height:"100%"}},[n("v-container",[n("router-view")],1)],1),n("router-view",{attrs:{name:"pageFooter"}})],1)},i=[],r={name:"App",data:()=>({})},s=r,c=n(1001),l=n(3453),u=n.n(l),d=n(7524),f=n(9846),p=n(7877),v=(0,c.Z)(s,a,i,!1,null,null,null),m=v.exports;u()(v,{VApp:d.Z,VContainer:f.Z,VMain:p.Z});var g=n(8345),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mt-15"},[o("home-bar"),[o("v-carousel",{attrs:{height:"170",cycle:!0},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},t._l(t.carousels,(function(t,e){return o("v-carousel-item",{key:e,attrs:{src:t.src}})})),1)],o("div",{staticClass:"d-flex py-2"},[o("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/list-page"}},[o("div",{staticClass:"link mr-2",on:{click:function(e){return t.$store.commit("setListPageType",{title:"食"})}}},[t._v(" 食 ")])]),o("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/list-page"}},[o("div",{staticClass:"link",on:{click:function(e){return t.$store.commit("setListPageType",{title:"住"})}}},[t._v(" 住 ")])])],1),o("v-row",{attrs:{dense:""}},[o("v-col",{attrs:{cols:"4"}},[o("v-img",{attrs:{src:n(3126),height:"120",width:"auto"}})],1),o("v-col",{attrs:{cols:"4"}},[o("v-img",{attrs:{src:n(7721),height:"120",width:"auto"}})],1),o("v-col",{attrs:{cols:"4"}},[o("v-img",{attrs:{src:n(7852),height:"120",width:"auto"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-img",{attrs:{src:n(2278),height:"120",width:"auto"}})],1),o("v-col",{attrs:{cols:"6"}},[o("v-img",{attrs:{src:n(58),height:"120",width:"auto"}})],1)],1),o("v-dialog",{attrs:{"overlay-opacity":.8,"max-width":"min(800px, 80vh)",persistent:"",eager:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-btn",{staticStyle:{"z-index":"20"},attrs:{absolute:"",top:"",right:"",outlined:"",color:"white",icon:"",elevation:"0"},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("close")])],1),o("v-img",{staticClass:"white--text text-h4",staticStyle:{cursor:"pointer"},attrs:{"max-width":"min(800px, 80vh)","aspect-ratio":1,src:n(1719)}})],1)],2)},x=[],b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[o("v-icon",{on:{click:function(e){t.drawer=!0}}},[t._v("menu")]),o("v-img",{staticClass:"ml-2",attrs:{src:n(9563),height:"30",width:"30","max-width":"30"}}),o("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"white",filled:""},scopedSlots:t._u([{key:"append",fn:function(){return[o("div",{on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toSearch()}}},[o("v-icon",[t._v("search")])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),o("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/notifications-list"}},[o("v-icon",[t._v("notifications")])],1)],1),o("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-card",{staticClass:"pa-2 d-flex",staticStyle:{height:"auto"},attrs:{outlined:""}},[o("v-icon",{attrs:{size:"80"}},[t._v("account_circle")]),o("div",{staticClass:"ml-2"},[o("div",[t._v("王小明")]),o("div",[t._v("xxxxxxxx")]),o("v-btn",{staticClass:"mt-1",attrs:{outlined:"",small:""},on:{click:function(e){t.dialog=!0}}},[t._v("顯示員工卡片")])],1)],1),o("v-list",{attrs:{nav:"",dense:""}},[o("v-list-item-group",{attrs:{"active-class":"blue--text text--accent-4"}},t._l(t.list,(function(e,n){return o("v-list-item",{key:n},[o("v-list-item-title",{on:{click:function(n){return t.$store.commit("setListPageType",{title:e.text})}}},[o("router-link",{staticClass:"mx-1 text-decoration-none",staticStyle:{display:"block"},attrs:{to:e.to}},[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)],1),o("v-dialog",{attrs:{width:"80%","content-class":"overflow"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{staticClass:"pt-6"},[o("v-card-text",{staticClass:"d-flex"},[o("v-icon",{staticStyle:{"margin-left":"-10px"},attrs:{size:"110"}},[t._v("person")]),o("div",[o("p",[t._v("xxxxxxxx")]),o("p",[t._v("王小明")]),o("p",[t._v("oo課")])])],1)],1)],1)],1)},y=[],w=n(629),_={data:()=>({drawer:!1,search:"",dialog:!1}),computed:{...(0,w.rn)(["list"])}},k=_,Z=n(4143),C=n(680),V=n(2371),j=n(7118),T=n(4497),S=n(6428),L=n(7047),P=n(6816),E=n(7620),F=n(7874),O=n(2285),A=n(6724),B=n(1347),I=(0,c.Z)(k,b,y,!1,null,"33247f94",null),N=I.exports;u()(I,{VAppBar:Z.Z,VBtn:C.Z,VCard:V.Z,VCardText:j.ZB,VDialog:T.Z,VIcon:S.Z,VImg:L.Z,VList:P.Z,VListItem:E.Z,VListItemGroup:F.Z,VListItemTitle:O.V9,VNavigationDrawer:A.Z,VTextField:B.Z});var $={name:"Home",components:{HomeBar:N},mounted(){this.$nextTick((()=>{this.dialog=!0}))},data:()=>({carousel:0,carousels:[{src:".~src/assets/coffee-1.jpg"},{src:"../assets/coffee-2.jpg"},{src:"../assets/coffee-3.jpg"},{src:"../assets/coffee-4.jpg"},{src:"../assets/coffee-5.jpg"}],dialog:!1}),computed:{...(0,w.rn)(["list"])},methods:{toSearch(){}}},D=$,z=n(8646),M=n(4062),H=n(2102),q=n(2877),G=(0,c.Z)(D,h,x,!1,null,"a6fbe178",null),K=G.exports;u()(G,{VBtn:C.Z,VCarousel:z.Z,VCarouselItem:M.Z,VCol:H.Z,VDialog:T.Z,VIcon:S.Z,VImg:L.Z,VRow:q.Z});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-bottom-navigation",{attrs:{app:"",color:"info",grow:"","hide-on-scroll":""}},[n("v-btn",{attrs:{text:"",to:"/"}},[n("span",[t._v("首頁")]),n("v-icon",[t._v("home")])],1),n("v-btn",{attrs:{text:"",to:"/schedule-list"}},[n("span",[t._v("檔期列表")]),n("v-icon",[t._v("list")])],1),n("v-btn",{attrs:{text:"",to:"/fav"}},[n("span",[t._v("我的最愛")]),n("v-icon",[t._v("favorite")])],1),n("v-btn",{attrs:{text:"",to:"/my-coupon"}},[n("span",[t._v("我的禮券")]),n("v-icon",[t._v("confirmation_number")])],1),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!0}}},[n("span",[t._v("員工證")]),n("v-icon",[t._v("badge")])],1)],1),n("v-dialog",{attrs:{width:"80%","content-class":"overflow"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"pt-6"},[n("v-card-text",{staticClass:"d-flex"},[n("v-icon",{staticStyle:{"margin-left":"-10px"},attrs:{size:"110"}},[t._v("person")]),n("div",[n("p",[t._v("xxxxxxxx")]),n("p",[t._v("王小明")]),n("p",[t._v("oo課")])])],1)],1)],1)],1)},U=[],J={data(){return{dialog:!1}}},Q=J,W=n(7937),X=(0,c.Z)(Q,R,U,!1,null,"07961c6e",null),Y=X.exports;u()(X,{VBottomNavigation:W.Z,VBtn:C.Z,VCard:V.Z,VCardText:j.ZB,VDialog:T.Z,VIcon:S.Z}),o.Z.use(g.Z);const tt=[{path:"/",name:"home",components:{default:K,pageFooter:Y}},{path:"/login",name:"login",components:{default:()=>n.e(297).then(n.bind(n,9297))}},{path:"/list-page",name:"list-page",components:{default:()=>n.e(181).then(n.bind(n,3181)),pageFooter:Y}},{path:"/schedule-list",name:"schedule-list",components:{default:()=>n.e(149).then(n.bind(n,7149)),pageFooter:Y}},{path:"/fav",name:"fav",components:{default:()=>n.e(12).then(n.bind(n,4012)),pageFooter:Y}},{path:"/schedule-detail",name:"schedule-detail",components:{default:()=>n.e(682).then(n.bind(n,7682)),pageFooter:Y}},{path:"/user-info",name:"user-info",components:{default:()=>n.e(374).then(n.bind(n,5374)),pageFooter:Y}},{path:"/my-coupon",name:"my-coupon",components:{default:()=>n.e(692).then(n.bind(n,2692)),pageFooter:Y}},{path:"/notifications-list",name:"notifications-list",components:{default:()=>n.e(107).then(n.bind(n,1107)),pageFooter:Y}}],et=new g.Z({mode:"history",base:"/eps/",routes:tt});var nt=et;o.Z.use(w.ZP);var ot=new w.ZP.Store({state:{list:[{text:"食",to:"/list-page"},{text:"我的禮券",to:"/my-coupon"},{text:"住",to:"/list-page"},{text:"我的最愛",to:"/fav"},{text:"檔期列表",to:"/schedule-list"},{text:"個人資料",to:"/user-info"}],listPageType:"",favList:[]},getters:{},mutations:{setListPageType(t,e){t.listPageType=e.title},setFav(t,e){t.favList.push(e.list),console.log(t.favList)}},actions:{},modules:{}}),at=n(9132);o.Z.use(at.Z);var it=new at.Z({});o.Z.config.productionTip=!1,new o.Z({router:nt,store:ot,vuetify:it,render:t=>t(m)}).$mount("#app")},7852:function(t,e,n){t.exports=n.p+"img/chrismas.b7a2d0f3.jpg"},1719:function(t,e,n){t.exports=n.p+"img/coffee.781d64a8.jpg"},9563:function(t,e,n){t.exports=n.p+"img/e-unsplash-small.fbdc89b6.jpg"},3126:function(t,e,n){t.exports=n.p+"img/flower.1f567294.jpg"},58:function(t,e,n){t.exports=n.p+"img/halloween.6e1dc446.jpg"},7721:function(t,e,n){t.exports=n.p+"img/mother.d04676ba.jpg"},2278:function(t,e,n){t.exports=n.p+"img/pumpkin.601308b5.jpg"}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{12:"ac891d65",107:"d944ee2e",149:"6f3be31d",181:"005dba22",297:"a716e424",374:"758516bf",682:"dce479d5",692:"72227b0f"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{12:"fa85ad16",107:"fa85ad16",149:"fa85ad16",181:"fa85ad16",297:"d8e7252e",374:"339a8ad3",682:"afcb868b",692:"7b260e77"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="eps:";n.l=function(o,a,i,r){if(t[o])t[o].push(a);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=o),t[o]=[a];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var a=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/eps/"}(),function(){var t=function(t,e,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===t||i===e)return a}},o=function(o){return new Promise((function(a,i){var r=n.miniCssF(o),s=n.p+r;if(e(r,s))return a();t(o,s,a,i)}))},a={143:0};n.f.miniCss=function(t,e){var n={12:1,107:1,149:1,181:1,297:1,374:1,682:1,692:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=o(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=t[e]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(e&&e(o);l<r.length;l++)i=r[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkeps"]=self["webpackChunkeps"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5336)}));o=n.O(o)})();
//# sourceMappingURL=app.cc457ec6.js.map