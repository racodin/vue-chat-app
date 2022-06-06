<template>
  <div class="chat-item">
    <div v-if="picture" class="item-img">
      <BaseAvatar :src="picture" width="35px" height="35px" shape="circle" />
    </div>
    <div class="item-info">
      <span v-if="name" class="item-name">{{ name }}</span>
      <span v-if="date" class="item-date">{{ date }}</span>
      <div class="item-massage">{{ message }}</div>
    </div>
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
    name: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-item {
  position: relative;
  list-style: none;
  display: flex;
}
.item-img {
  position: relative;
  top: 0.2rem;
  flex: none;
  margin-right: 0.8rem;
  overflow: hidden;
}
.item-info {
  position: relative;
}
.item-name {
  font-size: 12px;
}
.item-date {
  font-size: 11px;
  color: #999;
}
.item-massage {
  font-size: 12px;
  color: #666;
  line-height: 1.2rem;
  word-break: break-all;
}
</style>
