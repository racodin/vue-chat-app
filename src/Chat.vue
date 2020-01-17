<template>
  <div id="chat">
    <ChatList :dataset="chatList"  />
    <ChatInputText @submit="updateMessage" />
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
  },
  data(){
    return {
      chatList: [{
        picture: "https://postfiles.pstatic.net/20160718_15/shmadle0510_1468805220543OHPbu_PNG/2016-07-18_10%3B25%3B29.PNG?type=w1",
        name: "Nickname1",
        date: "2020.01.18",
        msg: "chatting message1"
      }, {
        picture: "",
        name: "Nickname2",
        date: "2020.01.19",
        msg: "chatting message2"
      }],
      message: "Hi"
    }
  },
  methods: {
    updateMessage(value){
      this.chatList.push({
        picture: "",
        name: "Nickname2",
        date: "2020.01.19",
        msg: value
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#chat {
  width: 400px;
}
</style>
