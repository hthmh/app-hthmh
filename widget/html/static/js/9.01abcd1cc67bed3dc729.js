webpackJsonp([9],{"+Yi0":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={methods:{getCheckedNodes:function(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys:function(){console.log(this.$refs.tree.getCheckedKeys())},setCheckedNodes:function(){this.$refs.tree.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}])},setCheckedKeys:function(){this.$refs.tree.setCheckedKeys([3])},resetChecked:function(){this.$refs.tree.setCheckedKeys([])}},data:function(){return{data2:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{children:"children",label:"label"}}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-tree",{ref:"tree",attrs:{data:this.data2,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:this.defaultProps}}),this._v(" "),t("div",{staticClass:"buttons"},[t("el-button",{on:{click:this.getCheckedNodes}},[this._v("通过 node 获取")]),this._v(" "),t("el-button",{on:{click:this.getCheckedKeys}},[this._v("通过 key 获取")]),this._v(" "),t("el-button",{on:{click:this.setCheckedNodes}},[this._v("通过 node 设置")]),this._v(" "),t("el-button",{on:{click:this.setCheckedKeys}},[this._v("通过 key 设置")]),this._v(" "),t("el-button",{on:{click:this.resetChecked}},[this._v("清空")])],1)],1)},staticRenderFns:[]},d=s("/Xao")(i,l,!1,function(e){s("ZuvZ")},null,null);t.default=d.exports},ZuvZ:function(e,t){}});