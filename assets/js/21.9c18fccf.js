(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{330:function(t,e,i){},382:function(t,e,i){"use strict";var n=i(330);i.n(n).a},414:function(t,e,i){"use strict";i.r(e);i(20);var n={data:function(){return{changeTime:"5000",index:2,imgSrc:"",active:"active"}},mounted:function(){this.updateTime(this.changeTime),this.randomPic()},updated:function(){},methods:{randomPic:function(){var t=this,e=["kQWXr.gif","rddek.gif"];document.getElementById("imgShow");setInterval((function(){"active"==t.active?t.active="noActive":t.active="active",t.imgSrc="/znote/view/"+e[Math.floor(Math.random()*e.length)]}),5e3)},updateTime:function(t){var e=this;setInterval((function(){e.index%2==0&&(e.changeTime="5000"),e.index%2!=0&&(e.changeTime=t),e.index++}),6e3)}}},a=(i(382),i(2)),o=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{attrs:{id:"fj"}},[i("center",[i("p",[i("RouterLink",{attrs:{to:"/views/React/20201209-前端面试题目.html"}},[t._v("[React]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/Java/20201208-ArrayList原理.html"}},[t._v("[Java]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/读书笔记/20191026-刻意学习.html"}},[t._v("[读书笔记]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/人工智能/20191026-编译C++TensorFlow.html"}},[t._v("[人工智能]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/Vue/20201209-Vue插件Boxx.html"}},[t._v("[Vue]")]),i("br")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/views/网络通信/20191026-spacedesk.html"}},[t._v("[网络通信]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/C++/20191026-动态分配内存与泄露.html"}},[t._v("[C++]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/Git/20201209-Git指令集.html"}},[t._v("[Git]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/Linux/20201209-linux自用命令.html"}},[t._v("[Linux]")]),t._v(" | "),i("RouterLink",{attrs:{to:"/views/数据库/20201208-数据库复习题.html"}},[t._v("[数据库]")]),i("br")],1)])],1)])}),[],!1,null,"90f0ab08",null);e.default=o.exports}}]);