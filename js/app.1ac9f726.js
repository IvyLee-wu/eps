(function(){"use strict";var t={7854:function(t,e,o){var n=o(144),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",{staticStyle:{height:"100%"}},[o("v-container",[o("router-view")],1)],1),o("router-view",{attrs:{name:"pageFooter"}})],1)},i=[],s={name:"App",data:()=>({})},r=s,l=o(1001),c=o(3453),d=o.n(c),u=o(7524),p=o(9846),f=o(7877),m=(0,l.Z)(r,a,i,!1,null,null,null),v=m.exports;d()(m,{VApp:u.Z,VContainer:p.Z,VMain:f.Z});var g=o(8345),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-15"},[n("home-bar"),[n("v-carousel",{attrs:{height:"170",cycle:!0},model:{value:t.carousel,callback:function(e){t.carousel=e},expression:"carousel"}},[n("v-carousel-item",{attrs:{src:o(4495)}}),n("v-carousel-item",{attrs:{src:o(6779)}}),n("v-carousel-item",{attrs:{src:o(1015)}}),n("v-carousel-item",{attrs:{src:o(5942)}}),n("v-carousel-item",{attrs:{src:o(4947)}})],1)],n("div",{staticClass:"d-flex py-2"},[n("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/list-page-food"}},[n("div",{staticClass:"link mr-2",on:{click:function(e){return t.$store.commit("setListPageType",{title:"食"})}}},[t._v(" 食 ")])]),n("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/list-page-hotel"}},[n("div",{staticClass:"link",on:{click:function(e){return t.$store.commit("setListPageType",{title:"住"})}}},[t._v(" 住 ")])])],1),n("h6",{staticClass:"text-h6 pec-title-bl font-weight-bold my-3"},[t._v("最新店家")]),n("div",{staticStyle:{width:"100%",overflow:"hidden"}},[n("v-row",{staticStyle:{width:"125%",overflow:"hidden"},attrs:{dense:""}},[n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/schedule-detail"}},[n("v-img",{attrs:{src:o(3126),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/schedule-detail"}},[n("v-img",{attrs:{src:o(7721),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(7852),height:"120",width:"auto"}})],1)],1)],1)],1),n("h6",{staticClass:"text-h6 pec-title-bl font-weight-bold my-3"},[t._v("熱門店家")]),n("div",{staticStyle:{width:"100%",overflow:"hidden"}},[n("v-row",{staticStyle:{width:"125%",overflow:"hidden"},attrs:{dense:""}},[n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(2278),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(58),height:"120",width:"auto"}})],1)],1),n("v-col",{attrs:{cols:"4"}},[n("router-link",{attrs:{to:"/list-page"}},[n("v-img",{attrs:{src:o(3126),height:"120",width:"auto"}})],1)],1)],1)],1),n("v-dialog",{attrs:{"overlay-opacity":.8,"max-width":"min(800px, 80vh)",persistent:"",eager:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{staticStyle:{"z-index":"20"},attrs:{absolute:"",top:"",right:"",outlined:"",color:"white",icon:"",elevation:"0"},on:{click:t.closeDialog}},[n("v-icon",[t._v("close")])],1),n("v-img",{staticClass:"white--text text-h4",staticStyle:{cursor:"pointer"},attrs:{"max-width":"min(800px, 80vh)","aspect-ratio":1,src:o(1719)}})],1)],2)},b=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticStyle:{width:"100%"},attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[n("v-img",{attrs:{src:o(9563),height:"30",width:"30","max-width":"30"}}),n("v-icon",{staticClass:"ml-2",on:{click:function(e){t.mapDialog=!0}}},[t._v("map")]),n("v-text-field",{staticClass:"mx-2",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"white",filled:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",{on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toSearch()}}},[n("v-icon",[t._v("search")])],1)]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("router-link",{staticClass:"text-decoration-none d-block",attrs:{to:"/notifications-list"}},[n("v-icon",[t._v("notifications")])],1)],1),n("v-dialog",{attrs:{width:"80%","content-class":"overflow"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"pt-6"},[n("v-card-text",{staticClass:"d-flex"},[n("v-icon",{staticStyle:{"margin-left":"-10px"},attrs:{size:"110"}},[t._v("person")]),n("div",[n("p",[t._v("xxxxxxxx")]),n("p",[t._v("王小明")]),n("p",[t._v("oo課")])])],1)],1)],1),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.mapDialog,callback:function(e){t.mapDialog=e},expression:"mapDialog"}},[n("v-card",[n("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[n("router-link",{attrs:{to:"/home"}},[n("v-img",{staticClass:"ml-2",attrs:{src:o(9563),height:"30",width:"30","max-width":"30"}})],1),n("v-icon",{staticClass:"ml-2",on:{click:function(e){t.mapDialog=!0}}},[t._v("map")]),n("v-spacer"),n("span",[t._v(t._s(t.title||t.listPageType))]),n("v-spacer"),n("v-toolbar-items",[n("v-icon",{attrs:{dark:"",text:""},on:{click:t.setCities}},[t._v(" close ")])],1)],1),n("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[n("v-list",t._l(t.cities,(function(e,o){return n("v-list-item",{key:o},[n("v-list-item-content",{on:{click:function(o){return t.addCity(e)}}},[n("span",[t._v(t._s(e.name))])]),e.selected?n("v-list-item-icon",[n("v-icon",[t._v("check")])],1):t._e()],1)})),1)],1)],1)],1)],1)},y=[],w=o(629),k={props:{title:{type:String,default:""}},data:()=>({drawer:!1,search:"",dialog:!1,mapDialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}),mounted(){let t=JSON.parse(localStorage.getItem("selectCities"));t&&t.length&&(this.cities=t)},computed:{...(0,w.rn)(["list","listPageType"])},methods:{setCities(){this.mapDialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity(t){console.log(t),this.cities.map((e=>(e.name===t.name&&(e.selected=!e.selected),e)))}}},C=k,_=o(3130),Z=o(3237),V=o(7118),S=o(2912),j=o(6428),T=o(7047),F=o(6816),I=o(7620),O=o(5398),P=o(459),E=o(9762),D=o(5337),L=o(7921),A=(0,l.Z)(C,x,y,!1,null,"2368df08",null),B=A.exports;d()(A,{VAppBar:_.Z,VCard:Z.Z,VCardText:V.ZB,VContainer:p.Z,VDialog:S.Z,VIcon:j.Z,VImg:T.Z,VList:F.Z,VListItem:I.Z,VListItemContent:O.km,VListItemIcon:P.Z,VSpacer:E.Z,VTextField:D.Z,VToolbarItems:L.lj});var N={name:"Home",components:{HomeBar:B},mounted(){this.$nextTick((()=>{localStorage.getItem("popupClose")?this.dialog=!1:this.dialog=!0}))},data:()=>({carousel:0,carousels:[{src:"../assets/coffee-1.jpg"},{src:"../assets/coffee-2.jpg"},{src:"../assets/coffee-3.jpg"},{src:"../assets/coffee-4.jpg"},{src:"../assets/coffee-5.jpg"}],dialog:!1}),computed:{...(0,w.rn)(["list"])},methods:{toSearch(){},closeDialog(){this.dialog=!1,localStorage.setItem("popupClose",!0)}}},$=N,M=o(680),z=o(5331),H=o(4062),q=o(2102),J=o(2877),K=(0,l.Z)($,h,b,!1,null,"6c44a4aa",null),R=K.exports;d()(K,{VBtn:M.Z,VCarousel:z.Z,VCarouselItem:H.Z,VCol:q.Z,VDialog:S.Z,VIcon:j.Z,VImg:T.Z,VRow:J.Z});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-bottom-navigation",{attrs:{app:"",color:"info",grow:""}},[n("v-btn",{attrs:{text:"",to:"/home"}},[n("span",[t._v("首頁")]),n("v-icon",[t._v("home")])],1),n("v-btn",{attrs:{text:"",to:"/list-page-all"}},[n("span",[t._v("附近店家")]),n("v-icon",[t._v("list")])],1),n("v-btn",{attrs:{text:"",to:"/my-page"}},[n("span",[t._v("我的")]),n("v-icon",[t._v("person")])],1),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!0}}},[n("span",[t._v("員工證")]),n("v-icon",[t._v("badge")])],1)],1),n("v-dialog",{attrs:{"max-width":"500px","content-class":"overflow"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("v-img",{attrs:{src:o(810),width:"100%",contain:""}})],1),n("v-card-text",{staticClass:"d-flex"},[n("v-icon",{staticStyle:{"margin-left":"-10px"},attrs:{size:"110"}},[t._v("person")]),n("div",[n("p",[t._v("公司名稱：統一夢公園")]),n("p",[t._v("姓名：王小明")]),n("p",[t._v("簽約代號：xxxxxxxx")])])],1)],1)],1)],1)},G=[],Q={data(){return{dialog:!1}}},W=Q,X=o(7937),Y=(0,l.Z)(W,U,G,!1,null,"440207c1",null),tt=Y.exports;d()(Y,{VBottomNavigation:X.Z,VBtn:M.Z,VCard:Z.Z,VCardText:V.ZB,VCardTitle:V.EB,VDialog:S.Z,VIcon:j.Z,VImg:T.Z}),n.Z.use(g.Z);const et=[{path:"/home",name:"home",components:{default:R,pageFooter:tt}},{path:"/",name:"login",components:{default:()=>o.e(457).then(o.bind(o,7457))}},{path:"/list-page",name:"list-page",components:{default:()=>o.e(287).then(o.bind(o,2287)),pageFooter:tt}},{path:"/list-page-food",name:"list-page-food",components:{default:()=>o.e(287).then(o.bind(o,2287)),pageFooter:tt}},{path:"/list-page-all",name:"list-page-all",components:{default:()=>o.e(98).then(o.bind(o,8098)),pageFooter:tt}},{path:"/list-page-hotel",name:"list-page-hotel",components:{default:()=>o.e(521).then(o.bind(o,6521)),pageFooter:tt}},{path:"/schedule-list",name:"schedule-list",components:{default:()=>o.e(899).then(o.bind(o,3899)),pageFooter:tt}},{path:"/fav",name:"fav",components:{default:()=>o.e(12).then(o.bind(o,4012)),pageFooter:tt}},{path:"/schedule-detail",name:"schedule-detail",components:{default:()=>o.e(780).then(o.bind(o,1780)),pageFooter:tt}},{path:"/user-info",name:"user-info",components:{default:()=>o.e(842).then(o.bind(o,842)),pageFooter:tt}},{path:"/my-coupon",name:"my-coupon",components:{default:()=>o.e(692).then(o.bind(o,2692)),pageFooter:tt}},{path:"/notifications-list",name:"notifications-list",components:{default:()=>o.e(107).then(o.bind(o,1107)),pageFooter:tt}},{path:"/my-page",name:"my-page",components:{default:()=>o.e(762).then(o.bind(o,1762)),pageFooter:tt}}],ot=new g.Z({mode:"history",base:"/eps/",routes:et});var nt=ot;n.Z.use(w.ZP);var at=new w.ZP.Store({state:{list:[{text:"食",to:"/list-page"},{text:"住",to:"/list-page"},{text:"我的禮券",to:"/my-coupon"},{text:"我的最愛",to:"/fav"},{text:"附近店家",to:"/list-page"},{text:"個人資料",to:"/user-info"}],listPageType:"",favList:[]},getters:{},mutations:{setListPageType(t,e){t.listPageType=e.title},setFav(t,e){t.favList.push(e.list),console.log(t.favList)}},actions:{},modules:{}}),it=o(1910);n.Z.use(it.Z);var st=new it.Z({});n.Z.config.productionTip=!1,new n.Z({router:nt,store:at,vuetify:st,render:t=>t(v)}).$mount("#app")},7852:function(t,e,o){t.exports=o.p+"img/chrismas.b7a2d0f3.jpg"},4495:function(t,e,o){t.exports=o.p+"img/coffee-1.ab4b6887.jpg"},6779:function(t,e,o){t.exports=o.p+"img/coffee-2.71cd7487.jpg"},1015:function(t,e,o){t.exports=o.p+"img/coffee-3.e6990572.jpg"},5942:function(t,e,o){t.exports=o.p+"img/coffee-4.73379394.jpg"},4947:function(t,e,o){t.exports=o.p+"img/coffee-5.42140eaa.jpg"},1719:function(t,e,o){t.exports=o.p+"img/coffee.781d64a8.jpg"},810:function(t,e,o){t.exports=o.p+"img/company-logo.f9addb38.png"},9563:function(t,e,o){t.exports=o.p+"img/e-unsplash-small.fbdc89b6.jpg"},3126:function(t,e,o){t.exports=o.p+"img/flower.1f567294.jpg"},58:function(t,e,o){t.exports=o.p+"img/halloween.6e1dc446.jpg"},7721:function(t,e,o){t.exports=o.p+"img/mother.d04676ba.jpg"},2278:function(t,e,o){t.exports=o.p+"img/pumpkin.601308b5.jpg"}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,i){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],a=t[d][1],i=t[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,a,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+t+"."+{12:"1c8b058e",98:"1c8e25f8",107:"52c6a3e4",287:"a01592e0",457:"08c35380",521:"cd9458c5",692:"cafb19db",762:"b6b922e4",780:"314debe5",842:"ae245cec",899:"471c367c"}[t]+".js"}}(),function(){o.miniCssF=function(t){return"css/"+t+"."+{12:"066bbd4d",98:"066bbd4d",107:"066bbd4d",287:"066bbd4d",457:"ea01d06d",521:"066bbd4d",692:"9ec0a3b8",762:"8f17d657",780:"d8f9f646",842:"066bbd4d",899:"066bbd4d"}[t]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="eps:";o.l=function(n,a,i,s){if(t[n])t[n].push(a);else{var r,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+i){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",e+i),r.src=n),t[n]=[a];var p=function(e,o){r.onerror=r.onload=null,clearTimeout(f);var a=t[n];if(delete t[n],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/eps/"}(),function(){var t=function(t,e,o,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)o();else{var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=r,a.parentNode.removeChild(a),n(l)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var a=o[n],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],i=a.getAttribute("data-href");if(i===t||i===e)return a}},n=function(n){return new Promise((function(a,i){var s=o.miniCssF(n),r=o.p+s;if(e(s,r))return a();t(n,r,a,i)}))},a={143:0};o.f.miniCss=function(t,e){var o={12:1,98:1,107:1,287:1,457:1,521:1,692:1,762:1,780:1,842:1,899:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};o.f.j=function(e,n){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(o,n){a=t[e]=[o,n]}));n.push(a[2]=i);var s=o.p+o.u(e),r=new Error,l=function(n){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",r.name="ChunkLoadError",r.type=i,r.request=s,a[1](r)}};o.l(s,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(l)var d=l(o)}for(e&&e(n);c<s.length;c++)i=s[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},n=self["webpackChunkeps"]=self["webpackChunkeps"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(7854)}));n=o.O(n)})();
//# sourceMappingURL=app.1ac9f726.js.map