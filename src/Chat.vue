<template>
  <div id="chat">
    <ChatList />
    <ChatInputText />
    <ChatInputEmoji />
  </div>
</template>

<script>
import ChatList from "@/components/ChatList";
import ChatInputText from "@/components/ChatInputText";
import ChatInputEmoji from "@/components/ChatInputEmoji";

export default {
  name: "Chat",
  components: {
    ChatList,
    ChatInputText,
    ChatInputEmoji
  }
};
</script>

<style lang="scss" scoped></style>
