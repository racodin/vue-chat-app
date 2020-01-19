<template>
  <div class="chat-limit">{{ length }}/{{ limit }}</div>
</template>

<script>
export default {
  name: "ChatInputLimit",
  props: {
    length: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 200
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-limit {
  font-size: 12px;
  color: #999;
}
</style>