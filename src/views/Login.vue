<template>
  <div>
    <h1 v-if="$store.state.username != ''">Usuario: {{ $store.state.username }} </h1>
    <h1 v-if="$store.state.password != ''">Usuario: {{ $store.state.password }} </h1>
    <h2>Cambio de Usuario</h2>
    <form action="" @submit.prevent="changeUser">
      <label for="username">Usuario:<input type="text" name="username" v-model="username"></label>
      <label for="password">Contraseña<input type="text" name="password" v-model="password"></label>
      <input type="submit" value="Cambiar" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    }
  }
  , methods: {
    changeUser() {
      console.log(`Usuario ${this.username} | Contraseña: ${this.password}`);
      const payload = {
        username: this.username,
        password: this.password,
      }
      this.$store.commit("setUserProperty", payload);
    }
  }
}
</script>