(function(){"use strict";var t={3810:function(t,e,o){var n=o(144),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",{staticStyle:{height:"100%"}},[o("v-container",[o("router-view")],1)],1),o("router-view",{attrs:{name:"pageFooter"}})],1)},i=[],r={name:"App",data:()=>({})},s=r,l=o(1001),c=o(3453),u=o.n(c),p=o(7524),d=o(9846),f=o(7877),v=(0,l.Z)(s,a,i,!1,null,null,null),m=v.exports;u()(v,{VApp:p.Z,VContainer:d.Z,VMain:f.Z});var g=o(8345),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-15"},[n("home-bar"),[n("v-carousel",{attrs:{height:"170",cycle:!0},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},[n("v-carousel-item",{attrs:{src:o(4495)}}),n("v-carousel-item",{attrs:{src:o(6779)}}),n("v-carousel-item",{attrs:{src:o(1015)}}),n("v-carousel-item",{attrs:{src:o(5942)}}),n("v-carousel-item",{attrs:{src:o(4947)}})],1)],n("div",{staticClass:"d-flex py-2"},[n("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/list-page"}},[n("div",{staticClass:"link mr-2",on:{click:function(e){return t.$store.commit("setListPageType",{title:"食"})}}},[t._v(" 食 ")])]),n("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/list-page"}},[n("div",{staticClass:"link",on:{click:function(e){return t.$store.commit("setListPageType",{title:"住"})}}},[t._v(" 住 ")])])],1),n("h6",{staticClass:"text-h6 pec-title-bl font-weight-bold my-3"},[t._v("新品上架")]),n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(3126),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(7721),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(7852),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"6"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(2278),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"6"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(58),height:"120",width:"auto"}})],1)],1)],1),n("v-dialog",{attrs:{"overlay-opacity":.8,"max-width":"min(800px, 80vh)",persistent:"",eager:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{staticStyle:{"z-index":"20"},attrs:{absolute:"",top:"",right:"",outlined:"",color:"white",icon:"",elevation:"0"},on:{click:t.closeDialog}},[n("v-icon",[t._v("close")])],1),n("v-img",{staticClass:"white--text text-h4",staticStyle:{cursor:"pointer"},attrs:{"max-width":"min(800px, 80vh)","aspect-ratio":1,src:o(1719)}})],1)],2)},x=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[n("v-img",{attrs:{src:o(9563),height:"30",width:"30","max-width":"30"}}),n("v-icon",{staticClass:"ml-2"},[t._v("map")]),n("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"white",filled:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toSearch()}}},[n("v-icon",[t._v("search")])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/notifications-list"}},[n("v-icon",[t._v("notifications")])],1)],1),n("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-card",{staticClass:"pa-2 d-flex",staticStyle:{height:"auto"},attrs:{outlined:""}},[n("v-icon",{attrs:{size:"80"}},[t._v("account_circle")]),n("div",{staticClass:"ml-2"},[n("div",[t._v("王小明")]),n("div",[t._v("xxxxxxxx")]),n("v-btn",{staticClass:"mt-1",attrs:{outlined:"",small:""},on:{click:function(e){t.dialog=!0}}},[t._v("顯示員工卡片")])],1)],1),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"blue--text text--accent-4"}},t._l(t.list,(function(e,o){return n("v-list-item",{key:o},[n("v-list-item-title",{on:{click:function(o){return t.$store.commit("setListPageType",{title:e.text})}}},[n("router-link",{staticClass:"mx-1 text-decoration-none",staticStyle:{display:"block"},attrs:{to:e.to}},[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1)],1)],1),n("v-dialog",{attrs:{width:"80%","content-class":"overflow"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"pt-6"},[n("v-card-text",{staticClass:"d-flex"},[n("v-icon",{staticStyle:{"margin-left":"-10px"},attrs:{size:"110"}},[t._v("person")]),n("div",[n("p",[t._v("xxxxxxxx")]),n("p",[t._v("王小明")]),n("p",[t._v("oo課")])])],1)],1)],1)],1)},y=[],w=o(629),k={data:()=>({drawer:!1,search:"",dialog:!1}),computed:{...(0,w.rn)(["list"])}},_=k,Z=o(3130),C=o(680),V=o(2371),j=o(7118),P=o(4497),S=o(6428),T=o(7047),F=o(6816),L=o(7620),E=o(7874),O=o(2285),A=o(5132),I=o(1347),B=(0,l.Z)(_,b,y,!1,null,"c0d661b8",null),D=B.exports;u()(B,{VAppBar:Z.Z,VBtn:C.Z,VCard:V.Z,VCardText:j.ZB,VDialog:P.Z,VIcon:S.Z,VImg:T.Z,VList:F.Z,VListItem:L.Z,VListItemGroup:E.Z,VListItemTitle:O.V9,VNavigationDrawer:A.Z,VTextField:I.Z});var N={name:"Home",components:{HomeBar:D},mounted(){this.$nextTick((()=>{localStorage.getItem("popupClose")?this.dialog=!1:this.dialog=!0}))},data:()=>({carousel:0,carousels:[{src:"../assets/coffee-1.jpg"},{src:"../assets/coffee-2.jpg"},{src:"../assets/coffee-3.jpg"},{src:"../assets/coffee-4.jpg"},{src:"../assets/coffee-5.jpg"}],dialog:!1}),computed:{...(0,w.rn)(["list"])},methods:{toSearch(){},closeDialog(){this.dialog=!1,localStorage.setItem("popupClose",!0)}}},$=N,z=o(8646),M=o(4062),H=o(2102),q=o(2877),G=(0,l.Z)($,h,x,!1,null,"455f99a0",null),K=G.exports;u()(G,{VBtn:C.Z,VCarousel:z.Z,VCarouselItem:M.Z,VCol:H.Z,VDialog:P.Z,VIcon:S.Z,VImg:T.Z,VRow:q.Z});var R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-bottom-navigation",{attrs:{app:"",color:"info",grow:"","hide-on-scroll":""}},[o("v-btn",{attrs:{text:"",to:"/home"}},[o("span",[t._v("首頁")]),o("v-icon",[t._v("home")])],1),o("v-btn",{attrs:{text:"",to:"/schedule-list"}},[o("span",[t._v("檔期列表")]),o("v-icon",[t._v("list")])],1),o("v-btn",{attrs:{text:"",to:"/my-page"}},[o("span",[t._v("我的")]),o("v-icon",[t._v("person")])],1),o("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!0}}},[o("span",[t._v("員工證")]),o("v-icon",[t._v("badge")])],1)],1),o("v-dialog",{attrs:{width:"80%","content-class":"overflow"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{staticClass:"pt-6"},[o("v-card-text",{staticClass:"d-flex"},[o("v-icon",{staticStyle:{"margin-left":"-10px"},attrs:{size:"110"}},[t._v("person")]),o("div",[o("p",[t._v("xxxxxxxx")]),o("p",[t._v("王小明")]),o("p",[t._v("oo課")])])],1)],1)],1)],1)},U=[],J={data(){return{dialog:!1}}},Q=J,W=o(7937),X=(0,l.Z)(Q,R,U,!1,null,"16164c86",null),Y=X.exports;u()(X,{VBottomNavigation:W.Z,VBtn:C.Z,VCard:V.Z,VCardText:j.ZB,VDialog:P.Z,VIcon:S.Z}),n.Z.use(g.Z);const tt=[{path:"/home",name:"home",components:{default:K,pageFooter:Y}},{path:"/",name:"login",components:{default:()=>o.e(457).then(o.bind(o,7457))}},{path:"/list-page",name:"list-page",components:{default:()=>Promise.all([o.e(400),o.e(894)]).then(o.bind(o,1026)),pageFooter:Y}},{path:"/schedule-list",name:"schedule-list",components:{default:()=>Promise.all([o.e(400),o.e(341)]).then(o.bind(o,7149)),pageFooter:Y}},{path:"/fav",name:"fav",components:{default:()=>Promise.all([o.e(400),o.e(837)]).then(o.bind(o,4012)),pageFooter:Y}},{path:"/schedule-detail",name:"schedule-detail",components:{default:()=>Promise.all([o.e(400),o.e(159)]).then(o.bind(o,3805)),pageFooter:Y}},{path:"/user-info",name:"user-info",components:{default:()=>Promise.all([o.e(400),o.e(991)]).then(o.bind(o,8082)),pageFooter:Y}},{path:"/my-coupon",name:"my-coupon",components:{default:()=>Promise.all([o.e(400),o.e(175)]).then(o.bind(o,763)),pageFooter:Y}},{path:"/notifications-list",name:"notifications-list",components:{default:()=>Promise.all([o.e(400),o.e(476)]).then(o.bind(o,1107)),pageFooter:Y}},{path:"/my-page",name:"my-page",components:{default:()=>Promise.all([o.e(400),o.e(910)]).then(o.bind(o,1762)),pageFooter:Y}}],et=new g.Z({mode:"history",base:"/eps/",routes:tt});var ot=et;n.Z.use(w.ZP);var nt=new w.ZP.Store({state:{list:[{text:"食",to:"/list-page"},{text:"住",to:"/list-page"},{text:"我的禮券",to:"/my-coupon"},{text:"我的最愛",to:"/fav"},{text:"檔期列表",to:"/schedule-list"},{text:"個人資料",to:"/user-info"}],listPageType:"",favList:[]},getters:{},mutations:{setListPageType(t,e){t.listPageType=e.title},setFav(t,e){t.favList.push(e.list),console.log(t.favList)}},actions:{},modules:{}}),at=o(9132);n.Z.use(at.Z);var it=new at.Z({});n.Z.config.productionTip=!1,new n.Z({router:ot,store:nt,vuetify:it,render:t=>t(m)}).$mount("#app")},7852:function(t,e,o){t.exports=o.p+"img/chrismas.b7a2d0f3.jpg"},4495:function(t,e,o){t.exports=o.p+"img/coffee-1.ab4b6887.jpg"},6779:function(t,e,o){t.exports=o.p+"img/coffee-2.71cd7487.jpg"},1015:function(t,e,o){t.exports=o.p+"img/coffee-3.e6990572.jpg"},5942:function(t,e,o){t.exports=o.p+"img/coffee-4.73379394.jpg"},4947:function(t,e,o){t.exports=o.p+"img/coffee-5.42140eaa.jpg"},1719:function(t,e,o){t.exports=o.p+"img/coffee.781d64a8.jpg"},9563:function(t,e,o){t.exports=o.p+"img/e-unsplash-small.fbdc89b6.jpg"},3126:function(t,e,o){t.exports=o.p+"img/flower.1f567294.jpg"},58:function(t,e,o){t.exports=o.p+"img/halloween.6e1dc446.jpg"},7721:function(t,e,o){t.exports=o.p+"img/mother.d04676ba.jpg"},2278:function(t,e,o){t.exports=o.p+"img/pumpkin.601308b5.jpg"}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,i){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+t+"."+{159:"902c26b3",175:"6c83a584",341:"d9f6f975",400:"1c20cd83",457:"08c35380",476:"f3f9733e",837:"ddbead8e",894:"727f98d6",910:"7eb31af7",991:"68ed2513"}[t]+".js"}}(),function(){o.miniCssF=function(t){return"css/"+t+"."+{159:"049661c8",175:"977123af",341:"977123af",457:"ea01d06d",476:"977123af",837:"977123af",894:"977123af",910:"a89a4ee6",991:"e2e62973"}[t]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="eps:";o.l=function(n,a,i,r){if(t[n])t[n].push(a);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+i){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+i),s.src=n),t[n]=[a];var d=function(e,o){s.onerror=s.onload=null,clearTimeout(f);var a=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/eps/"}(),function(){var t=function(t,e,o,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)o();else{var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,a.parentNode.removeChild(a),n(l)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var a=o[n],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){a=r[n],i=a.getAttribute("data-href");if(i===t||i===e)return a}},n=function(n){return new Promise((function(a,i){var r=o.miniCssF(n),s=o.p+r;if(e(r,s))return a();t(n,s,a,i)}))},a={143:0};o.f.miniCss=function(t,e){var o={159:1,175:1,341:1,457:1,476:1,837:1,894:1,910:1,991:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};o.f.j=function(e,n){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(o,n){a=t[e]=[o,n]}));n.push(a[2]=i);var r=o.p+o.u(e),s=new Error,l=function(n){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};o.l(r,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(e&&e(n);c<r.length;c++)i=r[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},n=self["webpackChunkeps"]=self["webpackChunkeps"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3810)}));n=o.O(n)})();
//# sourceMappingURL=app.a6f5ac68.js.map