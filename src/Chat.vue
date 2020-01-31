<template>
  <div id="chat">
    <ChatList :items="items" :addItem="item" />
    <ChatEmoji v-show="isEmoji" @select="selectEmoji" />
    <div class="chat-panel">
      <ChatInput
        :limit="limit"
        :addEmoji="emojiData"
        @update="updateMessage"
        @submit="sendMessage"
      />
      <ChatLimit :length="count" :limit="limit" />
      <a href @click.prevent="isEmoji = !isEmoji" class="chat-emoji-button">
        <svg viewBox="0 0 24 24">
          <g>
            <path
              d="M6.87494031,14 C7.67500942,16.0486784 9.66801755,17.5 12,17.5 C14.3319824,17.5 16.3249906,16.0486784 17.1250597,14 L6.87494031,14 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M15.5,11 C16.3284271,11 17,10.3284271 17,9.5 C17,8.67157288 16.3284271,8 15.5,8 C14.6715729,8 14,8.67157288 14,9.5 C14,10.3284271 14.6715729,11 15.5,11 Z M8.5,11 C9.32842712,11 10,10.3284271 10,9.5 C10,8.67157288 9.32842712,8 8.5,8 C7.67157288,8 7,8.67157288 7,9.5 C7,10.3284271 7.67157288,11 8.5,11 Z"
            ></path>
          </g>
        </svg>
      </a>
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

<style lang="scss" scoped>
#chat {
  position: relative;
  display: flex;
  flex-direction: column;
}
.chat-panel {
  display: flex;
}
.chat-emoji-button {
  display: inline-block;
  padding: 5px;
  font-size: 0;
  line-height: 0;
  text-decoration: none;
  &:hover {
    background-color: grey;
    svg {
      fill: white;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    fill: grey;
  }
}
</style>
