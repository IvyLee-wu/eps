"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[159],{3805:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-15"},[a("app-bar",{attrs:{showSearch:!1}}),a("h2",[t._v(" "+t._s(t.detail.name)+" ")]),a("div",{staticClass:"d-flex justify-space-between mb-4"},[a("span",[t._v(" "+t._s(t.detail.date)+" ")]),a("div",[a("v-icon",{staticClass:"mr-2"},[t._v("share")]),a("span",{attrs:{title:"我的最愛"},on:{click:t.favStatus}},[t.isFav?a("v-icon",[t._v("favorite")]):a("v-icon",[t._v("favorite_border")])],1)],1)]),a("p",[t._v(" "+t._s(t.detail.detail)+" ")]),a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"auto",width:"100%"}}),[a("v-simple-table",{staticClass:"mt-5",scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展覽資訊：")]),a("td",{staticClass:"pl-0"},[t._v("2022台北國際嬰兒與孕媽咪用品展")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展出日期：")]),a("td",{staticClass:"pl-0"},[t._v("2022年10月07日(五)－10月10日(一)")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展出時間：")]),a("td",{staticClass:"pl-0"},[t._v("10:00~18:00")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展出地點：")]),a("td",{staticClass:"pl-0"},[t._v("台北世貿一館 | 110台北市信義區信義路五段5號")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("聯絡方式：")]),a("td",{staticClass:"pl-0"},[t._v(t._s(t.detail.phone))])])])]},proxy:!0}])})],a("v-img",{attrs:{src:s(8394),height:"auto",width:"100%"}}),a("v-btn",{staticClass:"mt-1 ml-2",attrs:{outlined:"",small:""},on:{click:t.favStatus}},[t._v(" "+t._s(t.dialogText)+" ")])],2)},i=[],l=(s(4553),s(8862),s(561),s(7400)),n={components:{AppBar:l.Z},data:function(){return{detail:{},isFav:!1,dialogText:""}},mounted:function(){var t=this;this.detail=JSON.parse(localStorage.getItem("toDetail"));var e=JSON.parse(localStorage.getItem("favList")),s=e.findIndex((function(e){return e.phone===t.detail.phone}));this.isFav=-1!=s,this.dialogText=-1==s?"加到最愛":"移除最愛"},methods:{favStatus:function(){var t=this;if(this.isFav=!this.isFav,this.isFav){var e=null;localStorage.getItem("favList")?(e=JSON.parse(localStorage.getItem("favList")),e.push(this.detail)):e=[this.detail],localStorage.setItem("favList",JSON.stringify(e)),this.dialogText="移除最愛"}else{var s=JSON.parse(localStorage.getItem("favList")),a=s.findIndex((function(e){return e.phone===t.detail.phone}));s.splice(a,1),localStorage.setItem("favList",JSON.stringify(s)),this.dialogText="加到最愛"}}}},o=n,r=s(1001),d=s(3453),h=s.n(d),c=s(680),v=s(6428),p=s(7047),u=s(4367),f=(s(9653),s(4589)),m=s(8085),g=s(3325),_=(0,g.Z)(m.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return(0,u.Z)({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,f.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),S=(0,r.Z)(o,a,i,!1,null,null,null),b=S.exports;h()(S,{VBtn:c.Z,VIcon:v.Z,VImg:p.Z,VSimpleTable:_})},8394:function(t,e,s){t.exports=s.p+"img/googlemap.995d1961.jpg"}}]);
//# sourceMappingURL=159-legacy.266b4271.js.map