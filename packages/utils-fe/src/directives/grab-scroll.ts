//import type { import ObjectDirective, DirectiveBinding } from 'vue'
import { PluginObject, DirectiveFunction } from "vue"



let originX:number = 0
let isMouseDown: Boolean

let events = {
  mousedownHandler:(ev:MouseEvent)  => {
     isMouseDown = true
    originX = ev?.clientX || (ev as any)?.touches?.[0].clientX
  },
  mousemoveHandler: (ev:MouseEvent, { el, binding , vnode }: any) => {
    if (!isMouseDown) return
    el.style.cursor = 'grabbing'

    const w = (vnode.context as any)?.width || 0
    // 获取拖拽移动的距离
    const eventX = ev.clientX || (ev as any).touches?.[0].clientX
    const moveX = eventX - originX;
  //  if (moveX + 40 >= w) return
    (vnode.elm as any).scrollLeft = (vnode.elm as any)?.scrollLeft - moveX
    },
  mouseupHandler: (ev:MouseEvent, el: HTMLElement) => {
    if (!isMouseDown) return
    isMouseDown = false
    el.style.cursor = 'grab'
  }
}


const handleGrabScroll:DirectiveFunction = function (el, binding, vnode) {
 
  if ((vnode.elm as any).clientWidth >=  (vnode.elm as any)?.scrollWidth) {
    el.style.cursor = 'default'
    return
  }
  el.style.cursor = 'grab'
  vnode.elm.addEventListener('mousedown',(ev: MouseEvent) => {
    events.mousedownHandler(ev)
  })
  vnode.elm.addEventListener('mousemove',(ev: MouseEvent) => {
    events.mousemoveHandler(ev, { el, binding, vnode })
  })
  vnode.elm.addEventListener('mouseup',(ev: MouseEvent) => {
    events.mouseupHandler(ev, el)
  })
}

export const grabScroll: PluginObject<any> = {
  install:(Vue) =>{
    Vue.directive('grab-scroll', {
      bind:handleGrabScroll,
      update:handleGrabScroll
    })
  }
}
