<template>
  <div class="chat-list">
    <ul>
      <ChatListItem v-for="item in ([].lenght = 10)" :key="item.id" />
    </ul>
  </div>
</template>

<script>
import ChatListItem from "@/components/ChatListItem";
export default {
  name: "ChatList",
  components: {
    ChatListItem
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
