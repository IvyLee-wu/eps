"use strict";(self["webpackChunkeps"]=self["webpackChunkeps"]||[]).push([[899],{355:function(e,t,a){a.d(t,{Z:function(){return y}});var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-app-bar",{attrs:{elevation:"4",color:"blue",dark:"",fixed:""}},[i("v-icon",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("chevron_left")]),i("router-link",{attrs:{to:"/home"}},[i("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),i("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),i("v-spacer"),i("span",[e._v(e._s(e.title||e.listPageType))]),i("v-spacer"),i("router-link",{staticClass:"text-decoration-none",attrs:{to:"/user-info"}},[e.showSetting?i("v-icon",[e._v("settings")]):e._e()],1)],1),i("div",{staticClass:"d-flex"},[e.showBtn?i("div",{staticClass:"d-flex",staticStyle:{"margin-top":"-10px","margin-right":"5px"}},[i("v-icon",[e._v("swap_vert")]),i("v-icon",[e._v("filter_alt")])],1):e._e(),e.showSearch?i("v-text-field",{staticClass:"mb-3",attrs:{placeholder:"請輸入關鍵字",outlined:"","hide-details":"",rounded:"",dense:"",color:"blue"},scopedSlots:e._u([{key:"append",fn:function(){return[i("div",[i("v-icon",[e._v("search")])],1)]},proxy:!0}],null,!1,4196558763),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e()],1),i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-app-bar",{attrs:{dark:"",color:"#2196f3",fixed:""}},[i("router-link",{attrs:{to:"/home"}},[i("v-img",{staticClass:"ml-2",attrs:{src:a(9563),height:"30",width:"30","max-width":"30"}})],1),i("v-icon",{staticClass:"ml-2",on:{click:function(t){e.dialog=!0}}},[e._v("map")]),i("v-spacer"),i("span",[e._v(e._s(e.title||e.listPageType))]),i("v-spacer"),i("v-toolbar-items",[i("v-icon",{attrs:{dark:"",text:""},on:{click:e.setCities}},[e._v(" close ")])],1)],1),i("v-container",{staticClass:"mt-10",attrs:{fluid:""}},[i("v-list",e._l(e.cities,(function(t,a){return i("v-list-item",{key:a},[i("v-list-item-content",{on:{click:function(a){return e.addCity(t)}}},[i("span",[e._v(e._s(t.name))])]),t.selected?i("v-list-item-icon",[i("v-icon",[e._v("check")])],1):e._e()],1)})),1)],1)],1)],1)],1)},s=[],u=a(4367),n=(a(8862),a(1249),a(8309),a(629)),r={props:{showBtn:{type:Boolean,default:!1},showSearch:{type:Boolean,default:!0},title:{type:String,default:""},showSetting:{type:Boolean,default:!1}},data:function(){return{search:"",dialog:!1,cities:[{name:"臺北市",selected:!1},{name:"新北市",selected:!1},{name:"桃園市",selected:!1},{name:"臺中市",selected:!1},{name:"臺南市",selected:!1},{name:"高雄市",selected:!1},{name:"新竹市",selected:!1},{name:"嘉義市",selected:!1},{name:"新竹縣",selected:!1},{name:"苗栗縣",selected:!1},{name:"彰化縣",selected:!1},{name:"南投縣",selected:!1},{name:"雲林縣",selected:!1},{name:"嘉義縣",selected:!1},{name:"屏東縣",selected:!1},{name:"宜蘭縣",selected:!1},{name:"花蓮縣",selected:!1},{name:"臺東縣",selected:!1},{name:"澎湖縣",selected:!1},{name:"金門縣",selected:!1},{name:"連江縣",selected:!1},{name:"基隆市",selected:!1}],selectCities:[]}},computed:(0,u.Z)({},(0,n.rn)(["listPageType"])),mounted:function(){var e=JSON.parse(localStorage.getItem("selectCities"));e&&e.length&&(this.cities=e)},methods:{setCities:function(){this.dialog=!1,localStorage.setItem("selectCities",JSON.stringify(this.cities))},addCity:function(e){console.log(e),this.cities.map((function(t){return t.name===e.name&&(t.selected=!t.selected),t}))}}},l=r,o=a(1001),c=a(3453),m=a.n(c),d=a(3130),p=a(3237),v=a(9846),g=a(2912),h=a(6428),q=a(7047),f=a(6816),b=a(7620),_=a(5398),x=a(459),C=a(9762),k=a(5337),S=a(7921),V=(0,o.Z)(l,i,s,!1,null,null,null),y=V.exports;m()(V,{VAppBar:d.Z,VCard:p.Z,VContainer:v.Z,VDialog:g.Z,VIcon:h.Z,VImg:q.Z,VList:f.Z,VListItem:b.Z,VListItemContent:_.km,VListItemIcon:x.Z,VSpacer:C.Z,VTextField:k.Z,VToolbarItems:S.lj})},3899:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-15"},[a("app-bar",{attrs:{showBtn:!0,title:"檔期列表"}}),e._l(e.schedule,(function(t,i){return a("v-card",{key:i,staticClass:"d-flex",attrs:{outlined:"",tile:""},on:{click:function(a){e.$router.push("/schedule-detail"),e.toDetail(t)}}},[a("v-card-text",[a("div",{staticClass:"d-flex justify-space-between"},[a("div",[e._v(" "+e._s(t.date)+" ")]),a("div",[a("v-icon",{attrs:{size:"18"}},[e._v("share")]),a("v-icon",{staticClass:"ml-1",attrs:{size:"18"}},[e._v("favorite_border")])],1)]),a("div",[e._v(e._s(t.name))])])],1)})),[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.dialogData.name))])]),a("v-card-text",[a("div",{staticClass:"d-flex justify-space-between"},[a("div",[e._v(" "+e._s(e.dialogData.date)+" ")]),a("v-icon",{attrs:{size:"18"}},[e._v("share")])],1),a("p",[e._v(e._s(e.dialogData.name))]),a("p",[e._v(e._s(e.dialogData.detail))]),e._v(" "+e._s(e.dialogData.phone)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"info darken-1",text:"",disabled:"已在最愛"===e.dialogText},on:{click:e.setFav}},[e._v(" "+e._s(e.dialogText)+" ")]),a("v-btn",{attrs:{color:"info darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 關閉 ")])],1)],1)],1)],1)]],2)},s=[],u=(a(4553),a(8862),a(355)),n={components:{AppBar:u.Z},data:function(){return{dialog:!1,schedule:[{date:"04/01 ~ 04/04",name:"孕媽咪與寶貝活動",detail:"10/07-10台北世貿一館！全球百大精品孕嬰領導品牌、破萬件婦幼夯品強勢出擊！廣蒐全球最新、詢問度最高之人氣婦嬰商品，並邀請各路婦幼翹楚與育兒專家共同分享孕期與育兒知識，更有多款優質明星商品折扣優惠，展場獨家超值限定商品！展覽商品包含孕婦服裝、孕哺衣、哺乳枕、媽媽包、保養品、營養補給品、塑身衣、彌月蛋糕/油飯/餅乾、彌月禮品、嬰兒食品、營養補充、玩具、推車、安全坐椅、幼兒衛浴、嬰兒床寢、各式教材器具、兒童圖書等，所有商品應有盡有，展覽現場更有限量福袋免費領、萬元推車一元抽、上聯獨家優惠商品、寶寶運動會等活動!",phone:"886-2-27597167"},{date:"04/08 ~ 04/11",name:"2022台北國際酒展-純酒展",detail:"Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",phone:"886-2--26596000#172"},{date:"04/08 ~ 04/11",name:"第32屆台北電器空調３Ｃ大展",detail:"Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",phone:"886-2-25064871Ext26"},{date:"04/14 ~ 04/16",name:"台灣電子遊戲機國際產業展",detail:"Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",phone:"886-2-27607407-204"},{date:"04/21 ~ 04/24",name:"2022台北國際禮品文具暨文創展",detail:"Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",phone:"886-2-27255200"},{date:"04/21 ~ 04/24",name:"台北國際禮品文具暨文創展",detail:"台北世界貿易中心,中華民國對外貿易發展協會、 台灣區藝品禮品輸出業同業公會、 台灣區教育用品工業同業公會、 台灣區手提包輸出業同業公會、 台灣區玩具暨孕嬰童用品工業同業公會",phone:"886-2-27255200"},{date:"04/22 ~ 04/24",name:"2022台北國際婚紗展、2022台北國際珠寶玉石展",detail:"Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.Nostra urna at, magna at neque sed sed ante imperdiet, dolormauris cursus velit, velit non, sem nec. Volutpat sem ridiculusplacerat leo, augue in, duis erat proin condimentum in a eget, sedfermentum sed vestibulum varius ac, vestibulum volutpat orci utelit eget tortor. Ultrices nascetur nulla gravida ante arcu.Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsumpellentesque, vitae id quam ut mauris dui tempor, aptent non.Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus.Amet donec vestibulum mattis commodo, nulla aliquet, nibhpraesent, elementum nulla. Sit lacus pharetra tempus magna nequepellentesque, nulla vel erat. Justo ex quisque nulla accusamusvenenatis, sed quis. Nibh phasellus gravida metus in, fusce aeneanut erat commodo eros. Ut turpis, dui integer, nonummy pede placeatnec in sit leo. Faucibus porttitor illo taciti odio, amet viverrascelerisque quis quis et tortor, curabitur morbi a. Enim temporat, rutrum elit condimentum, amet rutrum vitae tempor torquentnunc.",phone:"886-2-27597167#113"}],dialogData:{},dialogText:"加到最愛"}},methods:{setDialog:function(e){this.dialogData=e;var t=JSON.parse(localStorage.getItem("favList")),a=-1;t&&(a=t.findIndex((function(t){return t.phone===e.phone}))),console.log("findIndex",a),this.dialogText=-1==a?"加到最愛":"已在最愛"},setFav:function(){this.dialog=!1;var e=null;localStorage.getItem("favList")?(e=JSON.parse(localStorage.getItem("favList")),e.push(this.dialogData)):e=[this.dialogData],localStorage.setItem("favList",JSON.stringify(e))},toDetail:function(e){localStorage.setItem("toDetail",JSON.stringify(e))}}},r=n,l=a(1001),o=a(3453),c=a.n(o),m=a(680),d=a(3237),p=a(7118),v=a(2912),g=a(6428),h=a(2877),q=a(9762),f=(0,l.Z)(r,i,s,!1,null,null,null),b=f.exports;c()(f,{VBtn:m.Z,VCard:d.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VDialog:v.Z,VIcon:g.Z,VRow:h.Z,VSpacer:q.Z})}}]);
//# sourceMappingURL=899-legacy.ae8805c6.js.map