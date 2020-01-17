<template>
  <div class="text-limit">{{ length }}/{{ limit }}</div>
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
.text-limit {
  font-size: 12px;
  text-align: right;
  color: #999;
}
</style>