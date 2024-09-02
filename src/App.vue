<script setup>
import { RouterView, RouterLink } from 'vue-router'
// import AdminCitas from './components/AdminCitas.vue'
</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    <!-- <router-link>otra presentación del router link</router-link> -->
  </nav>
  <RouterView/>
</template>

<style scoped></style>
