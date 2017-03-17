<p align="center"><img width="100"src="http://btznt.img48.wal8.com/img48/351201_20130616232947/148972282642.jpg"></p>
<h1 align="center">Vue.drag.js</h1>

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![MIT License](https://img.shields.io/github/license/SortableJS/Vue.Draggable.svg)](https://github.com/hanxiansen/vueDrag/blob/master/LICENSE)

实现基于vue.js的拖拽元素的插件



## Demo

[demo地址](https://hanxiansen.github.io/vueDrag/demo.html "demo")


## 特点

* 随意拖拽
* 指定单位进行拖拽


## 使用

* 1、引入js文件：
``` html
	<script src="vue.drag.js"></script>
```
* 2、在要进行拖拽的元素上进行如下声明：
``` html  
	<div v-drag>拖动我</div>
```
* 3、如果需要指定能够使拖拽生效的元素，则进行如下声明：
html部分：
``` html
	<div id="app">
		<div id="test" v-drag="dragnode">
			<div class="draghandle">只在改元素生效</div>
		</div>		
	</div>
```
js部分：
``` js
	new Vue({
		el: '#app',
		data: {
			movenode: '.movehandle'
		}
	});
```