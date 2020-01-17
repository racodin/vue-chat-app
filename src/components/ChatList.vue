<template>
  <ul class="chat-list" ref="chatList" @scroll.passive="scrollEvent($event)">
    <li v-for="item in itemList" :key="item.id">
      <ChatListItem
        :picture="item.picture"
        :name="item.name"
        :date="item.date"
        :message="item.message"
      />
    </li>
  </ul>
</template>

<script>
import ChatListItem from "@/components/ChatListItem";
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
      itemListMax: 10,
      itemList: this.items,
      scrollTop: null,
      scrolled: null
    };
  },
  mounted() {
    this.scrollObserver();
  },
  watch: {
    addItem() {
      // if (this.itemList.length > this.itemListMax) {
      //   this.itemList.shift();
      // }
      this.itemList.push(this.addItem);
    }
  },
  methods: {
    scrollObserver() {
      let elemnt = this.$refs.chatList;
      new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type == "childList") {
            !this.scrolled
              ? this.scrollToBottom(elemnt, "smooth")
              : this.scrollToBottom(elemnt, "");
          }
        });
      }).observe(elemnt, { childList: true });
      this.scrollToBottom(elemnt, "");
    },
    scrollEvent(e) {
      this.scrollTop = e.target.scrollTop;
      this.scrolled =
        e.target.scrollTop + e.target.clientHeight + 1 < e.target.scrollHeight;
      // console.log("scrollTop: " + e.target.scrollTop);
      // console.log("clientHeight: " + e.target.clientHeight);
      // console.log("scrollHeight: " + e.target.scrollHeight);
      // console.log("scrollBottom: " + (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop));
      // console.log("----------------------------");
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
    removeToElement() {
      if (this.messages.length > 10) this.messages.shift();
    }
  }
};
</script>

<style lang="scss" scoped>
.chat-list {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
li {
  padding: 10px;
}
</style>
