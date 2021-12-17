<template>
  <form @submit.prevent="submitForm">
    <h2>Se connecter</h2>
    <p class="error">{{ error }}</p>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />

    <div class="btn-container">
      <button class="btn-submit">Se connecter</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../services/useLogin";
import { useRouter } from "vue-router";
export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const { error, login } = useLogin();
    // Submit form
    const submitForm = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("Logged in");
        router.push({ name: "Chat" });
      }
    };

    return { email, password, submitForm, error };
  },
};
</script>

<style>
h2 {
  text-align: center;
  margin: 20px 0;
}
</style>