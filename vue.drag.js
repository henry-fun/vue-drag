/**
 * Version: v1.0.0
 * Author: han
 * Description: 不断改进...
 *
 */
(function () {
    var vueDrag = {};
    vueDrag.install = function (Vue, options) {
        Vue.directive('drag', {
            bind: function (el, binding, vnode) {
                var positionX = 0,
                    positionY = 0,
                    mousedownX = 0,
                    mousedownY = 0,
                    mouseX = 0,
                    mouseY = 0,
                    moveX = 0,
                    moveY = 0,
                    target = el,
                    isMove = false;

                // 查看是否有指定绑定参数
                if (binding.expression !== undefined) {
                    // 因为vue有渲染延迟的原因，所以只能通过在vue生成的dom元素上进行获取
                    var handle = el.querySelectorAll(binding.value);
                } else {
                    var handle = [];
                    handle.push(el);
                }

                handle.forEach(function(dom) {
                    dom.onmousedown = function(e) {
                        isMove = true;

                        positionX = target.offsetLeft;
                        positionY = target.offsetTop;
                        mousedownX = e.pageX;
                        mousedownY = e.pageY;

                        return false;
                    };

                    dom.addEventListener('mouseup', function(e) {
                        isMove = false;
                    });
                });

                // 如果不指定前缀，则默认使用document为实例对象
                addEventListener('mousemove', function(e) {
                    if (isMove) {
                        mouseX = e.clientX;
                        mouseY = e.clientY;

                        moveX = positionX + mouseX - mousedownX;
                        moveY = positionY + mouseY - mousedownY;

                        target.style.left = moveX+'px';
                        target.style.top = moveY+'px';

                    } else {
                        return false;
                    }
                });

                addEventListener('mouseup', function() {
                    isMove = false;
                });

            }
        })
    };
    if (typeof exports == "object") {
        module.exports = vueDrag;
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return vueDrag
        })
    } else if (window.Vue) {
        window.vueDrag = vueDrag;
        Vue.use(vueDrag);
    }
})();