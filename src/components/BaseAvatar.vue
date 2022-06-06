<template>
  <span class="avatar" :class="shape" :style="'width:' + width + '; height:' + height + ';'">
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

<style scoped lang="scss">
.avatar {
  position: relative;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &.circle {
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
