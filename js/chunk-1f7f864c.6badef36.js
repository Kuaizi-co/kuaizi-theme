(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f7f864c"],{d436:function(s,t,r){var e=r("edbe");"string"===typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);var a=r("499e").default;a("be2e276a",e,!0,{})},edbe:function(s,t,r){t=s.exports=r("2350")(!1),t.push([s.i,"\n.demo-box.demo-progress {\n.el-progress--line {\n    margin-bottom: 15px;\n    width: 350px;\n}\n.el-progress--circle {\n    margin-right: 15px;\n}\n}\n",""])},fb0e:function(s,t,r){"use strict";r.r(t);var e=function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("article",{staticClass:"content markdown-body"},[s._m(0),s._v(" "),r("p",[s._v("用于展示操作进度，告知用户当前状态和预期。")]),s._v(" "),s._m(1),s._v(" "),r("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head></head><body><el-progress :percentage="0"></el-progress>\n<el-progress :percentage="70"></el-progress>\n<el-progress :percentage="80" color="#8e71c7"></el-progress>\n<el-progress :percentage="100" status="success"></el-progress>\n<el-progress :percentage="50" status="exception"></el-progress>\n</body></html>',script:null,style:null}}},[r("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[r("html",[r("body",[r("el-progress",{attrs:{percentage:0}}),s._v(" "),r("el-progress",{attrs:{percentage:70}}),s._v(" "),r("el-progress",{attrs:{percentage:80,color:"#8e71c7"}}),s._v(" "),r("el-progress",{attrs:{percentage:100,status:"success"}}),s._v(" "),r("el-progress",{attrs:{percentage:50,status:"exception"}})],1)])]),s._v(" "),r("p",[s._v("Progress 组件设置"),r("code",[s._v("percentage")]),s._v("属性即可，表示进度条对应的百分比，"),r("strong",[s._v("必填")]),s._v("，必须在 0-100。")]),s._v(" "),r("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"70"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"80"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#8e71c7"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"exception"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),r("p",[s._v("百分比不占用额外控件，适用于文件上传等场景。")]),s._v(" "),r("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head></head><body><el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>\n<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>\n<el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>\n<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>\n<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>\n</body></html>',script:null,style:null}}},[r("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[r("html",[r("body",[r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:0}}),s._v(" "),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:70}}),s._v(" "),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:80,color:"rgba(142, 113, 199, 0.7)"}}),s._v(" "),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}}),s._v(" "),r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:50,status:"exception"}})],1)])]),s._v(" "),r("p",[s._v("Progress 组件可通过 "),r("code",[s._v("stroke-width")]),s._v(" 属性更改进度条的高度，并可通过 "),r("code",[s._v("text-inside")]),s._v(" 属性来将进度条描述置于进度条内部。")]),s._v(" "),r("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text-inside")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"18"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text-inside")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"18"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"70"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text-inside")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"18"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"80"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rgba(142, 113, 199, 0.7)"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text-inside")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"18"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":text-inside")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":stroke-width")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"18"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"exception"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(3),s._v(" "),r("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head></head><body><el-progress type="circle" :percentage="0"></el-progress>\n<el-progress type="circle" :percentage="25"></el-progress>\n<el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>\n<el-progress type="circle" :percentage="100" status="success"></el-progress>\n<el-progress type="circle" :percentage="50" status="exception"></el-progress>\n<el-progress type="circle" :percentage="100" status="text">Done</el-progress>\n</body></html>',script:null,style:null}}},[r("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[r("html",[r("body",[r("el-progress",{attrs:{type:"circle",percentage:0}}),s._v(" "),r("el-progress",{attrs:{type:"circle",percentage:25}}),s._v(" "),r("el-progress",{attrs:{type:"circle",percentage:80,color:"#8e71c7"}}),s._v(" "),r("el-progress",{attrs:{type:"circle",percentage:100,status:"success"}}),s._v(" "),r("el-progress",{attrs:{type:"circle",percentage:50,status:"exception"}}),s._v(" "),r("el-progress",{attrs:{type:"circle",percentage:100,status:"text"}},[s._v("Done")])],1)])]),s._v(" "),r("p",[s._v("Progress 组件可通过 "),r("code",[s._v("type")]),s._v(" 属性来指定使用环形进度条，在环形进度条中，还可以通过 "),r("code",[s._v("width")]),s._v(" 属性来设置其大小。")]),s._v(" "),r("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"25"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"80"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#8e71c7"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"exception"')]),s._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":percentage")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("status")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v("Done"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-progress")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(4),s._v(" "),s._m(5)],1)},a=[function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("h2",{attrs:{id:"progress-jin-du-tiao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#progress-jin-du-tiao","aria-hidden":"true"}},[s._v("¶")]),s._v(" Progress 进度条")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("h3",{attrs:{id:"xian-xing-jin-du-tiao-bai-fen-bi-wai-xian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xian-xing-jin-du-tiao-bai-fen-bi-wai-xian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 线形进度条 — 百分比外显")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("h3",{attrs:{id:"xian-xing-jin-du-tiao-bai-fen-bi-nei-xian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#xian-xing-jin-du-tiao-bai-fen-bi-nei-xian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 线形进度条 — 百分比内显")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("h3",{attrs:{id:"huan-xing-jin-du-tiao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#huan-xing-jin-du-tiao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 环形进度条")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("h3",{attrs:{id:"attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[s._v("¶")]),s._v(" Attributes")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",[s._v("参数")]),s._v(" "),r("th",[s._v("说明")]),s._v(" "),r("th",[s._v("类型")]),s._v(" "),r("th",[s._v("可选值")]),s._v(" "),r("th",[s._v("默认值")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[s._v("percentage")])]),s._v(" "),r("td",[r("strong",[s._v("百分比（必填）")])]),s._v(" "),r("td",[s._v("number")]),s._v(" "),r("td",[s._v("0-100")]),s._v(" "),r("td",[s._v("0")])]),s._v(" "),r("tr",[r("td",[s._v("type")]),s._v(" "),r("td",[s._v("进度条类型")]),s._v(" "),r("td",[s._v("string")]),s._v(" "),r("td",[s._v("line/circle")]),s._v(" "),r("td",[s._v("line")])]),s._v(" "),r("tr",[r("td",[s._v("stroke-width")]),s._v(" "),r("td",[s._v("进度条的宽度，单位 px")]),s._v(" "),r("td",[s._v("number")]),s._v(" "),r("td",[s._v("—")]),s._v(" "),r("td",[s._v("6")])]),s._v(" "),r("tr",[r("td",[s._v("text-inside")]),s._v(" "),r("td",[s._v("进度条显示文字内置在进度条内（只在 type=line 时可用）")]),s._v(" "),r("td",[s._v("boolean")]),s._v(" "),r("td",[s._v("—")]),s._v(" "),r("td",[s._v("false")])]),s._v(" "),r("tr",[r("td",[s._v("status")]),s._v(" "),r("td",[s._v("进度条当前状态")]),s._v(" "),r("td",[s._v("string")]),s._v(" "),r("td",[s._v("success/exception/text")]),s._v(" "),r("td",[s._v("—")])]),s._v(" "),r("tr",[r("td",[s._v("color")]),s._v(" "),r("td",[s._v("进度条背景色（会覆盖 status 状态颜色）")]),s._v(" "),r("td",[s._v("string")]),s._v(" "),r("td",[s._v("—")]),s._v(" "),r("td",[s._v("—")])]),s._v(" "),r("tr",[r("td",[s._v("width")]),s._v(" "),r("td",[s._v("环形进度条画布宽度（只在 type=circle 时可用）")]),s._v(" "),r("td",[s._v("number")]),s._v(" "),r("td"),s._v(" "),r("td",[s._v("126")])]),s._v(" "),r("tr",[r("td",[s._v("show-text")]),s._v(" "),r("td",[s._v("是否显示进度条文字内容")]),s._v(" "),r("td",[s._v("boolean")]),s._v(" "),r("td",[s._v("—")]),s._v(" "),r("td",[s._v("true")])])])])}],l=r("2455");function p(s){r("d436")}var n=null,_=!1,v=p,c=null,i=null,h=Object(l["a"])(n,e,a,_,v,c,i);t["default"]=h.exports}}]);