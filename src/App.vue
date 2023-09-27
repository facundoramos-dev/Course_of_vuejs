<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/Login">Login</router-link></li>
        <li><router-link :to="{ name: 'Estudiantes' }">Estudiantes</router-link></li>
      </ul>
    </div>
  </nav>

  <div class="container"><router-view></router-view></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Formulario from './components/Form.vue'

export default {
  name: 'App',

}
</script>

<style scoped>
.nav-wrapper {
  background-color: green;
}
</style>
