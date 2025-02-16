<template>
  <div class="card-rating">
    <span
      v-for="i in 5"
      :key="i"
      class="card-rating__star"
      :class="{ 'card-rating__star--filled': i <= rating }"
    >
      ★
    </span>
  </div>
</template>

<script setup>
defineProps({
  rating: Number,
});
</script>

<style scoped>
.card-rating {
  margin: 5px 0;
}
.card-rating__star {
  font-size: 1rem;
  color: lightgray;
}
.card-rating__star--filled {
  color: gold;
}
</style>
