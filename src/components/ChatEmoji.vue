<template>
  <div class="chat-emoji">
    <div class="emoji-list">
      <a
        href=""
        @click.prevent="select(emoji)"
        v-for="emoji in emojiList"
        :key="emoji.id"
        >{{ emoji }}</a
      >
    </div>
  </div>
</template>

<script>
import EmojiConvertor from "@/utils/emoji.js";
export default {
  name: "ChatInputEmoji",
  data() {
    return {
      isDisplay: true,
      emojiList: []
    };
  },
  mounted() {
    for (const value in new EmojiConvertor().data) {
      this.emojiList.push(String.fromCodePoint(parseInt(value, 16)));
      // console.log(value);
      // console.log(String.fromCodePoint(parseInt(value, 16)));
    }
  },
  methods: {
    select(item) {
      this.$emit("select", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-emoji {
  position: relative;
  height: 200px;
  padding: 10px;
  word-break: break-all;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  overflow-y: auto;
}
.emoji-list {
  a {
    display: inline-block;
    padding: 2px;
    line-height: 1.3rem;
    text-decoration: none;
    border-radius: 3px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
