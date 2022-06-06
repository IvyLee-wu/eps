"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[842],{355:function(e,t,a){a.d(t,{Z:function(){return y}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[s("v-icon",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("chevron_left")]),s("router-link",{attrs:{to:"/home"}},[s("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),s("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),s("v-spacer"),s("span",[e._v(e._s(e.title||e.listPageType))]),s("v-spacer"),s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[e.showSetting?s("v-icon",[e._v("settings")]):e._e()],1)],1),s("div",{staticClass:"d-flex"},[e.showBtn?s("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[s("v-icon",[e._v("swap_vert")]),s("v-icon",[e._v("filter_alt")])],1):e._e(),e.showSearch?s("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:e._u([{key:"append",fn:function(){return[s("div",[s("v-icon",[e._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()],1),s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[s("router-link",{attrs:{to:"/home"}},[s("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),s("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),s("v-spacer"),s("span",[e._v(e._s(e.title||e.listPageType))]),s("v-spacer"),s("v-toolbar-items",[s("v-icon",{attrs:{dark:"",text:""},on:{click:e.setCities}},[e._v(" close ")])],1)],1),s("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[s("v-list",e._l(e.cities,(function(t,a){return s("v-list-item",{key:a},[s("v-list-item-content",{on:{click:function(a){return e.addCity(t)}}},[s("span",[e._v(e._s(t.name))])]),t.selected?s("v-list-item-icon",[s("v-icon",[e._v("check")])],1):e._e()],1)})),1)],1)],1)],1)],1)},i=[],l=a(629),n={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:()=>({search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}),computed:{...(0,l.rn)(["listPageType"])},mounted(){let e=JSON.parse(localStorage.getItem("selectCities"));e&&e.length&&(this.cities=e)},methods:{setCities(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity(e){console.log(e),this.cities.map((t=>(t.name===e.name&&(t.selected=!t.selected),t)))}}},r=n,o=a(1001),c=a(3453),d=a.n(c),u=a(3130),h=a(3237),m=a(9846),p=a(2912),v=a(6428),f=a(7047),g=a(6816),_=a(7620),b=a(5398),x=a(459),V=a(9762),k=a(5337),w=a(7921),C=(0,o.Z)(r,s,i,!1,null,null,null),y=C.exports;d()(C,{VAppBar:u.Z,VCard:h.Z,VContainer:m.Z,VDialog:p.Z,VIcon:v.Z,VImg:f.Z,VList:g.Z,VListItem:_.Z,VListItemContent:b.km,VListItemIcon:x.Z,VSpacer:V.Z,VTextField:k.Z,VToolbarItems:w.lj})},842:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-15"},[a("app-bar",{attrs:{showSearch:!1,title:"個人設定"}}),[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-btn",{staticClass:"mb-3",attrs:{color:"primary"}},[e._v(" 上傳圖片 ")]),a("v-text-field",{attrs:{label:"暱稱"},model:{value:e.shortname,callback:function(t){e.shortname=t},expression:"shortname"}}),a("v-text-field",{attrs:{counter:10,rules:e.phoneRules,label:"手機",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),a("v-text-field",{attrs:{counter:8,rules:e.empnoRules,label:"員編",required:""},model:{value:e.empno,callback:function(t){e.empno=t},expression:"empno"}}),a("v-text-field",{attrs:{label:"生日月份",required:""},model:{value:e.birthMonth,callback:function(t){e.birthMonth=t},expression:"birthMonth"}})],1)]],2)},i=[],l=a(355),n={components:{AppBar:l.Z},data:()=>({valid:!0,phone:"09XXXXXXXX",phoneRules:[e=>!!e||"phone is required",e=>e&&10==e.length||"phone must be 10 characters"],empno:"XXXXXXXX",empnoRules:[e=>!!e||"empno is required",e=>e&&8==e.length||"phone must be 8 characters"],shortname:"小明",fromDateMenu:!1,fromDateVal:"2022-05-24",minDate:"1900-01-01",maxDate:"2023-01-01",birthMonth:"06"}),computed:{fromDateDisp(){return this.fromDateVal}}},r=n,o=a(1001),c=a(3453),d=a.n(c),u=a(680),h=(a(6699),a(3325)),m=a(6210),p=a(6257),v=(0,h.Z)(m.Z,(0,p.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),a={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(e._uid)||(a.valid=t(e)))})):a.valid=t(e),a},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const a=this.watchers.find((e=>e._uid===t._uid));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}}),f=a(5337),g=(0,o.Z)(r,s,i,!1,null,null,null),_=g.exports;d()(g,{VBtn:u.Z,VForm:v,VTextField:f.Z})}}]);
//# sourceMappingURL=842.ae245cec.js.map