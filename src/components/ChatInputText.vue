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
      @keypress.enter="enter()"
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
    enter() {
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
    clear() {
      this.message = "";
    },
    alert(str) {
      this.placeholder = str;
    },
    update() {
      this.$emit("update", this.message);
    },
    submit() {
      this.$emit("submit", examine(this.message, "**"));
      this.clear();
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
