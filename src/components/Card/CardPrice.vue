<template>
  <div class="card-price">
    <span class="card-price__value">{{ price }} ₽</span>
    <span class="card-price__unit">/ {{ unit }}</span>
  </div>
</template>

<script setup>
defineProps({
  price: Number,
  unit: String,
});
</script>

<style scoped>
.card-price {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 5px 0;
}
.card-price__unit {
  font-size: 0.85rem;
  color: gray;
}
</style>
