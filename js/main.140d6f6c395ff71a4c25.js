!function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(u&&u(e);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={0:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([15,1]),n()}({15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=(n(11),n(1)),o=n.n(i),r=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var l=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},c=function(t){return s({},t)},u=r.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),f=["locale","showMonths"],d={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return null===t||t instanceof Date||"string"==typeof t||t instanceof String||t instanceof Array||"number"==typeof t}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return r}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var e=c(this.config);this.events.forEach((function(n){var a,i=o.a.defaultConfig[n]||[];e[n]=(a=e[n]||[],a instanceof Array?a:[a]).concat(i,(function(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];t.$emit.apply(t,[l(n)].concat(a))}))})),e.defaultDate=this.value||e.defaultDate,this.fp=new o.a(this.getElem(),e),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var e=this,n=t.target;this.$nextTick((function(){e.$emit("input",n.value)}))},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",t.target.value)},onClose:function(t,e){this.$emit("input",e)},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var e=this,n=c(t);u.forEach((function(t){delete n[t]})),this.fp.set(n),f.forEach((function(t){void 0!==n[t]&&e.fp.set(t,n[t])}))}},value:function(t){t!==this.$el.value&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};d.install=function(t,e){var n="flat-pickr";"string"==typeof e&&(n=e),t.component(n,d)};var p=d,m=(n(12),n(3)),v=n(4),h=n(5),b=n.n(h),g=(n(13),n(6)),_=n.n(g);n(14);o.a.setDefaults({disableMobile:!0,onClose:function(){}}),a.a.use(p);var C={name:"app",data:function(){return{inputDisabled:!1,form:{dateBasic:null,dateTime:null,time:null,date:"2017-01-01",dateLocale:null,dateInline:+new Date,dateConfirm:null,allowInput:null,dateStart:null,dateEnd:null,monthSelect:null},configs:{basic:{},wrap:{wrap:!0,altFormat:"M\tj, Y",altInput:!0,dateFormat:"Y-m-d",minDate:new Date},timePicker:{wrap:!0,enableTime:!0,enableSeconds:!0,noCalendar:!0},dateTimePicker:{enableTime:!0,dateFormat:"d-m-Y H:i"},locale:{locale:m.Hindi,onChange:this.onChange},inline:{inline:!0},confirmPlugin:{enableTime:!0,plugins:[new b.a]},allowInput:{allowInput:!0,dateFormat:"Y-m-d"},start:{minDate:new Date,maxDate:null},end:{minDate:null},monthSelect:{plugins:[new _.a({shorthand:!0,dateFormat:"m/Y"})]}}}},methods:{setNewDate:function(){this.form.dateBasic=new Date},updateConfig:function(){this.$set(this.configs.basic,"mode","range")},changeLocale:function(){this.$set(this.configs.locale,"locale",v.english)},onChange:function(t,e,n){},listenToOnChangeEvent:function(t,e,n){},submit:function(){},onStartChange:function(t,e,n){this.$set(this.configs.end,"minDate",e)},onEndChange:function(t,e,n){this.$set(this.configs.start,"maxDate",e)}},mounted:function(){this.$refs.datePickerWrap.fp}},k=n(7),y=Object(k.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("main",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("section",{staticClass:"card mb-3"},[n("div",{staticClass:"card-body"},[n("form",{staticClass:"form-inline"},[n("button",{staticClass:"btn btn-secondary mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setNewDate(e)}}},[t._v("\n                Set new date\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-secondary mx-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateConfig(e)}}},[t._v("\n                Reactive configs\n              ")]),t._v(" "),n("button",{staticClass:"btn btn-secondary mx-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.changeLocale(e)}}},[t._v("\n                Change locale\n              ")])])])]),t._v(" "),n("form",{staticClass:"card card-body mb-3",attrs:{method:"post",action:"/",novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[n("div",{staticClass:"form-group"},[n("label",[t._v("Select date (basic)")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.basic},model:{value:t.form.dateBasic,callback:function(e){t.$set(t.form,"dateBasic",e)},expression:"form.dateBasic"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select date (wrap)")]),t._v(" "),n("div",{staticClass:"input-group"},[n("flat-pickr",{ref:"datePickerWrap",staticClass:"form-control",attrs:{placeholder:"Select date",config:t.configs.wrap,required:!0,name:"date-name",disabled:t.inputDisabled},on:{"on-change":t.listenToOnChangeEvent},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}}),t._v(" "),t._m(1)],1)]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select datetime")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.dateTimePicker,id:"datetime-input",placeholder:"Date Time"},model:{value:t.form.dateTime,callback:function(e){t.$set(t.form,"dateTime",e)},expression:"form.dateTime"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select time")]),t._v(" "),n("div",{staticClass:"input-group"},[n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.timePicker,placeholder:"Time"},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}}),t._v(" "),t._m(2)],1)]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select date (localization)")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.locale},model:{value:t.form.dateLocale,callback:function(e){t.$set(t.form,"dateLocale",e)},expression:"form.dateLocale"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select date (inline)")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.inline},model:{value:t.form.dateInline,callback:function(e){t.$set(t.form,"dateInline",e)},expression:"form.dateInline"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select date (confirm plugin)")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.confirmPlugin},model:{value:t.form.dateConfirm,callback:function(e){t.$set(t.form,"dateConfirm",e)},expression:"form.dateConfirm"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Select date (allow input "),n("code",[t._v(t._s(t.configs.allowInput.dateFormat))]),t._v(")")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.allowInput},model:{value:t.form.allowInput,callback:function(e){t.$set(t.form,"allowInput",e)},expression:"form.allowInput"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Month picker plugin")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.monthSelect},model:{value:t.form.monthSelect,callback:function(e){t.$set(t.form,"monthSelect",e)},expression:"form.monthSelect"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Start date ")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.start},on:{"on-change":t.onStartChange},model:{value:t.form.dateStart,callback:function(e){t.$set(t.form,"dateStart",e)},expression:"form.dateStart"}})],1)]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[n("label",[t._v("End date ")]),t._v(" "),n("flat-pickr",{staticClass:"form-control",attrs:{config:t.configs.end},on:{"on-change":t.onEndChange},model:{value:t.form.dateEnd,callback:function(e){t.$set(t.form,"dateEnd",e)},expression:"form.dateEnd"}})],1)])]),t._v(" "),n("hr"),t._v(" "),t._m(3)])]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3"},[e("span",{staticClass:"navbar-brand mb-0"},[this._v("Vue-flatPickr Demo")]),this._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/ankurk91/vue-flatpickr-component",target:"_blank"}},[this._v("GitHub")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button",title:"Toggle","data-toggle":""}},[this._v("\n                  Toggle\n                ")]),this._v(" "),e("button",{staticClass:"btn btn-danger",attrs:{type:"button",title:"Clear","data-clear":""}},[this._v("\n                  Clear\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button",title:"Toggle","data-toggle":""}},[this._v("\n                  Clock\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Submit form")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"col-md-4 mb-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[this._v("\n            Links\n          ")]),this._v(" "),e("div",{staticClass:"card-body"},[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ankurk91/vue-flatpickr-component",target:"_blank"}},[this._v("Github")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-flatpickr-component",target:"_blank"}},[this._v("npm")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://flatpickr.js.org/",rel:"noreferrer",target:"_blank"}},[this._v("Flatpickr docs")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-center text-muted small mb-3"},[this._v("\n    Created by "),e("a",{attrs:{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"}},[this._v("@ankurk91")])])}],!1,null,null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",render:function(t){return t(y)},created:function(){},mounted:function(){}})}});