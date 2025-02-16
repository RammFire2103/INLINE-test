<template>
  <button class="card-actions" @click="$emit('add-to-cart')">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6h15l-1.5 9h-12L6 6zM3 6h3m3 12a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="white"
        stroke-width="2"
        fill="none"
      />
    </svg>
  </button>
</template>

<style scoped>
.card-actions {
  background: #429f3a;
  border-radius: 1000px 0 0 1000px;
  width: 66px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.card-actions svg {
  width: 28px;
  height: 28px;
}
</style>
