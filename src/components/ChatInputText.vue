<template>
  <div>
      <input 
        type="text"
        placeholder="Enter your message"
        maxlength="100"
        v-model="message"
        @input="update($event.target.value)"
        @keypress.enter="submit($event.target.value)"
      />
  </div>
</template>

<script>
export default {
  name: "ChatInputText",
  data(){
    return {
      message: ""
    }
  },
  methods: {
    update(value){
      this.$emit("update", value);
    },
    submit(value){
      this.message = "";
      this.$emit("submit", value);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
