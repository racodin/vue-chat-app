<template>
  <div class="v-chat-item">
    <div v-if="picture" class="picture">
      <BaseAvatar :src="picture" width="35px" height="35px" shape="circle" />
    </div>
    <div class="info">
      <span v-if="name" class="name">{{ name }}</span>
      <span v-if="date" class="date">{{ date }}</span>
      <div class="massage">{{ message }}</div>
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
