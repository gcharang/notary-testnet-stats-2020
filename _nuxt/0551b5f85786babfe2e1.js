(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{351:function(t,e,n){"use strict";n.r(e);n(4),n(27),n(71);var r=n(25),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://kmd-data.s3.us-east-2.amazonaws.com/notary-stats-2020/main.json");case 3:return r=(r=e.sent).map((function(t){return t.total=t.RICK.pastCounts.last24+t.MORTY.pastCounts.last24+t.TXSCLAPOW.pastCounts.last24,t.name="".concat(t.name," (").concat(t.address,")"),t.ricktime=t.RICK.timeSinceLastNota,t.ricklink="https://rick.kmd.dev/tx/".concat(t.RICK.lastNotaTxnId),t.mortytime=t.MORTY.timeSinceLastNota,t.mortylink="https://morty.kmd.dev/tx/".concat(t.MORTY.lastNotaTxnId),t.txsclapowtime=t.TXSCLAPOW.timeSinceLastNota,t.txsclapowlink="http://159.69.10.44:54838/tx/".concat(t.TXSCLAPOW.lastNotaTxnId),t})),e.abrupt("return",{notaries:r});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{notaries:{},headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Total",value:"total"},{text:"RICK.total",value:"RICK.pastCounts.last24"},{text:"RICK.lastnota",value:"ricktime"},{text:"MORTY.total",value:"MORTY.pastCounts.last24"},{text:"MORTY.lastNota",value:"mortytime"},{text:"TXSCLAPOW.total",value:"TXSCLAPOW.pastCounts.last24"},{text:"TXSCLAPOW.lastNota",value:"txsclapowtime"}]}},watch:{notaries:function(t){this.$store.commit("setNotaryData",t)}},created:function(){this.$vuetify.theme.dark=!0,this.pollData()},methods:{pollData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t.$axios.$get("https://kmd-data.s3.us-east-2.amazonaws.com/notary-stats-2020/main.json");case 3:return n=e.sent,t.notaries=n.map((function(t){return t.total=t.RICK.pastCounts.last24+t.MORTY.pastCounts.last24+t.TXSCLAPOW.pastCounts.last24,t.name="".concat(t.name," (").concat(t.address,")"),t.ricktime=t.RICK.timeSinceLastNota,t.ricklink="https://rick.kmd.dev/tx/".concat(t.RICK.lastNotaTxnId),t.mortytime=t.MORTY.timeSinceLastNota,t.mortylink="https://morty.kmd.dev/tx/".concat(t.MORTY.lastNotaTxnId),t.txsclapowtime=t.TXSCLAPOW.timeSinceLastNota,t.txsclapowlink="http://159.69.10.44:54838/tx/".concat(t.TXSCLAPOW.lastNotaTxnId),t})),e.next=7,t.delay(3e4);case 7:e.next=0;break;case 9:case"end":return e.stop()}}),e)})))()},delay:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))()}}},c=n(64),l=n(128),m=n.n(l),d=n(306),k=n(304),x=n(350),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[t._v("Last 24 Hours")]),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.notaries,"sort-by":["total"],"items-per-page":50,"sort-desc":[!0],"multi-sort":"","item-key":"name"},scopedSlots:t._u([{key:"item.ricktime",fn:function(e){var r=e.item;return[n("a",{attrs:{target:"_blank",href:r.ricklink}},[t._v(t._s(r.ricktime))])]}},{key:"item.mortytime",fn:function(e){var r=e.item;return[n("a",{attrs:{target:"_blank",href:r.mortylink}},[t._v(t._s(r.mortytime))])]}},{key:"item.txsclapowtime",fn:function(e){var r=e.item;return[n("a",{attrs:{target:"_blank",href:r.txsclapowlink}},[t._v(t._s(r.txsclapowtime))])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:d.a,VCardTitle:k.a,VDataTable:x.a})}}]);