<template>
  <div class="chat-input">
    <input
      class="text-input"
      type="text"
      ref="textInput"
      :disabled="!isTyping"
      :placeholder="this.placeholder"
      :maxlength="limit"
      v-model="message"
      @input="update($event.target.value)"
      @keypress.enter="send()"
    />
  </div>
</template>

<script>
/**
 * Enum for placeholder message.
 * @readonly
 * @enum {string}
 */
const Placeholer = Object.freeze({
  DEFAULT: "Enter your message",
  RESTRICT: "글쓰기가 잠시 제한되었습니다."
});
/**
 * Enum for message block.
 * @readonly
 * @enum {number}
 */
const Block = Object.freeze({
  COUNT: 5,
  DELAY: 5000
});

import debounce from "@/utils/debounce.js";
import examine from "@/utils/examine.js";
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
      isTyping: true,
      message: "",
      placeholder: "",
      repeatCount: 0
    };
  },
  mounted() {
    this.focus();
    this.alert(Placeholer.DEFAULT);
    this.resetCount = debounce(() => {
      this.repeatCount = 0;
    }, 500);
  },
  methods: {
    focus() {
      this.$refs.textInput.focus();
    },
    clear() {
      this.message = "";
    },
    alert(str) {
      this.placeholder = str;
    },
    disable() {
      this.isTyping = false;
      this.alert(Placeholer.RESTRICT);
      this.clear();
      this.update();
    },
    enable() {
      this.isTyping = true;
      this.alert(Placeholer.DEFAULT);
      this.$nextTick(() => {
        this.focus();
      });
    },
    send() {
      if (this.message == "") return;
      this.repeatCount++;
      this.resetCount();
      if (this.repeatCount > Block.COUNT) {
        this.disable();
        setTimeout(() => {
          this.enable();
        }, Block.DELAY);
      } else {
        this.submit();
      }
    },
    update(value) {
      this.$emit("update", value);
    },
    submit() {
      this.$emit("submit", examine(this.message));
      this.clear();
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-input {
  position: relative;
  width: 100%;
}
.text-input {
  position: relative;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border: 1px solid #2196f3;
  }
}
</style>
