<template>
  <span
    class="v-chat-avatar"
    :class="shape"
    :style="'width:' + width + '; height:' + height + ';'"
  >
    <img :src="src" :alt="alt" />
  </span>
</template>

<script>
export default {
  name: "BaseAvatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "30px"
    },
    height: {
      type: String,
      default: "30px"
    },
    shape: {
      type: String,
      default: ""
    }
  }
};
</script>
