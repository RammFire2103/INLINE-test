<template>
  <div class="wrapper">
    <Header />

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import "./style.css";
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
