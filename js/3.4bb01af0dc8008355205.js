webpackJsonp([3],{"0fzZ":function(t,e,r){var o=r("xIzU");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r("rjj0").default)("7ad61a22",o,!1,{})},TnYN:function(t,e,r){var o=r("n6bX");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r("rjj0").default)("a54d12a4",o,!1,{})},lfHO:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"footer"}},[r("ul",{staticClass:"nav"},[r("li",[r("router-link",{attrs:{to:"guide"}},[t._v("Documentation")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"examples"}},[t._v("Examples")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"configurator"}},[t._v("Configuration generator")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"contacts"}},[t._v("Contact")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"support"}},[t._v("Donate")])],1)]),t._v(" "),t._m(0),t._v(" "),r("router-link",{attrs:{to:"/"}},[r("svg",{staticClass:"logo"},[r("use",{attrs:{"xlink:href":"/statics/svg-defs.svg#logo_AutoNumeric_flat"}})])])],1)},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"copyright"},[this._v("Copyright 2018 © "),e("a",{attrs:{href:"mailto:alexandre.bonneau@linuxfr.eu"}},[this._v("Alexandre Bonneau")])])}];o._withStripped=!0;var i=r("XyMi"),n=!1;var l=function(t){n||r("0fzZ")},s=Object(i.a)({data:function(){return{}}},o,a,!1,l,null,null);s.options.__file="src/layouts/Footer.vue";var u={name:"app",components:{MainFooter:s.exports},data:function(){return{layoutStore:{view:"lHr Lpr lff",reveal:!0,leftScroll:!0,rightScroll:!1,leftBreakpoint:3e3,rightBreakpoint:9999,hideTabs:!0},leftDrawerOpen:!1}},computed:{},methods:{toggleLeftDrawer:function(){this.leftDrawerOpen=!this.leftDrawerOpen}}},c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:t.layoutStore.view,"left-breakpoint":t.layoutStore.leftBreakpoint,"right-breakpoint":t.layoutStore.rightBreakpoint}},[r("q-layout-header",[r("q-toolbar",{attrs:{color:"primary"}},[r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu","aria-label":"Menu"},on:{click:t.toggleLeftDrawer}}),t._v(" "),r("q-toolbar-title",[r("router-link",{staticClass:"homeLink",attrs:{to:"/"}},[t._v("AutoNumeric.js")])],1)],1)],1),t._v(" "),r("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-grey-2":null,side:"left"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[r("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[r("q-list-header",[t._v("Navigation")]),t._v(" "),r("q-item",{attrs:{to:"/"}},[r("q-item-side",{attrs:{icon:"home"}}),t._v(" "),r("q-item-main",{attrs:{label:"Home",sublabel:"AutoNumeric homepage"}}),t._v(" "),r("q-item-side",{attrs:{right:"",icon:"grade"}})],1),t._v(" "),r("q-item",{attrs:{to:"/guide"}},[r("q-item-side",{attrs:{icon:"collections_bookmark"}}),t._v(" "),r("q-item-main",{attrs:{label:"Documentation",sublabel:"View the guide"}})],1),t._v(" "),r("q-item",{attrs:{to:"/examples"}},[r("q-item-side",{attrs:{icon:"euro_symbol"}}),t._v(" "),r("q-item-main",{attrs:{label:"Examples",sublabel:"View thy code source"}})],1),t._v(" "),r("q-item",{attrs:{to:"/configurator"}},[r("q-item-side",{attrs:{icon:"developer_board"}}),t._v(" "),r("q-item-main",{attrs:{label:"Configurator",sublabel:"Generate your custom options"}})],1),t._v(" "),r("q-item",{attrs:{to:"/contacts"}},[r("q-item-side",{attrs:{icon:"question_answer"}}),t._v(" "),r("q-item-main",{attrs:{label:"Contacts",sublabel:"Contact us"}})],1),t._v(" "),r("q-item",{attrs:{to:"/support"}},[r("q-item-side",{attrs:{icon:"thumb_up"}}),t._v(" "),r("q-item-main",{attrs:{label:"Support",sublabel:"Donate to support development"}})],1)],1)],1),t._v(" "),r("q-page-container",[r("router-view",{on:{toggleLeftSidebar:t.toggleLeftDrawer}})],1),t._v(" "),r("main-footer",{attrs:{slot:"footer"},slot:"footer"})],1)},m=[];c._withStripped=!0;var p=!1;var f=function(t){p||r("TnYN")},v=Object(i.a)(u,c,m,!1,f,null,null);v.options.__file="src/layouts/default.vue";e.default=v.exports},n6bX:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"\nmain {\n  /*margin-top : 40px;*/\n}\n.homeLink {\n  color: white !important;\n}\n.homeLink:active, .homeLink:hover {\n    color: white;\n}\n.construction {\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n}\n",""])},xIzU:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])}});