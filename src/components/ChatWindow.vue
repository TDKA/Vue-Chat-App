<template>
  <div class="chat" style="overflow-y: auto">
    <div v-if="error">{{ error }}</div>
    <div v-if="docs" class="chat" ref="lastMsg">
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <span class="name">{{ doc.displayName }}</span>
        <span class="messages"> {{ doc.message }}</span>
        <span class="date"> "Sended: {{ doc.createdAt }} "</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../services/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed } from "@vue/reactivity";
import { ref, onUpdated } from "vue";

export default {
  setup() {
    //auto-scroll to last msg
    const lastMsg = ref(null);
    const { error, docs } = getCollection("messages");

    //formate date
    const formattedDocuments = computed(() => {
      if (docs.value) {
        return docs.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate(""));
          return { ...doc, createdAt: time };
        });
      }
    });

    onUpdated(() => {
      lastMsg.value.scrollTop = lastMsg.value.scrollHeight;
    });
    return { error, docs, formattedDocuments, lastMsg };
  },
};
</script>

<style>
.chat {
  padding: 18px 30px;
  max-width: 600px;
  margin: 0 auto;
  overflow: auto;
  max-height: 100%;
  overflow-y: auto !important;
}
span {
  display: block;
  text-align: left !important;

  width: 100%;
}
.name {
  font-weight: bold;
  color: #333;
}
.date {
  font-size: 12px;
  color: rgb(172, 171, 171);
  margin: 7px auto;
}
.messages {
  overflow: auto;
  max-height: 400px;
  margin-top: 5px;
  font-size: 16px;
}
</style>