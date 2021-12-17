<template>
  <form @submit.prevent="submitForm">
    <h2>S'inscrire</h2>
    <p class="error">{{ error }}</p>
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />

    <div class="btn-container">
      <button class="btn-submit">Créer votre compte</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../services/useSignup";

export default {
  setup() {
    const { error, signup } = useSignup();
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    // Submit form
    const submitForm = async () => {
      await signup(email.value, password.value, displayName.value);
    };

    return { displayName, email, password, submitForm, error };
  },
};
</script>

<style>
h2 {
  text-align: center;
  margin: 20px 0;
}
</style>