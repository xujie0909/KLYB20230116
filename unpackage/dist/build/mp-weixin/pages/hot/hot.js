(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hot/hot"],{"59c8":function(t,n,e){"use strict";e.r(n);var a=e("b7ac"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"5e66":function(t,n,e){"use strict";(function(t,n){var a=e("4ea4");e("be05");a(e("66fd"));var o=a(e("d535"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},a31e:function(t,n,e){"use strict";var a=e("e91d"),o=e.n(a);o.a},b5c5:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=(this._self._c,this.setting.background&&this.setting.background.length>0),e=this.setting.title.length>0||this.setting.description.length>0,a=this.posts.length;this.$mp.data=Object.assign({},{$root:{g0:n,g1:e,g2:a}})},o=[]},b7ac:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("795a"),o=e("db2e"),i=e("e4d6"),r={data:function(){return this.default={background:"",title:"热门标题，请在后台修改",description:"热门描述，请在后台修改"},this.sorts=["views","likes","favorites","comments"],{setting:{background:"",title:"",description:""},tabbar:["浏览数","点赞数","收藏数","评论数"],currentTab:0,posts:[],loadding:!1,pullUpOn:!0,loaded:!1,tl_background:""}},components:{JiangqieLoadmore:function(){e.e("components/loadmore/loadmore").then(function(){return resolve(e("5d6a"))}.bind(null,e)).catch(e.oe)},JiangqieNomore:function(){e.e("components/nomore/nomore").then(function(){return resolve(e("b376"))}.bind(null,e)).catch(e.oe)},JiangqieNoData:function(){e.e("components/nodata/nodata").then(function(){return resolve(e("77c5"))}.bind(null,e)).catch(e.oe)}},onLoad:function(t){var n=this;i.get(o.JIANGQIE_SETTING_HOT).then((function(t){n.setting={background:t.data.background,title:t.data.title?t.data.title:n.default.title,description:t.data.description?t.data.description:n.default.description},n.tl_background=t.data.tl_background})),this.loadPosts(!0)},onShow:function(){},onReachBottom:function(){this.pullUpOn&&this.loadPosts(!1)},onShareAppMessage:function(){return{title:getApp().globalData.appName,path:"pages/index/index"}},onShareTimeline:function(){return{title:getApp().globalData.appName}},methods:{swichNav:function(t){var n=t.currentTarget.dataset.current;if(this.currentTab==n)return!1;this.currentTab=n,this.loadPosts(!0)},handlerHotArticle:function(n){var e=n.currentTarget.dataset.id;t.navigateTo({url:"/pages/article/article?post_id="+e})},loadPosts:function(t){var n=this;this.loadding=!0,i.get(o.JIANGQIE_POSTS_HOT,{offset:t?0:this.posts.length,sort:this.sorts[this.currentTab]}).then((function(e){n.loaded=!0,n.loadding=!1,n.posts=t?e.data:n.posts.concat(e.data),n.pullUpOn=e.data.length>=a.JQ_PER_PAGE_COUNT}))}}};n.default=r}).call(this,e("543d")["default"])},d535:function(t,n,e){"use strict";e.r(n);var a=e("b5c5"),o=e("59c8");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("a31e");var r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"13ba74b0",null,!1,a["a"],void 0);n["default"]=c.exports},e91d:function(t,n,e){}},[["5e66","common/runtime","common/vendor"]]]);