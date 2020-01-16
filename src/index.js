import Chat from './Chat.vue'

const install = (Vue) => {
  Vue.component('vue-chat', Chat)
}

export default {
  install
}

export {
  Chat
}