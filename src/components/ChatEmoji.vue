<template>
  <div class="chat-emoji">
    <div class="emoji-tab">
      <a
        href=""
        @click.prevent="selectTab(tab.name)"
        v-for="tab in tabs"
        :key="tab.id"
        >{{ tab.icon }}</a
      >
    </div>
    <div class="emoji-list">
      <a
        href=""
        @click.prevent="select(emoji)"
        v-for="emoji in category"
        :key="emoji.id"
        >{{ emoji }}</a
      >
    </div>
  </div>
</template>

<script>
/*
 * [[ Emoji categories ]]
 * 😃 Smileys & People
 * 🐻 Animals & Nature
 * 🍔 Food & Drink
 * ⚽ Activity
 * 🌇 Travel & Places
 * 💡 Objects
 * 🔣 Symbols
 * 🎌 Flags
 */
import EmojiConvertor from "@/utils/emoji.js";
export default {
  name: "ChatInputEmoji",
  data() {
    return {
      isDisplay: true,
      emojiList: [],
      filterList: [],
      category: [],
      tabs: [
        {
          name: "Smileys & People",
          icon: "😃"
        },
        {
          name: "Animals & Nature",
          icon: "🐻"
        },
        {
          name: "Food & Drink",
          icon: "🍔"
        },
        {
          name: "Activity",
          icon: "⚽"
        },
        {
          name: "Travel & Places",
          icon: "🌇"
        },
        {
          name: "Objects",
          icon: "💡"
        },
        {
          name: "Symbols",
          icon: "🔣"
        },
        {
          name: "Flags",
          icon: "🎌"
        }
      ]
    };
  },
  mounted() {
    for (const value in new EmojiConvertor().data) {
      this.emojiList.push(value);
      // console.log(value);
      // console.log(parseInt(value, 16));
      // console.log(String.fromCodePoint(parseInt(value, 16)));
    }
    this.selectTab("Smileys & People");
  },
  methods: {
    select(item) {
      this.$emit("select", item);
    },
    selectTab(name) {
      // 이모티콘 카테고리별로 어떻게 잘 나눌지 고민이 필요...
      this.category = [];
      switch (name) {
        case "Smileys & People":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 128103 && decimal <= 128136) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 128513 && decimal <= 128591) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 129297 && decimal <= 129344) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 129489 && decimal <= 129504) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Animals & Nature":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 128001 && decimal <= 128064) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 129409 && decimal <= 129472) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 127793 && decimal <= 127811) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Food & Drink":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 127812 && decimal <= 127871) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Activity":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 127951 && decimal <= 127984) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 127992 && decimal <= 127993) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Travel & Places":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 128136 && decimal <= 128255) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Objects":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 127744 && decimal <= 127788) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 127872 && decimal <= 127937) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Symbols":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 9800 && decimal <= 9989) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            } else if (decimal >= 10067 && decimal <= 127569) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
        case "Flags":
          this.emojiList.forEach(hex => {
            let decimal = parseInt(hex, 16);
            if (decimal >= 128001 && decimal <= 128064) {
              this.category.push(String.fromCodePoint(parseInt(hex, 16)));
            }
          });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-emoji {
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
}
.emoji-tab {
  padding: 7px 5px;
  background-color: rgba(0, 0, 0, 0.1);
  a {
    display: inline-block;
    margin: 0 3px;
    padding: 2px;
    line-height: 1.3rem;
    text-decoration: none;
    border-radius: 3px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
.emoji-list {
  position: relative;
  min-height: 50px;
  max-height: 100px;
  padding: 10px;
  word-break: break-all;
  overflow: hidden;
  overflow-y: auto;
  a {
    display: inline-block;
    padding: 2px;
    line-height: 1.3rem;
    text-decoration: none;
    border-radius: 3px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
