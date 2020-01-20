<template>
  <div id="chat">
    <ChatList :items="items" :addItem="item" />
    <div class="chat-panel">
      <ChatInput :limit="limit" @update="updateMessage" @submit="sendMessage" />
      <ChatLimit :length="count" :limit="limit" />
      <ChatEmoji />
    </div>
  </div>
</template>

<script>
import "@/utils/prototype";
import ChatList from "@/components/ChatList";
import ChatInput from "@/components/ChatInput";
import ChatLimit from "@/components/ChatLimit";
import ChatEmoji from "@/components/ChatEmoji";

export default {
  name: "Chat",
  components: {
    ChatList,
    ChatInput,
    ChatLimit,
    ChatEmoji
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
    }
  }
};
</script>

<style lang="scss" scoped>
#chat {
  position: relative;
  display: flex;
  flex-direction: column;
}
.chat-panel {
  display: flex;
}
</style>
