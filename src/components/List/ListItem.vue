<template>
  <div class="list__item">
    <span class="list__item-name">{{ name }}</span>
    <span class="list__item-value">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: String, // Имя поля
  value: String, // Значение поля
});
</script>

<style>
.list__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  font-size: 0.75rem;
}

.list__item:not(:first-child) {
  padding-top: 0.75rem;
}

.list__item-name {
  color: #454343;
}

.list__item-value {
  color: #454343;
}
</style>
