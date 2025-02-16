<template>
  <div class="description">
    <p class="description__text">
      Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по
      сравнению с обычными. Они славятся низкой калорийностью и высоким
      содержанием витаминов, клетчатки, пектина и минеральных веществ. В них
      содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.
    </p>
    <p class="description__text">
      Помидор - незаменимый продукт в мировой кулинарии. Он - основа
      многочисленных соусов, маринадов, кетчупа, испанского холодного супа
      Гаспачо или итальянской закуски Капрезе. С ним делают салаты, его тушат,
      солят и консервируют. Помидоры на веточке особенно красиво смотрятся в
      запеченном виде.
    </p>

    <div class="product-info">
      <div class="product-info__section">
        <List>
          <template #header>
            <ListHeader>ХАРАКТЕРИСТИКИ</ListHeader>
          </template>
          <ListItem name="Страна" value="Россия" />
          <ListItem name="Поставщик" value="Фермеры: Наталья и Юрий Лейшан" />
          <ListItem name="Тип упаковки" value="Крафтовый пакет" />
          <ListItem name="Сертификаты качества" value="В наличии" />
        </List>
      </div>

      <div class="product-info__section">
        <List>
          <template #header>
            <ListHeader>ПИЩЕВАЯ ЦЕННОСТЬ НА 100г</ListHeader>
          </template>
          <ListItem name="Энергетическая ценность" value="18 кКал" />
          <ListItem name="Белки" value="0.9 г" />
          <ListItem name="Жиры" value="0.2 г" />
          <ListItem name="Углеводы" value="3.9 г" />
        </List>
      </div>

      <div class="product-info__section">
        <List>
          <template #header>
            <ListHeader>УСЛОВИЯ ХРАНЕНИЯ</ListHeader>
          </template>
          <ListItem name="Срок хранения" value="7 дней" />
          <ListItem name="Температура хранения" value="от 3 ° до 7 °" />
        </List>
      </div>
    </div>
    <Slider />
  </div>
</template>

<script setup>
import List from "../components/List/List.vue";
import ListItem from "../components/List/ListItem.vue";
import ListHeader from "../components/List/ListHeader.vue";
import Slider from "../components/Slider.vue";
</script>

<style scoped>
.description {
  margin-bottom: 25px;
}

.description__text {
  text-align: start;
  color: #444;
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 30px;

  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.product-info {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  row-gap: 20px;
  column-gap: 102px;

  margin-bottom: 56px;
}

.product-info__section {
  border-radius: 5px;
}

@media screen and (width <= 750px) {
  .product-info {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
