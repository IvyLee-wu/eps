"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[235],{355:function(t,e,s){s.d(e,{Z:function(){return Z}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[a("v-icon",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("chevron_left")]),a("router-link",{attrs:{to:"/home"}},[a("v-img",{staticClass:"ml-2",attrs:{src:s(9563),height:"30",width:"30","max-width":"30"}})],1),a("v-icon",{staticClass:"ml-2",on:{click:function(e){t.dialog=!0}}},[t._v("map")]),a("v-spacer"),a("span",[t._v(t._s(t.title||t.listPageType))]),a("v-spacer"),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[t.showSetting?a("v-icon",[t._v("settings")]):t._e()],1)],1),a("div",{staticClass:"d-flex"},[t.showBtn?a("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[a("v-icon",[t._v("swap_vert")]),a("v-icon",[t._v("filter_alt")])],1):t._e(),t.showSearch?a("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",[a("v-icon",[t._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[a("router-link",{attrs:{to:"/home"}},[a("v-img",{staticClass:"ml-2",attrs:{src:s(9563),height:"30",width:"30","max-width":"30"}})],1),a("v-icon",{staticClass:"ml-2",on:{click:function(e){t.dialog=!0}}},[t._v("map")]),a("v-spacer"),a("span",[t._v(t._s(t.title||t.listPageType))]),a("v-spacer"),a("v-toolbar-items",[a("v-icon",{attrs:{dark:"",text:""},on:{click:t.setCities}},[t._v(" close ")])],1)],1),a("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[a("v-list",t._l(t.cities,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-content",{on:{click:function(s){return t.addCity(e)}}},[a("span",[t._v(t._s(e.name))])]),e.selected?a("v-list-item-icon",[a("v-icon",[t._v("check")])],1):t._e()],1)})),1)],1)],1)],1)],1)},i=[],l=s(4367),n=(s(8862),s(1249),s(8309),s(629)),o={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:function(){return{search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}},computed:(0,l.Z)({},(0,n.rn)(["listPageType"])),mounted:function(){var t=JSON.parse(localStorage.getItem("selectCities"));t&&t.length&&(this.cities=t)},methods:{setCities:function(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity:function(t){console.log(t),this.cities.map((function(e){return e.name===t.name&&(e.selected=!e.selected),e}))}}},c=o,r=s(1001),d=s(3453),v=s.n(d),h=s(3130),m=s(3237),p=s(9846),u=s(2912),f=s(6428),g=s(7047),_=s(6816),x=s(7620),S=s(5398),b=s(459),C=s(9762),y=s(5337),k=s(7921),w=(0,r.Z)(c,a,i,!1,null,null,null),Z=w.exports;v()(w,{VAppBar:h.Z,VCard:m.Z,VContainer:p.Z,VDialog:u.Z,VIcon:f.Z,VImg:g.Z,VList:_.Z,VListItem:x.Z,VListItemContent:S.km,VListItemIcon:b.Z,VSpacer:C.Z,VTextField:y.Z,VToolbarItems:k.lj})},5235:function(t,e,s){s.r(e),s.d(e,{default:function(){return S}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-15"},[a("app-bar",{attrs:{showSearch:!1}}),a("h2",[t._v(" "+t._s(t.detail.name)+" ")]),a("div",{staticClass:"d-flex justify-space-between mb-4"},[a("span",[t._v(" "+t._s(t.detail.date)+" ")]),a("div",[a("v-icon",{staticClass:"mr-2"},[t._v("share")]),a("span",{attrs:{title:"我的最愛"},on:{click:t.favStatus}},[t.isFav?a("v-icon",[t._v("favorite")]):a("v-icon",[t._v("favorite_border")])],1)],1)]),a("p",[t._v(" "+t._s(t.detail.detail)+" ")]),a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"auto",width:"100%"}}),[a("v-simple-table",{staticClass:"mt-5",scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展覽資訊：")]),a("td",{staticClass:"pl-0"},[t._v("2022台北國際嬰兒與孕媽咪用品展")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展出日期：")]),a("td",{staticClass:"pl-0"},[t._v("2022年10月07日(五)－10月10日(一)")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展出時間：")]),a("td",{staticClass:"pl-0"},[t._v("10:00~18:00")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("展出地點：")]),a("td",{staticClass:"pl-0"},[t._v("台北世貿一館 | 110台北市信義區信義路五段5號")])]),a("tr",[a("td",{staticStyle:{"min-width":"105px"}},[t._v("聯絡方式：")]),a("td",{staticClass:"pl-0"},[t._v(t._s(t.detail.phone))])])])]},proxy:!0}])})],a("v-img",{attrs:{src:s(8394),height:"auto",width:"100%"}}),a("v-btn",{staticClass:"mt-1 ml-2",attrs:{outlined:"",small:""},on:{click:t.favStatus}},[t._v(" "+t._s(t.dialogText)+" ")])],2)},i=[],l=(s(4553),s(8862),s(561),s(355)),n={components:{AppBar:l.Z},data:function(){return{detail:{date:"04/01 ~ 04/04",detail:"10/07-10台北世貿一館！全球百大精品孕嬰領導品牌、破萬件婦幼夯品強勢出擊！廣蒐全球最新、詢問度最高之人氣婦嬰商品，並邀請各路婦幼翹楚與育兒專家共同分享孕期與育兒知識，更有多款優質明星商品折扣優惠，展場獨家超值限定商品！展覽商品包含孕婦服裝、孕哺衣、哺乳枕、媽媽包、保養品、營養補給品、塑身衣、彌月蛋糕/油飯/餅乾、彌月禮品、嬰兒食品、營養補充、玩具、推車、安全坐椅、幼兒衛浴、嬰兒床寢、各式教材器具、兒童圖書等，所有商品應有盡有，展覽現場更有限量福袋免費領、萬元推車一元抽、上聯獨家優惠商品、寶寶運動會等活動!",name:"孕媽咪與寶貝活動",phone:"886-2-27597167"},isFav:!1,dialogText:""}},mounted:function(){var t=this,e=JSON.parse(localStorage.getItem("favList")),s=-1;e&&e.findIndex((function(e){return e.phone===t.detail.phone})),this.isFav=-1!=s,this.dialogText=-1==s?"加到最愛":"移除最愛"},methods:{favStatus:function(){var t=this;if(this.isFav=!this.isFav,this.isFav){var e=null;localStorage.getItem("favList")?(e=JSON.parse(localStorage.getItem("favList")),e.push(this.detail)):e=[this.detail],localStorage.setItem("favList",JSON.stringify(e)),this.dialogText="移除最愛"}else{var s=JSON.parse(localStorage.getItem("favList")),a=s.findIndex((function(e){return e.phone===t.detail.phone}));s.splice(a,1),localStorage.setItem("favList",JSON.stringify(s)),this.dialogText="加到最愛"}}}},o=n,c=s(1001),r=s(3453),d=s.n(r),v=s(680),h=s(6428),m=s(7047),p=s(4367),u=(s(9653),s(4589)),f=s(8085),g=s(3325),_=(0,g.Z)(f.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return(0,p.Z)({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,u.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),x=(0,c.Z)(o,a,i,!1,null,null,null),S=x.exports;d()(x,{VBtn:v.Z,VIcon:h.Z,VImg:m.Z,VSimpleTable:_})},8394:function(t,e,s){t.exports=s.p+"img/googlemap.995d1961.jpg"}}]);
//# sourceMappingURL=235-legacy.92b1b5d1.js.map