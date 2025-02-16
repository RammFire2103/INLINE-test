<template>
  <div class="list">
    <slot name="header"></slot>
    <div class="list__items">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.list {
  border-radius: 5px;
  max-width: 400px;
}

.list__items {
  margin-top: 1.3125rem;
}

@media screen and (width <= 750px) {
  .list {
    max-width: none;
  }
}
</style>
