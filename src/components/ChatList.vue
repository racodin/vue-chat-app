<template>
  <div class="v-chat-list">
    <ul
      ref="scroller"
      class="v-chat-scroller"
      @resize="scrollResize($event)"
      @scroll.passive="scrollEvent($event)"
    >
      <li v-for="item in itemList" :key="item.id">
        <ChatListItem
          :picture="item.picture"
          :name="item.name"
          :date="item.date"
          :message="item.message"
        />
      </li>
    </ul>
    <a
      href
      v-show="scrolled"
      @click.prevent="clickToBottom"
      class="v-chat-latest"
    >
      <svg viewBox="0 0 24 24">
        <g>
          <path
            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
          />
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
    this.mutationObserver();
    this.resizeObserver();
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
    mutationObserver() {
      let el = this.$refs.scroller;
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
    resizeObserver() {
      new ResizeObserver(() => {
        if (!this.scrolled) this.clickToBottom();
      }).observe(this.$refs.scroller);
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
      this.scrollToBottom(this.$refs.scroller);
    },
    removeToElement() {
      if (this.messages.length > 10) this.messages.shift();
    }
  }
};
</script>
