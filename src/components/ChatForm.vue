<template>
  <form action="">
    <h3>ChatRoom</h3>
    <textarea
      v-model="message"
      @keypress.enter.prevent="submitForm"
      placeholder="Enter you message here..."
    ></textarea>
    <div class="error">{{ error }}</div>
    <div class="sended.value">{{ sended }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../services/getUser";
import useCollection from "../services/useCollection";
import { timestamp } from "../firebase/config";
import ChatWindow from "../components/ChatWindow.vue";

export default {
  components: { ChatWindow },
  setup() {
    const { user } = getUser();
    const { addMessage, error } = useCollection("messages");
    const message = ref("");
    const sended = ref("");

    const submitForm = async () => {
      // console.log(user);
      const chat = {
        displayName: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addMessage(chat);
      if (!error.value) {
        message.value = "";
        sended.value = "Message sended";
      }
      message.value = "";
    };

    return { message, submitForm, error, sended };
  },
};
</script>

<style>
form {
  background: white;
  padding: 40px 30px;
  border-radius: 30px;
}
textarea {
  width: 100%;
  margin-bottom: 10px;
  max-width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 30px;
  padding: 30px;
  outline: none;
  background: #eee;
  padding: 10px;
}
h3 {
  margin-bottom: 20px;
}
</style>