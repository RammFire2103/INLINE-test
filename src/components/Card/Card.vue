<template>
  <div class="card">
    <CardImage
      :src="image"
      :alt="title"
      @toggle-favorite="toggleFavorite"
      :is-favorite="isFavorite"
    />

    <div class="card__info">
      <CardInfo :title="title" :farmer="farmer" />
      <div class="card__actions">
        <CardPrice :price="price" :unit="unit" />
        <CardActions @add-to-cart="addToCart" />
      </div>
      <CardRating :rating="rating" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardImage from "./CardImage.vue";
import CardInfo from "./CardInfo.vue";
import CardPrice from "./CardPrice.vue";
import CardRating from "./CardRating.vue";
import CardActions from "./CardActions.vue";

defineProps({
  image: String,
  title: String,
  farmer: String,
  price: Number,
  unit: String,
  rating: Number,
});

const isFavorite = ref(false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const addToCart = () => {
  console.log("Товар добавлен в корзину!");
};
</script>

<style scoped>
.card {
  min-width: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  text-align: start;
}
.card__info {
  padding: 14px 0 14px 12px;
}
.card__actions {
  display: flex;

  justify-content: space-between;
}
</style>
