<template>
  <div id="app">
    <vue-chat
      :style="{
        width: '300px',
        height: '350px',
        backgroundColor: '#f0f0f0'
      }"
      :dataset="chat"
    />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      chat: [
        {
          picture: "",
          name: "Nickname1",
          date: "2020.01.18",
          message:
            "chatting message1 chatting message1 chatting message1 chatting message1 chatting message1 chatting message1"
        },
        {
          picture: "",
          name: "Nickname2",
          date: "2020.01.19",
          message: "chatting message2"
        },
        {
          picture: "",
          name: "Nickname2",
          date: "2020.01.19",
          message: "chatting message2"
        },
        {
          picture: "",
          name: "Nickname2",
          date: "2020.01.19",
          message: "chatting message2"
        },
        {
          picture: "",
          name: "Nickname2",
          date: "2020.01.19",
          message: "chatting message2"
        },
        {
          picture: "",
          name: "Nickname2",
          date: "2020.01.19",
          message: "chatting message2"
        },
        {
          picture: "",
          name: "Nickname2",
          date: "2020.01.19",
          message: "chatting message2"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
#app {
  height: 100%;
}
</style>
