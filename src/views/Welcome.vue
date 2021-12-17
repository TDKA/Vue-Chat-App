<template>
  <div class="container-form">
    <div v-if="showLoginForm">
      <LoginForm />
      <div class="btn-container">
        <p>You don't have account yet ?</p>
        <button @click="showLoginForm = false" class="btn-toogle">
          S'inscrire
        </button>
      </div>
    </div>
    <div v-else>
      <SignUpForm />
      <div class="btn-container">
        <button @click="showLoginForm = true" class="btn-toogle">
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
export default {
  components: { SignUpForm, LoginForm },
  setup() {
    const showLoginForm = ref(true);

    return { showLoginForm };
  },
};
</script>

<style>
form {
  padding: 40px 30px;
  max-width: 600px;
  margin: 0 auto;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 30px;
  padding: 23px;
  border-radius: 30px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
  border: none;
  outline: none;
}

.btn-container {
  text-align: center;
}
.btn-container p {
  margin-bottom: 8px;
}

.btn-toogle {
  padding: 17px 28px;
  border: none;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
  background: orangered;
  color: #f4f4f4;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

.btn-submit {
  margin-top: 20px;
  padding: 17px 28px;
  border: none;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
  background: rgb(224, 19, 173);
  color: #f4f4f4;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.btn-container {
  text-align: center;
}
</style>