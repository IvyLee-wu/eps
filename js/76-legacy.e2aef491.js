"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[76],{9762:function(t,a,e){e(8582);var n=e(4589);a["Z"]=(0,n.Ji)("spacer","div","v-spacer")},1593:function(t,a,e){e.d(a,{Z:function(){return g}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[e("v-icon",{on:{click:function(a){return t.$router.go(-1)}}},[t._v("chevron_left")]),e("span",{staticStyle:{"margin-right":"auto","margin-left":"auto"}},[t._v(t._s(t.listPageType))])],1)],1)},i=[],o=e(4367),r=e(629),l={data:function(){return{}},computed:(0,o.Z)({},(0,r.rn)(["listPageType"]))},c=l,s=e(1001),d=e(3453),u=e.n(d),v=e(426),p=e(6428),f=(0,s.Z)(c,n,i,!1,null,"651c466c",null),g=f.exports;u()(f,{VAppBar:v.Z,VIcon:p.Z})},7076:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-15"},[e("app-bar"),t._l(t.favList,(function(a,n){return e("v-card",{key:n,staticClass:"d-flex",attrs:{outlined:"",tile:""},on:{click:function(e){t.dialog=!0,t.setDialog(a)}}},[e("v-card-text",[t._v(" "+t._s(a.name)+" ")])],1)})),[e("v-row",{attrs:{justify:"center"}},[e("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"text-h5"},[t._v(t._s(t.dialogData.name))])]),e("v-card-text",[t._v(" "+t._s(t.dialogData.date)+" "),e("p",[t._v(t._s(t.dialogData.name))]),e("p",[t._v(t._s(t.dialogData.detail))]),t._v(" "+t._s(t.dialogData.phone)+" ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"info darken-1",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" 關閉 ")])],1)],1)],1)],1)]],2)},i=[],o=e(1593),r={components:{AppBar:o.Z},data:function(){return{favList:[],dialogData:{},dialog:!1}},computed:{},mounted:function(){this.favList=JSON.parse(localStorage.getItem("favList"))},methods:{setDialog:function(t){this.dialogData=t}}},l=r,c=e(1001),s=e(3453),d=e.n(s),u=e(680),v=e(3237),p=e(7118),f=e(4246),g=e(2877),_=e(9762),m=(0,c.Z)(l,n,i,!1,null,null,null),h=m.exports;d()(m,{VBtn:u.Z,VCard:v.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VDialog:f.Z,VRow:g.Z,VSpacer:_.Z})}}]);
//# sourceMappingURL=76-legacy.e2aef491.js.map