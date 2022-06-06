"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[12],{355:function(e,t,a){a.d(t,{Z:function(){return w}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[s("v-icon",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("chevron_left")]),s("router-link",{attrs:{to:"/home"}},[s("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),s("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),s("v-spacer"),s("span",[e._v(e._s(e.title||e.listPageType))]),s("v-spacer"),s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[e.showSetting?s("v-icon",[e._v("settings")]):e._e()],1)],1),s("div",{staticClass:"d-flex"},[e.showBtn?s("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[s("v-icon",[e._v("swap_vert")]),s("v-icon",[e._v("filter_alt")])],1):e._e(),e.showSearch?s("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:e._u([{key:"append",fn:function(){return[s("div",[s("v-icon",[e._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()],1),s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[s("router-link",{attrs:{to:"/home"}},[s("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),s("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),s("v-spacer"),s("span",[e._v(e._s(e.title||e.listPageType))]),s("v-spacer"),s("v-toolbar-items",[s("v-icon",{attrs:{dark:"",text:""},on:{click:e.setCities}},[e._v(" close ")])],1)],1),s("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[s("v-list",e._l(e.cities,(function(t,a){return s("v-list-item",{key:a},[s("v-list-item-content",{on:{click:function(a){return e.addCity(t)}}},[s("span",[e._v(e._s(t.name))])]),t.selected?s("v-list-item-icon",[s("v-icon",[e._v("check")])],1):e._e()],1)})),1)],1)],1)],1)],1)},i=[],l=a(629),n={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:()=>({search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}),computed:{...(0,l.rn)(["listPageType"])},mounted(){let e=JSON.parse(localStorage.getItem("selectCities"));e&&e.length&&(this.cities=e)},methods:{setCities(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity(e){console.log(e),this.cities.map((t=>(t.name===e.name&&(t.selected=!t.selected),t)))}}},o=n,c=a(1001),r=a(3453),d=a.n(r),v=a(3130),m=a(3237),u=a(9846),p=a(2912),g=a(6428),f=a(7047),h=a(6816),_=a(7620),C=a(5398),k=a(459),x=a(9762),V=a(5337),Z=a(7921),y=(0,c.Z)(o,s,i,!1,null,null,null),w=y.exports;d()(y,{VAppBar:v.Z,VCard:m.Z,VContainer:u.Z,VDialog:p.Z,VIcon:g.Z,VImg:f.Z,VList:h.Z,VListItem:_.Z,VListItemContent:C.km,VListItemIcon:k.Z,VSpacer:x.Z,VTextField:V.Z,VToolbarItems:Z.lj})},4012:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-15"},[a("app-bar",{attrs:{title:"我的最愛"}}),e._l(e.favList,(function(t,s){return a("v-card",{key:s,staticClass:"d-flex",attrs:{outlined:"",tile:""},on:{click:function(a){e.dialog=!0,e.setDialog(t)}}},[a("v-card-text",[e._v(" "+e._s(t.name)+" ")])],1)})),[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.dialogData.name))])]),a("v-card-text",[e._v(" "+e._s(e.dialogData.date)+" "),a("p",[e._v(e._s(e.dialogData.name))]),a("p",[e._v(e._s(e.dialogData.detail))]),e._v(" "+e._s(e.dialogData.phone)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"info darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 關閉 ")])],1)],1)],1)],1)]],2)},i=[],l=a(355),n={components:{AppBar:l.Z},data:()=>({favList:[],dialogData:{},dialog:!1}),computed:{},mounted(){this.favList=JSON.parse(localStorage.getItem("favList"))},methods:{setDialog(e){this.dialogData=e}}},o=n,c=a(1001),r=a(3453),d=a.n(r),v=a(680),m=a(3237),u=a(7118),p=a(2912),g=a(2877),f=a(9762),h=(0,c.Z)(o,s,i,!1,null,null,null),_=h.exports;d()(h,{VBtn:v.Z,VCard:m.Z,VCardActions:u.h7,VCardText:u.ZB,VCardTitle:u.EB,VDialog:p.Z,VRow:g.Z,VSpacer:f.Z})}}]);
//# sourceMappingURL=12.1c8b058e.js.map