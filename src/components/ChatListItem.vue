<template>
  <li class="chat-item">
    <div class="chat-img">
      <BaseAvatar
        src="https://postfiles.pstatic.net/20160718_15/shmadle0510_1468805220543OHPbu_PNG/2016-07-18_10%3B25%3B29.PNG?type=w1"
        width="30px"
        height="30px"
        shape="circle"
      />
    </div>
    <div class="chat-info">
      <span class="chat-name">Nickname</span>
      <span class="chat-date">2020.01.18</span>
    </div>
    <div class="chat-msg">
      chatting message
    </div>
  </li>
</template>

<script>
import BaseAvatar from "@/components/BaseAvatar";
export default {
  name: "ChatListItem",
  components: {
    BaseAvatar
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
}
</style>
