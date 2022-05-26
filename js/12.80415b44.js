"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[12],{6207:function(t,e,a){a.d(e,{Z:function(){return V}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[i("v-icon",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("chevron_left")]),i("router-link",{attrs:{to:"/home"}},[i("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),i("v-icon",{staticClass:"ml-2",on:{click:function(e){t.dialog=!0}}},[t._v("map")]),i("v-spacer"),i("span",[t._v(t._s(t.title||t.listPageType))]),i("v-spacer"),i("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[t.showSetting?i("v-icon",[t._v("settings")]):t._e()],1)],1),i("div",{staticClass:"d-flex"},[t.showBtn?i("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[i("v-icon",[t._v("swap_vert")]),i("v-icon",[t._v("filter_alt")])],1):t._e(),t.showSearch?i("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",[i("v-icon",[t._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-app-bar",{attrs:{dark:"",color:"#2196f3"}},[i("router-link",{attrs:{to:"/home"}},[i("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),i("v-icon",{staticClass:"ml-2",on:{click:function(e){t.dialog=!0}}},[t._v("map")]),i("v-spacer"),i("span",[t._v(t._s(t.title||t.listPageType))]),i("v-spacer"),i("v-toolbar-items",[i("v-icon",{attrs:{dark:"",text:""},on:{click:t.setCities}},[t._v(" close ")])],1)],1),i("v-container",{attrs:{fluid:""}},[i("v-chip-group",{attrs:{column:"",multiple:""},model:{value:t.selectCities,callback:function(e){t.selectCities=e},expression:"selectCities"}},t._l(t.cities,(function(e,a){return i("v-chip",{key:a,attrs:{filter:"",outlined:"","filter-icon":"check",color:"primary"}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1)],1)},s=[],l=a(629),o={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:()=>({search:"",dialog:!1,cities:["臺北市","新北市","桃園市","臺中市","臺南市","高雄市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣","基隆市"],selectCities:[]}),computed:{...(0,l.rn)(["listPageType"])},mounted(){let t=JSON.parse(localStorage.getItem("selectCities"));t&&t.length&&(this.selectCities=t)},methods:{setCities(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.selectCities))}}},n=o,r=a(1001),c=a(3453),d=a.n(c),v=a(3130),u=a(2371),p=a(5424),g=a(6884),h=a(9846),f=a(4497),m=a(6428),_=a(7047),C=a(9762),k=a(1347),x=a(7921),Z=(0,r.Z)(n,i,s,!1,null,null,null),V=Z.exports;d()(Z,{VAppBar:v.Z,VCard:u.Z,VChip:p.Z,VChipGroup:g.Z,VContainer:h.Z,VDialog:f.Z,VIcon:m.Z,VImg:_.Z,VSpacer:C.Z,VTextField:k.Z,VToolbarItems:x.lj})},4012:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-15"},[a("app-bar",{attrs:{title:"我的最愛"}}),t._l(t.favList,(function(e,i){return a("v-card",{key:i,staticClass:"d-flex",attrs:{outlined:"",tile:""},on:{click:function(a){t.dialog=!0,t.setDialog(e)}}},[a("v-card-text",[t._v(" "+t._s(e.name)+" ")])],1)})),[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v(t._s(t.dialogData.name))])]),a("v-card-text",[t._v(" "+t._s(t.dialogData.date)+" "),a("p",[t._v(t._s(t.dialogData.name))]),a("p",[t._v(t._s(t.dialogData.detail))]),t._v(" "+t._s(t.dialogData.phone)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"info darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 關閉 ")])],1)],1)],1)],1)]],2)},s=[],l=a(6207),o={components:{AppBar:l.Z},data:()=>({favList:[],dialogData:{},dialog:!1}),computed:{},mounted(){this.favList=JSON.parse(localStorage.getItem("favList"))},methods:{setDialog(t){this.dialogData=t}}},n=o,r=a(1001),c=a(3453),d=a.n(c),v=a(680),u=a(2371),p=a(7118),g=a(4497),h=a(2877),f=a(9762),m=(0,r.Z)(n,i,s,!1,null,null,null),_=m.exports;d()(m,{VBtn:v.Z,VCard:u.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VDialog:g.Z,VRow:h.Z,VSpacer:f.Z})}}]);
//# sourceMappingURL=12.80415b44.js.map