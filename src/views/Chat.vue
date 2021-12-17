<template>
  <div class="container-form" style="overflow-y: auto">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";

export default {
  components: { Navbar, ChatForm, ChatWindow },
};
</script>

<style>
h1 {
  margin-top: 20px;
}
.contaninerChat {
  text-align: center;
}
</style>