<template>
  <div class="chat-emoji">
    <a href @click.prevent="isDisplay = !isDisplay" class="emoji-button">😀</a>
    <div v-show="isDisplay" class="emoji-list">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatInputEmoji",
  data() {
    return {
      isDisplay: false
    };
  }
};
</script>

<style lang="scss" scoped>
.chat-emoji {
  position: relative;
}
.emoji-button {
  text-decoration: none;
}
.emoji-list {
  position: absolute;
  bottom: 23px;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  li {
    list-style: none;
  }
}
</style>
