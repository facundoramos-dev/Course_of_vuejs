<template>
  <div>
    Estudiantes
  </div>
  <h1 v-if="$store.state.username != ''">Usuario: {{ $store.state.username }} </h1>
  <h1 v-if="$store.state.password != ''">Usuario: {{ $store.state.password }} </h1>
</template>

<script>
export default {
  name: "Estudiantes"
}
</script>