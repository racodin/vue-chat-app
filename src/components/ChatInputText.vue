<template>
  <div>
    <input
      class="text-input"
      type="text"
      ref="textInput"
      :disabled="!isTyping"
      :placeholder="this.placeholder"
      :maxlength="limit"
      v-model="message"
      @input="update()"
      @keypress.enter="check()"
    />
  </div>
</template>

<script>
/* 구현 목록
  1. 도배방지 
    - 이전글과 같은글을 반복할 경우 블럭
    - 짧은 시간동안 많은 글들을 작성할 경우
  2. 
*/
export default {
  name: "ChatInputText",
  props: {
    limit: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      count: 0,
      message: "",
      isTyping: true,
      checkMessage: "",
      placeholder: "",
      placeholderText: {
        default: "Enter your message",
        repeat: "반복적인 글을 입력하였습니다.",
        restrict: "글쓰기가 잠시 제한되었습니다."
      },
      block: {
        count: 3,
        delay: 1000
      },
      bannedWords: ["씨발", "병신", "아가리"]
    };
  },
  mounted() {
    this.focus();
    this.placeholder = this.placeholderText.default;
  },
  methods: {
    focus() {
      this.$refs.textInput.focus();
    },
    check() {
      this.bannedWords.forEach(word => {
        if (this.message.indexOf(word) > -1) {
          // let arr = [];
          // for (let i = 0; i < word.length; i++) arr.push("*");
          this.message = this.message.replace(word, "**");
        }
      });
      this.submit();
      this.message = "";
    },
    alert(str) {
      this.isTyping = false;
      this.placeholder = str;
      setTimeout(() => {
        this.isTyping = true;
        this.placeholder = this.placeholderText.default;
        this.$nextTick(() => this.focus());
      }, 1000);
    },
    update() {
      this.$emit("update", this.message);
    },
    submit() {
      this.$emit("submit", this.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-input {
  position: relative;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
