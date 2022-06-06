<template>
  <div class="chat-list">
    <ul ref="chatScroller" class="chat-scroller" @scroll.passive="scrollEvent($event)">
      <li v-for="item in itemList" :key="item.id">
        <ChatListItem
          :picture="item.picture"
          :name="item.name"
          :date="item.date"
          :message="item.message"
        />
      </li>
    </ul>
    <a href v-show="scrolled" @click.prevent="clickToBottom" class="chat-latest">
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </g>
      </svg>
    </a>
  </div>
</template>

<script>
import ChatListItem from "@/components/ChatListItem";
import debounce from "@/utils/debounce.js";
export default {
  name: "ChatList",
  components: {
    ChatListItem
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    addItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      itemList: this.items,
      scrollTop: 0,
      scrolled: false
    };
  },
  mounted() {
    this.scrollObserver();
    this.scrollEvent = debounce(e => {
      let target = e.target;
      this.scrollTop = target.scrollTop;
      this.scrolled =
        this.scrollTop + target.clientHeight + 1 < target.scrollHeight;
    }, 200);
  },
  watch: {
    addItem() {
      this.itemList.push(this.addItem);
    }
  },
  methods: {
    scrollObserver() {
      let el = this.$refs.chatScroller;
      new MutationObserver(e => {
        const CONFIG = {
          always: false,
          smooth: true
        };
        let pause = CONFIG.always === false && this.scrolled;
        const addedNodes = e[e.length - 1].addedNodes.length;
        const removedNodes = e[e.length - 1].removedNodes.length;

        if (CONFIG.scrollonremoved) {
          if (pause || (addedNodes != 1 && removedNodes != 1)) return;
        } else {
          if (pause || addedNodes != 1) return;
        }
        let smooth = CONFIG.smooth;
        const loadingRemoved = !addedNodes && removedNodes === 1;
        if (
          loadingRemoved &&
          CONFIG.scrollonremoved &&
          "smoothonremoved" in CONFIG
        ) {
          smooth = CONFIG.smoothonremoved;
        }
        this.scrollToBottom(el, smooth);
      }).observe(el, { childList: true, subtree: true });
      this.scrollToBottom(el);
    },
    scrollToBottom(el, smooth) {
      if (typeof el.scroll === "function") {
        el.scroll({
          top: el.scrollHeight,
          behavior: smooth ? "smooth" : "instant"
        });
      } else {
        el.scrollTop = el.scrollHeight;
      }
    },
    clickToBottom() {
      this.scrolled = false;
      this.scrollToBottom(this.$refs.chatScroller);
    },
    removeToElement() {
      if (this.messages.length > 10) this.messages.shift();
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-list {
  position: relative;
  height: 100%;
}
.chat-scroller {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
  li {
    padding: 10px;
  }
}
.chat-latest {
  position: absolute;
  bottom: 0;
  width: 32px;
  height: 32px;
  margin: 0 calc(50% - 16px) 8px calc(50% - 16px);
  text-align: center;
  line-height: 44px;
  background-color: #2196f3;
  border-radius: 50%;
  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
}
</style>
