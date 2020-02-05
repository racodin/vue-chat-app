<template>
  <div class="v-chat-limit">{{ length }}/{{ limit }}</div>
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
