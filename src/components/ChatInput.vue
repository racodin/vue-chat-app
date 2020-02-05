<template>
  <div class="v-chat-entry">
    <input
      class="v-chat-input"
      type="text"
      ref="input"
      :disabled="!isTyping"
      :placeholder="placeholder"
      :maxlength="limit"
      v-model="message"
      @input="update($event.target.value)"
      @keypress.enter="send()"
    />
  </div>
</template>

<script>
import { PLACEHOLDER, BLOCK } from "@/constants/input.js";
import debounce from "@/utils/debounce.js";
import examine from "@/utils/examine.js";
import EmojiConvertor from "@/utils/emoji.js";
export default {
  name: "ChatInput",
  props: {
    limit: {
      type: Number,
      default: 200
    },
    addEmoji: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isTyping: true,
      message: "",
      placeholder: "",
      repeatCount: 0,
      emoji: null
    };
  },
  mounted() {
    this.emoji = new EmojiConvertor();
    this.emoji.replace_mode = "unified";
    this.focus();
    this.alert(PLACEHOLDER.default);
    this.resetCount = debounce(() => {
      this.repeatCount = 0;
    }, 500);
  },
  watch: {
    addEmoji() {
      this.message += this.addEmoji;
      this.focus();
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    clear() {
      this.message = "";
    },
    alert(str) {
      this.placeholder = str;
    },
    send() {
      if (!this.message) return;
      if (this.repeatCount >= BLOCK.count) {
        this.isTyping = false;
        this.clear();
        this.update("");
        this.alert(PLACEHOLDER.restrict);
        setTimeout(() => {
          this.isTyping = true;
          this.alert(PLACEHOLDER.default);
          this.$nextTick(() => {
            this.focus();
          });
        }, BLOCK.delay);
      } else {
        this.repeatCount++;
        this.resetCount();
        this.submit();
      }
    },
    update(value) {
      if (value.indexOf(":") !== -1) {
        this.message = this.emoji.replace_colons(value);
      }
      this.$emit("update", String(value));
    },
    submit() {
      this.$emit("submit", examine(this.message));
      this.clear();
    }
  }
};
</script>
