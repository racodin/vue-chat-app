<template>
  <div class="chat-emoji">
    <div class="emoji-tab">
      <a
        href=""
        :class="{ active: tab.name == category.name }"
        @click.prevent="selectTab(tab)"
        v-for="tab in tabs"
        :key="tab.id"
        >{{ tab.icon }}</a
      >
    </div>
    <div class="emoji-list">
      <a
        href=""
        @click.prevent="selectEmoji(emoji)"
        v-for="emoji in category.emojis"
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
      category: {},
      tabs: [
        {
          name: "Smileys & People",
          icon: "😃",
          range: /[\u{1F600}-\u{1F64F}\u{270A}-\u{270D}\u{1F441}-\u{1F47D}\u{1F900}-\u{1F937}\u{1F9D0}-\u{1F9DF}]/gu,
          emojis: []
        },
        {
          name: "Animals & Nature",
          icon: "🐻",
          range: /[\u{1F321}-\u{1F32C}\u{1F3D4}-\u{1F3D6}\u{1F408}-\u{1F43F}\u{1F940}\u{1F980}-\u{1F9AF}]/gu,
          emojis: []
        },
        {
          name: "Food & Drink",
          icon: "🍔",
          range: /[\u{1F336}-\u{1F378}\u{1F950}-\u{1F96F}\u{1F9C0}-\u{1F9CA}]/gu,
          emojis: []
        },
        {
          name: "Activity",
          icon: "⚽",
          range: /[\u{1F3C2}-\u{1F3CE}\u{1F938}-\u{1F93F}]/gu,
          emojis: []
        },
        {
          name: "Travel & Places",
          icon: "🌇",
          range: null,
          emojis: []
        },
        {
          name: "Objects",
          icon: "💡",
          range: /[\u{2700}-\u{2704}\u{2706}-\u{2709}\u{270E}-\u{2712}\u{2728}\u{1F30D}-\u{1F31C}\u{1F37D}-\u{1F3AE}\u{1F3D7}-\u{1F3F7}\u{1F4A3}-\u{1F5FA}\u{1F941}-\u{1F94F}\u{1F9E0}-\u{1F9FF}\u{1F680}-\u{1F6FA}]/gu,
          emojis: []
        },
        {
          name: "Symbols",
          icon: "🔣",
          range: /[\u{2705}\u{2713}-\u{2727}\u{2729}-\u{27BF}]/gu,
          emojis: []
        },
        {
          name: "Flags",
          icon: "🎌",
          range: null,
          emojis: []
        }
      ]
    };
  },
  mounted() {
    for (const value in new EmojiConvertor().data) {
      this.emojiList.push(String.fromCodePoint(parseInt(value, 16)));
    }
    this.sortEmoji();
    this.selectTab(this.tabs[0]);
  },
  methods: {
    selectEmoji(emoji) {
      this.$emit("select", emoji);
    },
    sortEmoji() {
      this.tabs.forEach(tab => {
        this.emojiList.filter(emoji => {
          if (emoji.match(tab.range)) tab.emojis.push(emoji);
        });
      });
    },
    selectTab(item) {
      this.category = item;
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
    &:hover,
    &.active {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
.emoji-list {
  position: relative;
  height: 100px;
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
