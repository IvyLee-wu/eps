"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[842],{355:function(e,t,n){n.d(t,{Z:function(){return B}});var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[i("v-icon",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("chevron_left")]),i("router-link",{attrs:{to:"/home"}},[i("v-img",{staticClass:"ml-2",attrs:{src:n(9563),height:"30",width:"30","max-width":"30"}})],1),i("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),i("v-spacer"),i("span",[e._v(e._s(e.title||e.listPageType))]),i("v-spacer"),i("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[e.showSetting?i("v-icon",[e._v("settings")]):e._e()],1)],1),i("div",{staticClass:"d-flex"},[e.showBtn?i("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[i("v-icon",[e._v("swap_vert")]),i("v-icon",[e._v("filter_alt")])],1):e._e(),e.showSearch?i("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:e._u([{key:"append",fn:function(){return[i("div",[i("v-icon",[e._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[i("router-link",{attrs:{to:"/home"}},[i("v-img",{staticClass:"ml-2",attrs:{src:n(9563),height:"30",width:"30","max-width":"30"}})],1),i("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),i("v-spacer"),i("span",[e._v(e._s(e.title||e.listPageType))]),i("v-spacer"),i("v-toolbar-items",[i("v-icon",{attrs:{dark:"",text:""},on:{click:e.setCities}},[e._v(" close ")])],1)],1),i("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[i("v-list",e._l(e.cities,(function(t,n){return i("v-list-item",{key:n},[i("v-list-item-content",{on:{click:function(n){return e.addCity(t)}}},[i("span",[e._v(e._s(t.name))])]),t.selected?i("v-list-item-icon",[i("v-icon",[e._v("check")])],1):e._e()],1)})),1)],1)],1)],1)],1)},a=[],r=n(4367),s=(n(8862),n(1249),n(8309),n(629)),o={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:function(){return{search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}},computed:(0,r.Z)({},(0,s.rn)(["listPageType"])),mounted:function(){var e=JSON.parse(localStorage.getItem("selectCities"));e&&e.length&&(this.cities=e)},methods:{setCities:function(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity:function(e){console.log(e),this.cities.map((function(t){return t.name===e.name&&(t.selected=!t.selected),t}))}}},l=o,c=n(1001),u=n(3453),d=n.n(u),h=n(3130),m=n(3237),f=n(9846),p=n(2912),v=n(6428),g=n(7047),_=n(6816),b=n(7620),x=n(5398),V=n(459),k=n(9762),w=n(5337),C=n(7921),y=(0,c.Z)(l,i,a,!1,null,null,null),B=y.exports;d()(y,{VAppBar:h.Z,VCard:m.Z,VContainer:f.Z,VDialog:p.Z,VIcon:v.Z,VImg:g.Z,VList:_.Z,VListItem:b.Z,VListItemContent:x.km,VListItemIcon:V.Z,VSpacer:k.Z,VTextField:w.Z,VToolbarItems:C.lj})},7892:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-15"},[n("app-bar",{attrs:{showSearch:!1,title:"個人設定"}}),[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-btn",{staticClass:"mb-3",attrs:{color:"primary"}},[e._v(" 上傳圖片 ")]),n("v-text-field",{attrs:{label:"暱稱"},model:{value:e.shortname,callback:function(t){e.shortname=t},expression:"shortname"}}),n("v-text-field",{attrs:{counter:10,rules:e.phoneRules,label:"手機",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("v-text-field",{attrs:{counter:8,rules:e.empnoRules,label:"員編",required:""},model:{value:e.empno,callback:function(t){e.empno=t},expression:"empno"}}),n("v-text-field",{attrs:{label:"生日月份",required:""},model:{value:e.birthMonth,callback:function(t){e.birthMonth=t},expression:"birthMonth"}})],1)]],2)},a=[],r=n(355),s={components:{AppBar:r.Z},data:function(){return{valid:!0,phone:"09XXXXXXXX",phoneRules:[function(e){return!!e||"phone is required"},function(e){return e&&10==e.length||"phone must be 10 characters"}],empno:"XXXXXXXX",empnoRules:[function(e){return!!e||"empno is required"},function(e){return e&&8==e.length||"phone must be 8 characters"}],shortname:"小明",fromDateMenu:!1,fromDateVal:"2022-05-24",minDate:"1900-01-01",maxDate:"2023-01-01",birthMonth:"06"}},computed:{fromDateDisp:function(){return this.fromDateVal}}},o=s,l=n(1001),c=n(3453),u=n.n(c),d=n(680),h=n(4367),m=(n(6699),n(2023),n(2479),n(7327),n(1539),n(4747),n(9826),n(3325)),f=n(6210),p=n(6257),v=(0,m.Z)(f.Z,(0,p.J)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,n=function(e){return e.$watch("hasError",(function(n){t.$set(t.errorBag,e._uid,n)}),{immediate:!0})},i={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(function(a){a&&(t.errorBag.hasOwnProperty(e._uid)||(i.valid=n(e)))})):i.valid=n(e),i},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var n=this.watchers.find((function(e){return e._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:(0,h.Z)({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}),g=n(5337),_=(0,l.Z)(o,i,a,!1,null,null,null),b=_.exports;u()(_,{VBtn:d.Z,VForm:v,VTextField:g.Z})}}]);
//# sourceMappingURL=842-legacy.f460e808.js.map