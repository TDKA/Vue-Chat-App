<template>
  <header>
    <nav v-if="user" class="container">
      <h3>
        <i>Logged in as {{ user.email }}</i>
      </h3>
      <ul>
        <li>
          <a @click="handleLogout" class="btn-signout">Se déconnecter</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import useLogout from "../services/useLogout";
import getUser from "../services/getUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("Logout");
        router.push({ name: "Welcome" });
      }
    };

    return { handleLogout, user };
  },
};
</script>

<style>
h3 {
  margin-bottom: 30px;
  color: rgb(172, 172, 172);
}

ul li {
  list-style: none;
}
.btn-signout {
  background: linear-gradient(orangered, rgb(174, 14, 189));
  color: #333;
  text-decoration: none;
  padding: 15px 26px;
  border-radius: 30px;
  cursor: pointer;
  color: #f4f4f4;
}
nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px;
}
small {
  color: rgb(192, 192, 192);
  margin: 30px auto;
}
@media only screen and (max-width: 600px) {
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  ul {
    margin: 13px auto;
  }
  h3 {
    text-align: center;
  }
}
</style>