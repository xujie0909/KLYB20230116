(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"09a3":function(t,n,a){"use strict";a.r(n);var e=a("9dd3"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},3124:function(t,n,a){"use strict";a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var e={uniNavBar:function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"2da2"))},uniIcons:function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-icons/uni-icons")]).then(a.bind(null,"2a95"))}},i=function(){var t=this,n=t.$createElement,a=(t._self._c,0==t.currentTab?t.slide&&t.slide.length>0:null),e=0==t.currentTab?t.iconNav&&t.iconNav.length>0:null,i=0==t.currentTab?t.hot&&t.hot.length>0:null,o=0==t.currentTab?t.postsLast&&t.postsLast.length>0:null;t.$mp.data=Object.assign({},{$root:{g0:a,g1:e,g2:i,g3:o}})},o=[]},4810:function(t,n,a){"use strict";a.r(n);var e=a("3124"),i=a("09a3");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("da75");var r=a("f0c5"),d=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"0e879b2a",null,!1,e["a"],void 0);n["default"]=d.exports},"9dd3":function(t,n,a){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a("795a"),o=a("db2e"),r=a("5089"),d=a("e4d6"),s={data:function(){return this.bd_title=void 0,this.bd_description=void 0,this.bd_keywords=void 0,this.interstitialAd=void 0,{logo:"",background:void 0,topNav:[{id:0,name:"头条"}],currentTab:0,slide:[],iconNav:[],hot:[],postsLast:[],loaddingLast:!1,pullUpOnLast:!0,posts:[],loadding:!1,pullUpOn:!0,listMode:3,scrollLeft:"",current:"",actives:void 0}},components:{JiangqieLoadmore:function(){a.e("components/loadmore/loadmore").then(function(){return resolve(a("5d6a"))}.bind(null,a)).catch(a.oe)},JiangqieNomore:function(){a.e("components/nomore/nomore").then(function(){return resolve(a("b376"))}.bind(null,a)).catch(a.oe)},uniNavBar:function(){a.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(a("2da2"))}.bind(null,a)).catch(a.oe)}},onLoad:function(n){var a=this;d.get(o.JIANGQIE_SETTING_HOME).then((function(n){var e="/static/images/logo.png";n.data.logo&&n.data.logo.length>0&&(e=n.data.logo),a.logo=e,a.topNav=a.topNav.concat(n.data.top_nav),a.slide=n.data.slide,a.iconNav=n.data.icon_nav,a.actives=n.data.actives,a.hot=n.data.hot,a.listMode=n.data.list_mode,a.background=n.data.slide&&n.data.slide.length>0?n.data.background:"",n.data.title&&n.data.title.length>0&&(getApp().globalData.appName=n.data.title),n.data.wx_ad&&t.createInterstitialAd&&setTimeout((function(){a.interstitialAd=t.createInterstitialAd({adUnitId:n.data.wx_ad}),a.interstitialAd.onLoad((function(){a.interstitialAd.show().catch((function(t){console.error(t)}))})),a.interstitialAd.onError((function(t){})),a.interstitialAd.onClose((function(t){}))}),1e3*parseInt(n.data.wx_ad_delay))})),this.loadPostLast(!0)},onShow:function(){},onReachBottom:function(){if(0==this.currentTab){if(!this.pullUpOnLast)return;this.loadPostLast(!1)}else{if(!this.pullUpOn)return;this.loadPost(!1)}},onShareAppMessage:function(){return{title:getApp().globalData.appName,path:"pages/index/index"}},onShareTimeline:function(){return{title:getApp().globalData.appName}},computed:{StatusBar:function(){}},methods:{handlerSearchClick:function(t){e.navigateTo({url:"/pages/search/search"})},handlerSlideChange:function(t){this.current=t.detail.current},swichNav:function(t){var n=t.currentTarget.dataset.current;if(this.currentTab==n)return!1;this.background=0==n&&this.slide&&this.slide.length>0?o.JIANGQIE_BG_INDEX:"",this.currentTab=n,0!==n&&this.loadPost(!0)},handlerTabMoreClick:function(t){e.switchTab({url:"/pages/categories/categories"})},handlerIconNavClick:function(t){var n=t.currentTarget.dataset.link;r.openLink(n)},handlerActiveClick:function(t){var n=t.currentTarget.dataset.link;r.openLink(n)},handlerArticleClick:function(t){var n=t.currentTarget.dataset.id;e.navigateTo({url:"/pages/article/article?post_id="+n})},loadPostLast:function(t){var n=this;this.loaddingLast=!0;var a=0;t||(a=this.postsLast.length),d.get(o.JIANGQIE_POSTS_LAST,{offset:a}).then((function(a){n.loaddingLast=!1,n.postsLast=t?a.data:n.postsLast.concat(a.data),n.pullUpOnLast=a.data.length>=i.JQ_PER_PAGE_COUNT}))},loadPost:function(t){var n=this;this.loadding=!0;var a=0;t||(a=this.posts.length),d.get(o.JIANGQIE_POSTS_CATEGORY,{offset:a,cat_id:this.topNav[this.currentTab].id}).then((function(a){n.loadding=!1,n.posts=t?a.data:n.posts.concat(a.data),n.pullUpOn=a.data.length>=i.JQ_PER_PAGE_COUNT}))}}};n.default=s}).call(this,a("bc2e")["default"],a("543d")["default"])},d059:function(t,n,a){"use strict";(function(t,n){var e=a("4ea4");a("be05");e(a("66fd"));var i=e(a("4810"));t.__webpack_require_UNI_MP_PLUGIN__=a,n(i.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},d850:function(t,n,a){},da75:function(t,n,a){"use strict";var e=a("d850"),i=a.n(e);i.a}},[["d059","common/runtime","common/vendor"]]]);