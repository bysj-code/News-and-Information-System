(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xinwenshipin/add-or-update"],{"0744":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var s=e[u](a),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function s(e){u(a,i,r,s,o,"next",e)}function o(e){u(a,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("313f"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{ruleForm:{shipinbiaoti:"",fenlei:"",tupian:"",jianjie:"",shipin:"",faburiqi:"",thumbsupnum:"",crazilynum:""},fenleiOptions:[],fenleiIndex:0,user:{},ro:{shipinbiaoti:!1,fenlei:!1,tupian:!1,jianjie:!1,shipin:!1,faburiqi:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var t=a(i.default.mark((function t(n){var r,u,a,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.faburiqi=this.$utils.getCurDate(),r=e.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:return u=t.sent,this.user=u.data,t.next=8,this.$api.option("shipinfenlei","fenlei",{});case 8:if(u=t.sent,this.fenleiOptions=u.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=18;break}return this.ruleForm.id=n.id,t.next=16,this.$api.info("xinwenshipin",this.ruleForm.id);case 16:u=t.sent,this.ruleForm=u.data;case 18:if(!n.cross){t.next=57;break}a=e.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 21:if((t.t1=t.t0()).done){t.next=57;break}if(s=t.t1.value,"shipinbiaoti"!=s){t.next=27;break}return this.ruleForm.shipinbiaoti=a[s],this.ro.shipinbiaoti=!0,t.abrupt("continue",21);case 27:if("fenlei"!=s){t.next=31;break}return this.ruleForm.fenlei=a[s],this.ro.fenlei=!0,t.abrupt("continue",21);case 31:if("tupian"!=s){t.next=35;break}return this.ruleForm.tupian=a[s],this.ro.tupian=!0,t.abrupt("continue",21);case 35:if("jianjie"!=s){t.next=39;break}return this.ruleForm.jianjie=a[s],this.ro.jianjie=!0,t.abrupt("continue",21);case 39:if("shipin"!=s){t.next=43;break}return this.ruleForm.shipin=a[s],this.ro.shipin=!0,t.abrupt("continue",21);case 43:if("faburiqi"!=s){t.next=47;break}return this.ruleForm.faburiqi=a[s],this.ro.faburiqi=!0,t.abrupt("continue",21);case 47:if("thumbsupnum"!=s){t.next=51;break}return this.ruleForm.thumbsupnum=a[s],this.ro.thumbsupnum=!0,t.abrupt("continue",21);case 51:if("crazilynum"!=s){t.next=55;break}return this.ruleForm.crazilynum=a[s],this.ro.crazilynum=!0,t.abrupt("continue",21);case 55:t.next=21;break;case 57:this.styleChange();case 58:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(e){this.ruleForm.faburiqi=e.target.value,this.$forceUpdate()},fenleiChange:function(e){this.fenleiIndex=e.target.value,this.ruleForm.fenlei=this.fenleiOptions[this.fenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},shipinTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.shipin=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.shipinbiaoti){e.next=3;break}return this.$utils.msg("视频标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.fenlei){e.next=6;break}return this.$utils.msg("分类不能为空"),e.abrupt("return");case 6:if(this.ruleForm.tupian){e.next=9;break}return this.$utils.msg("图片不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=12;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=15;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("xinwenshipin",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("xinwenshipin",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])},"0aba":function(e,t,n){},1084:function(e,t,n){"use strict";(function(e){n("9221"),n("921b");i(n("66fd"));var t=i(n("c3aa"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},c3aa:function(e,t,n){"use strict";n.r(t);var i=n("ce87"),r=n("df7c");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("f1a7");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"e28363a6",null,!1,i["a"],a);t["default"]=o.exports},ce87:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))},df7c:function(e,t,n){"use strict";n.r(t);var i=n("0744"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},f1a7:function(e,t,n){"use strict";var i=n("0aba"),r=n.n(i);r.a}},[["1084","common/runtime","common/vendor"]]]);