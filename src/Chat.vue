<template>
  <div class="v-chat">
    <div class="v-chat-head">TITLE</div>
    <div class="v-chat-body">
      <ChatList :items="items" :addItem="item" />
      <ChatEmoji v-show="isEmoji" @select="selectEmoji" />
    </div>
    <div class="v-chat-foot">
      <ChatInput
        :limit="limit"
        :addEmoji="emojiData"
        @update="updateMessage"
        @submit="sendMessage"
      />
      <ChatLimit :length="count" :limit="limit" />
      <ChatEmojiButton @click="isEmoji = !isEmoji" />
    </div>
  </div>
</template>

<script>
import "@/utils/dateFormat";
import ChatList from "@/components/ChatList";
import ChatInput from "@/components/ChatInput";
import ChatLimit from "@/components/ChatLimit";
import ChatEmoji from "@/components/ChatEmoji";
import ChatEmojiButton from "@/components/ChatEmojiButton";

export default {
  name: "Chat",
  components: {
    ChatList,
    ChatInput,
    ChatLimit,
    ChatEmoji,
    ChatEmojiButton
  },
  props: {
    dataset: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isEmoji: false,
      emojiData: null,
      count: 0,
      limit: 50,
      item: {},
      items: this.dataset
    };
  },
  methods: {
    updateMessage(value) {
      this.count = value.length;
    },
    sendMessage(value) {
      this.count = 0;
      this.item = {
        picture: "",
        name: "Nickname2",
        date: new Date().format("YYYY.MM.DD E a/p hh:mm"),
        message: value
      };
    },
    selectEmoji(value) {
      this.emojiData = value;
    }
  }
};
</script>

<style lang="scss" src="@/assets/styles/chat.scss"></style>
