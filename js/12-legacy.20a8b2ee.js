"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[12],{9762:function(t,a,e){e(8582);var n=e(4589);a["Z"]=(0,n.Ji)("spacer","div","v-spacer")},3407:function(t,a,e){e.d(a,{Z:function(){return g}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[e("v-icon",{on:{click:function(a){return t.$router.go(-1)}}},[t._v("chevron_left")]),e("span",{staticStyle:{"margin-right":"auto","margin-left":"auto"}},[t._v(t._s(t.title||t.listPageType))])],1),e("div",{staticClass:"d-flex"},[t.showBtn?e("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[e("v-icon",[t._v("swap_vert")]),e("v-icon",[t._v("filter_alt")])],1):t._e(),t.showSearch?e("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",[e("v-icon",[t._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}):t._e()],1)],1)},i=[],l=e(4367),o=e(629),r={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""}},data:function(){return{search:""}},computed:(0,l.Z)({},(0,o.rn)(["listPageType"]))},s=r,c=e(1001),d=e(3453),u=e.n(d),v=e(4143),p=e(6428),f=e(1347),_=(0,c.Z)(s,n,i,!1,null,"20e14634",null),g=_.exports;u()(_,{VAppBar:v.Z,VIcon:p.Z,VTextField:f.Z})},4012:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-15"},[e("app-bar",{attrs:{title:"我的最愛"}}),t._l(t.favList,(function(a,n){return e("v-card",{key:n,staticClass:"d-flex",attrs:{outlined:"",tile:""},on:{click:function(e){t.dialog=!0,t.setDialog(a)}}},[e("v-card-text",[t._v(" "+t._s(a.name)+" ")])],1)})),[e("v-row",{attrs:{justify:"center"}},[e("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"text-h5"},[t._v(t._s(t.dialogData.name))])]),e("v-card-text",[t._v(" "+t._s(t.dialogData.date)+" "),e("p",[t._v(t._s(t.dialogData.name))]),e("p",[t._v(t._s(t.dialogData.detail))]),t._v(" "+t._s(t.dialogData.phone)+" ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"info darken-1",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" 關閉 ")])],1)],1)],1)],1)]],2)},i=[],l=e(3407),o={components:{AppBar:l.Z},data:function(){return{favList:[],dialogData:{},dialog:!1}},computed:{},mounted:function(){this.favList=JSON.parse(localStorage.getItem("favList"))},methods:{setDialog:function(t){this.dialogData=t}}},r=o,s=e(1001),c=e(3453),d=e.n(c),u=e(680),v=e(2371),p=e(7118),f=e(4497),_=e(2877),g=e(9762),h=(0,s.Z)(r,n,i,!1,null,null,null),m=h.exports;d()(h,{VBtn:u.Z,VCard:v.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VDialog:f.Z,VRow:_.Z,VSpacer:g.Z})}}]);
//# sourceMappingURL=12-legacy.20a8b2ee.js.map