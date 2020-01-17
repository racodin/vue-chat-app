<template>
  <div class="chat-item">
    <div class="chat-img">
      <BaseAvatar
        :src="picture"
        width="35px"
        height="35px"
        shape="circle"
      />
    </div>
    <div class="chat-info">
      <span class="chat-name">{{ nickname }}</span>
      <span class="chat-date">{{ date }}</span>
    </div>
    <div class="chat-msg">{{ msg }}</div>
  </div>
</template>

<script>
import BaseAvatar from "@/components/BaseAvatar";
export default {
  name: "ChatListItem",
  components: {
    BaseAvatar
  },
  props: {
    picture: {
      type: String,
      default: ""
    },
    nickname: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
  }
};
</script>

<style lang="scss" scoped>
.chat-item {
  position: relative;
  padding-left: 50px;
  list-style: none;
}
.chat-img {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  img {
    width: 40px;
    height: 40px;
  }
}
.chat-name {
  font-size: 12px;
}
.chat-date {
  font-size: 11px;
  color: #999;
}
.chat-msg {
  font-size: 12px;
  color: #666;
  word-break: keep-all;
  word-wrap: break-word;
}
</style>
