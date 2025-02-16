<template>
  <div class="card-image">
    <img class="card-image__img" :src="src" :alt="alt" />
    <button class="card-image__favorite" @click="$emit('toggle-favorite')">
      <svg
        :class="{ 'card-image__favorite--active': isFavorite }"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke="white"
          stroke-width="1"
          fill="none"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  isFavorite: Boolean,
});
</script>

<style scoped>
.card-image {
  position: relative;
  width: 100%;
  height: 234px;
}
.card-image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}
.card-image__favorite {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.card-image__favorite svg {
  width: 24px;
  height: 24px;
  transition: fill 0.3s ease;
}
.card-image__favorite--active path {
  fill: red;
  stroke: red;
}
</style>
