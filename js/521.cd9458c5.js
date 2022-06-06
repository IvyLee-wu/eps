"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[521],{355:function(e,t,s){s.d(t,{Z:function(){return y}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[a("v-icon",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("chevron_left")]),a("router-link",{attrs:{to:"/home"}},[a("v-img",{staticClass:"ml-2",attrs:{src:s(9563),height:"30",width:"30","max-width":"30"}})],1),a("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),a("v-spacer"),a("span",[e._v(e._s(e.title||e.listPageType))]),a("v-spacer"),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[e.showSetting?a("v-icon",[e._v("settings")]):e._e()],1)],1),a("div",{staticClass:"d-flex"},[e.showBtn?a("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[a("v-icon",[e._v("swap_vert")]),a("v-icon",[e._v("filter_alt")])],1):e._e(),e.showSearch?a("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:e._u([{key:"append",fn:function(){return[a("div",[a("v-icon",[e._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[a("router-link",{attrs:{to:"/home"}},[a("v-img",{staticClass:"ml-2",attrs:{src:s(9563),height:"30",width:"30","max-width":"30"}})],1),a("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),a("v-spacer"),a("span",[e._v(e._s(e.title||e.listPageType))]),a("v-spacer"),a("v-toolbar-items",[a("v-icon",{attrs:{dark:"",text:""},on:{click:e.setCities}},[e._v(" close ")])],1)],1),a("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[a("v-list",e._l(e.cities,(function(t,s){return a("v-list-item",{key:s},[a("v-list-item-content",{on:{click:function(s){return e.addCity(t)}}},[a("span",[e._v(e._s(t.name))])]),t.selected?a("v-list-item-icon",[a("v-icon",[e._v("check")])],1):e._e()],1)})),1)],1)],1)],1)],1)},i=[],n=s(629),l={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:()=>({search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}),computed:{...(0,n.rn)(["listPageType"])},mounted(){let e=JSON.parse(localStorage.getItem("selectCities"));e&&e.length&&(this.cities=e)},methods:{setCities(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity(e){console.log(e),this.cities.map((t=>(t.name===e.name&&(t.selected=!t.selected),t)))}}},o=l,c=s(1001),r=s(3453),d=s.n(r),m=s(3130),p=s(3237),h=s(9846),u=s(2912),f=s(6428),v=s(7047),x=s(6816),g=s(7620),_=s(5398),w=s(459),Z=s(9762),C=s(5337),b=s(7921),k=(0,c.Z)(o,a,i,!1,null,null,null),y=k.exports;d()(k,{VAppBar:m.Z,VCard:p.Z,VContainer:h.Z,VDialog:u.Z,VIcon:f.Z,VImg:v.Z,VList:x.Z,VListItem:g.Z,VListItemContent:_.km,VListItemIcon:w.Z,VSpacer:Z.Z,VTextField:C.Z,VToolbarItems:b.lj})},6521:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-15"},[s("app-bar"),e._l(e.shop,(function(t,a){return s("v-card",{key:a,staticClass:"d-flex",attrs:{outlined:"",tile:""},on:{click:function(t){return e.$router.push("/schedule-detail")}}},[s("v-img",{attrs:{src:t.src,height:"100px",width:"100px"}}),s("v-card-text",[e._v(" "+e._s(t.name)+" "),s("br"),e._v(" "+e._s(t.address)+" ")])],1)}))],2)},i=[],n=s(355),l={components:{AppBar:n.Z},data:()=>({shop:[{name:"康橋大飯店",address:"臺南市中西區國華街３段２６號Ａ８",src:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},{name:"兆品酒店",address:"臺南市新營區大宏里中正路１２號１樓",src:"https://images.unsplash.com/photo-1599722585837-c1cb8eea32ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},{name:"帕可麗酒店",address:"臺南市中西區南廠里金華路３段５１號１樓",src:"https://images.unsplash.com/photo-1623316200785-895cd6b807a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},{name:"古華花園飯店",address:"臺南市永康區崑山里崑大路１５５巷３１號１樓",src:"https://images.unsplash.com/photo-1594099462046-1df31fd4a66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"}]}),mounted(){},methods:{addShop(){this.shop=this.shop.map((e=>(e.src=this.randomShop(),e)))},randomShop(){return shops[Math.floor(Math.random()*shops.length)]}}},o=l,c=s(1001),r=s(3453),d=s.n(r),m=s(3237),p=s(7118),h=s(7047),u=(0,c.Z)(o,a,i,!1,null,null,null),f=u.exports;d()(u,{VCard:m.Z,VCardText:p.ZB,VImg:h.Z})}}]);
//# sourceMappingURL=521.cd9458c5.js.map