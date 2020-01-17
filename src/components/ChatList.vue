<template>
  <div class="chat-list">
    <ul>
      <li
        v-for="data in dataset"
        :key="data.id"
      >
        <ChatListItem 
          :picture="data.picture"
          :nickname="data.nickname"
          :date="data.date"
          :msg="data.msg"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ChatListItem from "@/components/ChatListItem";
export default {
  name: "ChatList",
  components: {
    ChatListItem
  },
  props: {
    dataset: {
      type: Array,
      default(){
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-list {
  height: 300px;
  overflow: hidden;
  overflow-y: auto;
  border: 1px solid #ccc;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  padding: 10px;
}
</style>
