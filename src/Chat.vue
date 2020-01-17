<template>
  <div id="chat">
    <ChatList :items="items" :addItem="item" />
    <ChatInputText :limit="limit" @update="updateMessage" @submit="submitMessage" />
    <ChatInputLimit :length="count" :limit="limit" />
    <ChatInputEmoji />
  </div>
</template>

<script>
import ChatList from "@/components/ChatList";
import ChatInputText from "@/components/ChatInputText";
import ChatInputLimit from "@/components/ChatInputLimit";
import ChatInputEmoji from "@/components/ChatInputEmoji";

export default {
  name: "Chat",
  components: {
    ChatList,
    ChatInputText,
    ChatInputLimit,
    ChatInputEmoji
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
    submitMessage(value) {
      this.count = 0;
      this.item = {
        picture: "",
        name: "Nickname2",
        date: "2020.01.19",
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
</style>
