//import type { import ObjectDirective, DirectiveBinding } from 'vue'
import { PluginObject, DirectiveFunction } from "vue"


const handleGrabScroll:DirectiveFunction = function (el, binding, node) {
  let originX:number = 0
  let isMouseDown: Boolean
  if (node.elm.clientWidth >= node.elm.scrollWidth) {
    el.style.cursor = 'default'
    return
  }
  el.style.cursor = 'grab'
  node.elm.onmousedown = (ev: any) => {
    isMouseDown = true
    originX = ev.clientX || ev.touches[0].clientX
  }
  node.elm.onmousemove = (ev: any) => {
    if (!isMouseDown) return
    el.style.cursor = 'grabbing'
  
    const w = (node.context as any)?.width || 0
    // 获取拖拽移动的距离
    const eventX = ev.clientX || ev.touches[0].clientX
    const moveX = eventX - originX
    if (moveX + 40 >= w) return
    node.elm.scrollLeft = node.elm.scrollLeft - moveX
  }
  node.elm.onmouseup = (ev: any) => {
    if (!isMouseDown) return
    isMouseDown = false
    el.style.cursor = 'grab'
  }
}

export const grabScroll: PluginObject<any> = {
  install:(Vue) =>{
    Vue.directive('grab-scroll', {
      bind:handleGrabScroll,
      update:handleGrabScroll
    })
  }
}
