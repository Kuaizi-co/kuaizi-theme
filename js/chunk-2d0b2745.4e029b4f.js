(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2745"],{"23d2":function(s,a,t){"use strict";t.r(a);t("7f7f");var e={data:function(){return{uploadLoading:!1,fileList:[]}},methods:{handleRemove:function(s,a){console.log(s,a)},handlePreview:function(s){console.log(s)},handleExceed:function(s,a){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(s.length," 个文件，共选择了 ").concat(s.length+a.length," 个文件"))},beforeRemove:function(s,a){return this.$confirm("确定移除 ".concat(s.name,"？"))},handleUpload:function(){this.uploadLoading=!0},handleSuccess:function(){this.uploadLoading=!1,console.log("handleSuccess")},handleError:function(s){this.uploadLoading=!1,this.$message.error("".concat(s))},handleUploadExcelSuccess:function(s,a){console.warn("√ handleUploadExcelSuccess"),this.fileList.push(a.name)},handleRemoveItem:function(s){return new Promise(function(s){setTimeout(function(){s({status:1,message:"success"})},1e3)})}}},l=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",{staticClass:"content markdown-body"},[t("h1",[s._v("上传组件 Upload")]),s._v(" "),s._m(0),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head></head><body><el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :on-progress="handleUpload" :show-file-list="false" multiple :limit="3" :disabled="uploadLoading" :on-success="handleSuccess" :on-error="handleError" :on-exceed="handleExceed">\n  <el-button size="small" type="upload" icon="kz-icon-shangchuan" :loading="uploadLoading">点击上传</el-button>\n</el-upload>\n\n</body></html>',script:"\n  export default {\n    data() {\n      return {\n        uploadLoading: false,\n        fileList: []\n      };\n    },\n    methods: {\n      handleRemove(file, fileList) {\n        console.log(file, fileList);\n      },\n      handlePreview(file) {\n        console.log(file);\n      },\n      handleExceed(files, fileList) {\n        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);\n      },\n      beforeRemove(file, fileList) {\n        return this.$confirm(`确定移除 ${ file.name }？`);\n      },\n      handleUpload () {\n        this.uploadLoading = true\n      },\n      handleSuccess () {\n        this.uploadLoading = false\n        console.log('handleSuccess')\n      },\n      handleError (err) {\n        this.uploadLoading = false\n        this.$message.error(`${err}`);\n      },\n      handleUploadExcelSuccess (response, file) {\n        console.warn('√ handleUploadExcelSuccess')\n        this.fileList.push(file.name)\n      } \n    }\n  }\n",style:null}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("html",[t("body",[t("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":s.handlePreview,"on-remove":s.handleRemove,"before-remove":s.beforeRemove,"on-progress":s.handleUpload,"show-file-list":!1,multiple:"",limit:3,disabled:s.uploadLoading,"on-success":s.handleSuccess,"on-error":s.handleError,"on-exceed":s.handleExceed}},[t("el-button",{attrs:{size:"small",type:"upload",icon:"kz-icon-shangchuan",loading:s.uploadLoading}},[s._v("点击上传")])],1)],1)])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-upload")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"upload-demo"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("action")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://jsonplaceholder.typicode.com/posts/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-preview")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handlePreview"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-remove")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleRemove"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":before-remove")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"beforeRemove"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-progress")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleUpload"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show-file-list")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("multiple")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":limit")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"uploadLoading"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-success")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleSuccess"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-error")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleError"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-exceed")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleExceed"')]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"upload"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"kz-icon-shangchuan"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"uploadLoading"')]),s._v(">")]),s._v("点击上传"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-button")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-upload")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uploadLoading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fileList")]),s._v(": []\n      };\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleRemove(file, fileList) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(file, fileList);\n      },\n      handlePreview(file) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(file);\n      },\n      handleExceed(files, fileList) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$message.warning("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`当前限制选择 3 个文件，本次选择了 "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${files.length}")]),s._v(" 个文件，共选择了 "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${files.length + fileList.length}")]),s._v(" 个文件`")]),s._v(");\n      },\n      beforeRemove(file, fileList) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$confirm("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`确定移除 "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${ file.name }")]),s._v("？`")]),s._v(");\n      },\n      handleUpload () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".uploadLoading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      },\n      handleSuccess () {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".uploadLoading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'handleSuccess'")]),s._v(")\n      },\n      handleError (err) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".uploadLoading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$message.error("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${err}")]),s._v("`")]),s._v(");\n      },\n      handleUploadExcelSuccess (response, file) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".warn("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'√ handleUploadExcelSuccess'")]),s._v(")\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".fileList.push(file.name)\n      } \n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(1),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head><template>\n  <kz-upload-excel action="https://jsonplaceholder.typicode.com/posts/" :on-success="handleUploadExcelSuccess"></kz-upload-excel>\n  <ul>\n    <li v-for="(f, i) in fileList" :key="i">\n      {{ f }}\n    </li>\n  </ul>\n</template>\n</head><body></body></html>',script:null,style:null}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("html",[t("head",[[t("kz-upload-excel",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-success":s.handleUploadExcelSuccess}}),s._v(" "),t("ul",s._l(s.fileList,function(a,e){return t("li",{key:e},[s._v("\n      "+s._s(a)+"\n    ")])}),0)]],2)])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kz-upload-excel")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("action")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://jsonplaceholder.typicode.com/posts/"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-success")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleUploadExcelSuccess"')]),s._v("\n  >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kz-upload-excel")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("li")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(f, i) in fileList"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"i"')]),s._v("\n    >")]),s._v("\n      {{ f }}\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head><template>\n  <kz-upload-card action="https://jsonplaceholder.typicode.com/posts/" :on-remove="handleRemoveItem">\n  </kz-upload-card>\n</template>\n\n\n</head><body></body></html>',script:"\nexport default {\n  methods: {\n    handleRemoveItem (data) {\n      return new Promise(resolve => {\n        setTimeout(() => {\n          resolve({\n            // status = 1为成功判断\n            status: 1,\n            message: 'success'\n          })\n        }, 1e3)\n      })\n    }\n  }\n}\n",style:null}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("html",[t("head",[[t("kz-upload-card",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-remove":s.handleRemoveItem}})]],2)])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"hljs language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kz-upload-card")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("action")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://jsonplaceholder.typicode.com/posts/"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":on-remove")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleRemoveItem"')]),s._v("\n  >")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("kz-upload-card")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handleRemoveItem (data) {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(" =>")]),s._v(" {\n        setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n          resolve({\n            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// status = 1为成功判断")]),s._v("\n            status: "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v("\n          })\n        }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1e3")]),s._v(")\n      })\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])])],1)},n=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"shang-chuan-an-niu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shang-chuan-an-niu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 上传按钮")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"shang-chuan-biao-ge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shang-chuan-biao-ge","aria-hidden":"true"}},[s._v("¶")]),s._v(" 上传表格")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"shang-chuan-tu-pian-shi-pin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shang-chuan-tu-pian-shi-pin","aria-hidden":"true"}},[s._v("¶")]),s._v(" 上传图片/视频")])}],r=t("2455"),p=!1,o=null,c=null,h=null,v=Object(r["a"])(e,l,n,p,o,c,h);a["default"]=v.exports}}]);