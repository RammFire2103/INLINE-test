<template>
  <div class="card-info">
    <h3 class="card-info__title">{{ title }}</h3>
    <p class="card-info__farmer">{{ farmer }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  farmer: String,
});
</script>

<style scoped>
.card-info__title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 7px;
}
.card-info__farmer {
  font-size: 0.85rem;
  color: gray;
  margin: 0;
  margin-bottom: 20px;
}
</style>
