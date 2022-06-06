"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[692],{355:function(t,e,i){i.d(e,{Z:function(){return D}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[a("v-icon",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("chevron_left")]),a("router-link",{attrs:{to:"/home"}},[a("v-img",{staticClass:"ml-2",attrs:{src:i(9563),height:"30",width:"30","max-width":"30"}})],1),a("v-icon",{staticClass:"ml-2",on:{click:function(e){t.dialog=!0}}},[t._v("map")]),a("v-spacer"),a("span",[t._v(t._s(t.title||t.listPageType))]),a("v-spacer"),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[t.showSetting?a("v-icon",[t._v("settings")]):t._e()],1)],1),a("div",{staticClass:"d-flex"},[t.showBtn?a("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[a("v-icon",[t._v("swap_vert")]),a("v-icon",[t._v("filter_alt")])],1):t._e(),t.showSearch?a("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",[a("v-icon",[t._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[a("router-link",{attrs:{to:"/home"}},[a("v-img",{staticClass:"ml-2",attrs:{src:i(9563),height:"30",width:"30","max-width":"30"}})],1),a("v-icon",{staticClass:"ml-2",on:{click:function(e){t.dialog=!0}}},[t._v("map")]),a("v-spacer"),a("span",[t._v(t._s(t.title||t.listPageType))]),a("v-spacer"),a("v-toolbar-items",[a("v-icon",{attrs:{dark:"",text:""},on:{click:t.setCities}},[t._v(" close ")])],1)],1),a("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[a("v-list",t._l(t.cities,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-content",{on:{click:function(i){return t.addCity(e)}}},[a("span",[t._v(t._s(e.name))])]),e.selected?a("v-list-item-icon",[a("v-icon",[t._v("check")])],1):t._e()],1)})),1)],1)],1)],1)],1)},n=[],s=i(4367),l=(i(8862),i(1249),i(8309),i(629)),o={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:function(){return{search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}},computed:(0,s.Z)({},(0,l.rn)(["listPageType"])),mounted:function(){var t=JSON.parse(localStorage.getItem("selectCities"));t&&t.length&&(this.cities=t)},methods:{setCities:function(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity:function(t){console.log(t),this.cities.map((function(e){return e.name===t.name&&(e.selected=!e.selected),e}))}}},c=o,r=i(1001),d=i(3453),u=i.n(d),v=i(3130),p=i(3237),h=i(9846),m=i(2912),f=i(6428),g=i(7047),C=i(6816),_=i(7620),b=i(5398),y=i(459),Z=i(9762),k=i(5337),V=i(7921),x=(0,r.Z)(c,a,n,!1,null,null,null),D=x.exports;u()(x,{VAppBar:v.Z,VCard:p.Z,VContainer:h.Z,VDialog:m.Z,VIcon:f.Z,VImg:g.Z,VList:C.Z,VListItem:_.Z,VListItemContent:b.km,VListItemIcon:y.Z,VSpacer:Z.Z,VTextField:k.Z,VToolbarItems:V.lj})},2692:function(t,e,i){i.r(e),i.d(e,{default:function(){return I}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-15"},[i("app-bar",{attrs:{title:"我的禮券"}}),t._l(t.sortCoupon,(function(e,a){return i("v-card",{key:a,attrs:{outlined:"",tile:"",disabled:!e.isVaild},on:{click:function(i){t.dialog=!0,t.setDialog(e)}}},[i("v-card-title",[t._v(t._s(e.name))]),e.isVaild?t._e():i("v-card-subtitle",[t._v("失效("+t._s(e.invalidReason)+")")]),i("v-card-text",[t._v(" "+t._s(e.activity)+" "),i("br"),t._v(" "+t._s(e.releaseDate)+" ")])],1)})),[i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{width:"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(t._s(t.dialogData.activity))])]),i("v-card-text",[i("div",[t._v(t._s(t.dialogData.name))]),i("div",{staticClass:"mb-3"},[t._v(" "+t._s(t.dialogData.releaseDate)+"(有效天數"+t._s(t.dialogData.validDay)+"天) ")]),i("p",{domProps:{innerHTML:t._s(t.dialogData.detail)}}),i("v-chip",{attrs:{label:"",outlined:""}},[t._v(" VD3aaDQfvAaHRSTawjiwmgW87RE "),i("v-icon",{staticClass:"ml-2",attrs:{size:"16"}},[t._v("content_copy")])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"info darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 關閉 ")])],1)],1)],1)],1)]],2)},n=[],s=(i(2707),i(9653),i(355)),l={components:{AppBar:s.Z},data:function(){return{dialog:!1,coupon:[{name:"星巴克",activity:"週一週二星禮遇",detail:"\n          <p>活動期間每週一&週二，會員使用APP行動預點服務購買大杯(含)以上飲料的結帳金額，可獲贈三倍星星！</p>\n          <div>注意事項：</div>\n          <div>\n          1. 此活動需使用星巴克APP行動預點服務，完成訂單交易後方可享有此回饋，活動期間不限購買次數。星星可累計。<br/>\n          2. 此三倍贈星活動包含原本購買大杯(含)以上飲料金額所贈送的基本回饋星數，如：消費35元共獲贈3顆星、消費70元共獲贈6顆星…以此類推。<br/>\n          3. 活動所獲贈的星星將於完成購買後之24小時內生效，顧客可自行登入星巴克網站或APP查詢。<br/>\n          4. 商品依APP行動預點選單顯示為準，各店庫存不同，售完為止；本活動不適用於門市內星禮程活動、外送外賣、電話預訂服務。<br/>\n          5. 行動預點使用注意事項，請至星巴克網站瀏覽。<br/>\n          6. 本活動之贈星回饋記錄均以本公司系統紀錄為準。<br/>\n          7. 詳細活動辦法依本公司公告為主。凡參與本活動，即視同承認及接受本活動注意事項及相關規定，本公司保有隨時修正、暫停或終止本活動之權利，若有未盡事宜，悉依本公司之相關公告辦理；本公司保留最終解釋及決定權利。\n          </div>\n        ",releaseDate:"2022-05-23",validDay:15,isVaild:!0,invalidReason:""},{name:"星巴克",activity:"夏日海洋提袋【滿額贈活動】",detail:"\n          2022/5/14起，來店單筆消費金額滿$900，即可獲得夏日海洋提袋乙個。(不累贈，數量有限，現場贈完為止)\n          注意事項：\n          1.贈品共計兩色將隨機贈送，並以門市現貨為主，不累贈，數量有限贈完為止。\n          2.紙本飲料券銷售不可參加滿額贈活動。\n          3.折扣、優惠、兌換星禮程回饋與優惠、各行銷活動恕不合併使用。\n          4.本活動不適用於外送外賣、電話預訂與行動預點服務。\n          5.因應防疫措施，滾動式調整活動辦法，懇請配合門市各項防疫規範；本公司保留活動變更及調整之權利，如有變動請以星巴克網站公告為主。\n          6.凡參與本活動，即視同承認及接受本活動注意事項及相關規定，本公司保有隨時修正、暫停或終止本活動之權利，若有未盡事宜，悉依本公司之相關公告辦理；本公司保留最終解釋及決定權利，詳細活動辦法依本公司公告為主。\n        ",releaseDate:"2022-05-14",validDay:null,isVaild:!1,invalidReason:"贈完"},{name:"星巴克",activity:"聯名商品七折活動",detail:"\n          活動期間至門市購買指定聯名商品乙件，即享7折優惠。\n          注意事項：\n          1.指定聯名商品銷售數量依各門市實際庫存為主，售完為止。\n          2.線上門市銷售期間與活動辦法，請依各購買平台公告為準。\n          3.折扣、優惠、兌換星禮程回饋與優惠、各行銷活動恕不合併使用。\n          4.本活動僅限台灣地區，因應防疫措施，懇請配合門市各項防疫規範。\n          5.詳細活動辦法依本公司公告為主。凡參與本活動，即視同承認及接受本活動注意事項及相關規定，本公司保有隨時修正、暫停或終止本活動之權利，若有未盡事宜，悉依本公司之相關公告辦理；本公司保留最終解釋及決定權利。\n        ",releaseDate:"2022-05-13",validDay:14,isVaild:!0,invalidReason:""},{name:"星巴克",activity:"星禮程會員專屬 – 會員好友分享",detail:"\n          活動期間每日11:00-20:00，會員至門市購買兩杯相同容量／口味／冰熱皆一致的飲料，其中一杯由星巴克招待（每人每次至多買二送二）\n          注意事項：\n          1. 活動需全額以星禮程帳號中任一隨行卡或APP行動支付方可享有此回饋。\n          2. 每次至多買二送二，飲料限當場一次領取。\n          3. 優惠品項依各門市現貨為主，不包含罐裝飲料、典藏系列咖啡、手沖、虹吸式咖啡及含酒精飲料。\n          4. 原價購買與享有優惠折扣之飲料如更換需加價指定品項植物奶皆需收費。\n          5. 折扣、優惠、兌換星禮程回饋、各行銷活動恕不合併使用。\n          6. 本活動不適用於車道服務、機場門市（松山機場、一航廈 3F 、新二航廈 B2 、二航廈 4F 、二航廈 5F 、小港國際站及機場管制區內門市）、高鐵／鐵路站內門市（青埔、六家、烏日、苗栗高鐵、雲林高鐵、嘉義高鐵、台南高鐵、左營高鐵）、洄瀾門市、花蓮和平門市及宜蘭頭城門市；外送外賣、電話預訂及行動預點服務。。\n          7. 因應防疫措施，滾動式調整活動辦法，懇請配合門市各項防疫規範；本公司保留活動變更及調整之權利，如有變動請以星巴克網站公告為主。\n        ",releaseDate:"2022-05-25",validDay:2,isVaild:!0,invalidReason:""}],dialogData:{}}},computed:{sortCoupon:function(){return this.coupon.sort((function(t,e){return Number(e.isVaild)-Number(t.isVaild)}))}},methods:{setDialog:function(t){this.dialogData=t}}},o=l,c=i(1001),r=i(3453),d=i.n(r),u=i(680),v=i(3237),p=i(7118),h=i(5200),m=i(4367),f=(i(1539),i(7327),i(3325)),g=i(5827),C=i(172),_=i(6952),b=i(7352),y=i(8085),Z=i(2936),k=i(6505),V=i(9131),x=i(1824),D=(0,f.Z)(_.Z,V.Z,k.Z,y.Z,(0,b.d)("chipGroup"),(0,Z.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return(0,m.Z)((0,m.Z)((0,m.Z)((0,m.Z)({"v-chip":!0},k.Z.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(k.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=(0,h.Z)(e,2),a=i[0],n=i[1];t.$attrs.hasOwnProperty(a)&&(0,x.fK)(a,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(C.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(g.Zq,t)},genClose:function(){var t=this;return this.$createElement(C.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,n=i.data;n.attrs=(0,m.Z)((0,m.Z)({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var s=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(s,n),e)}}),B=i(2912),S=i(6428),w=i(2877),$=i(9762),P=(0,c.Z)(o,a,n,!1,null,null,null),I=P.exports;d()(P,{VBtn:u.Z,VCard:v.Z,VCardActions:p.h7,VCardSubtitle:p.Qq,VCardText:p.ZB,VCardTitle:p.EB,VChip:D,VDialog:B.Z,VIcon:S.Z,VRow:w.Z,VSpacer:$.Z})}}]);
//# sourceMappingURL=692-legacy.fecd6f99.js.map