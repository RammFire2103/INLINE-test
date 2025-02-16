<template>
  <div class="reviews">
    <p class="reviews__text">
      Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом указываете
      нам на зоны роста. Мы правда, читаем все отзывы.
    </p>
    <button class="reviews__button">Оставить отзыв</button>
  </div>
</template>

<script setup></script>

<style scoped>
.reviews {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.reviews__text {
  text-align: start;
  font-size: 0.875rem;
}

.reviews__button {
  padding: 10px 18px;
  background-color: #429f3a;
  color: white;
}

@media screen and (width <= 750px) {
  .reviews {
    width: 100%;
  }
}
</style>
