(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{459:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("React中，父组件传值子组件可利用props，子组件传值父组件利用自定义事件 "),n("br"),t._v("\n注意使用方法，父组件render使用子组件时绑定自定义事件作为属性，注意这个地方不需要绑定参数表"),n("br"),t._v("\n注意，需要在父组件的构造函数里写清楚this.funname = this.funname.bind(this); 或者像下面的chooise例子一样在子组件参数里写清楚bind "),n("br"),t._v("\n看一个网上的例子")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//父组件\nclass App extends React.Component {\n\tconstructor(){\n\t\tsuper();\n\t\tthis.state = {\n\t\t\tlist:['苹果','香蕉','鸭梨'],\n\t\t\tresult:''\n\t\t}\n\t}\n\tchooise(item){\n\t\tthis.setState({\n\t\t\tresult:item\n\t\t})\n\t}\n\trender(){\n\t\treturn(\n\t\t\t<div>\n\t\t\t\t//这里绑定父组件的方法给子组件的chooise属性，子组件里直接通过this.props.chooise()的方式就可以使用父组件中的chooise方法了\n\t\t\t\t<Bar chooise={this.chooise.bind(this)} list={this.state.list} /> \n\t\t\t\t<p>当前选择的结果是：{this.state.result}</p>\n\t\t\t</div>\n\t\t)\n\t}\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 子组件\nclass Bar extends React.Component {\n\thandleClick(item){\n\t\tthis.props.chooise(item)\n\t}\n\trender(){\n\t\treturn(\n\t\t\t<div>\n\t\t\t\t<ul>\n\t\t\t\t\t{\n\t\t\t\t\t\tthis.props.list.map((item,index) => \n\t\t\t\t\t\t\t<li onClick={this.handleClick.bind(this,item)} key={index}>{item}</li>\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t)\n\t}\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);