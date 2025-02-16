<template>
  <div class="slider">
    <Swiper
      :slidesPerView="1"
      :spaceBetween="22"
      loop
      :autoplay="{ delay: 3000 }"
      :breakpoints="{
        1000: { slidesPerView: 4 },
        750: { slidesPerView: 3 },
        500: { slidesPerView: 2 },
      }"
    >
      <SwiperSlide>
        <Card
          image="https://s3-alpha-sig.figma.com/img/2964/8562/c49d7ed18547b13d81b93bb0cfebb07b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o1mSeC38bXIXPGXt7L-hJdbP297pwsgKYxB9s5z8VVrSXUb4KBXZDMBXnhpGi32Aq0FpUafwfu8iLiJZNuan2t6kqE~sKfo-aqxDGhn8wB8FhWTiQOJ6-M8Z4WiTGQv5PQupGXqDCD-DcudYo4jzzZExjoFLpYt81PPx11BibcrtW93DwS5LfBe7ocXQaa8B2iY9kBZ3uNsC-iWty3-xD1x-1-cmYPDFtx8xLQnlJ8JtwL11AMKxTsFqL-G9uJTWht470zOFzEZVT1dmYsP289NbgWsqovKomWugngfk5-FW6qcCNmwB94GS3FTO~JBjpl9gwCsJX30lUFjNnRJ9mw__"
          title="Молоко 3,2 %"
          farmer="от Вадима Рошки"
          :price="95"
          unit="0,93 л"
          :rating="5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          image="https://s3-alpha-sig.figma.com/img/0d63/d5c4/f3323a00353557c00b6feca9000b5d80?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qakoQRDrlbBY~OU0jpxNg2p7dk7UcO2f8wuBbRUpbMPAmNK77PI9hdcLURqyZcPdllGXvleWrIKJg8cgXCAROnLX~22fJElIy-SQaxypnNDhBgGfPD~vsLi4zqWC50vI-8n0KEcX9Hpfg4an6QUnAvkBU7nH-MZO04IVEaH5E9MVLfu~MHF-HKt-TQs810vn1-M-hXrpGlfmwYyTFZxq4dL9C70yIcI1IKKdDHGlxFZDz4TrRilW0iazyjvl9s5odn9MlN-xplcqfOFVGYkPKLPr8j9GE255yMJXCYc-mMPJNgPPS6Tdyaad0o09b67cGmDmcyNTKpswa3h-abUFhQ__"
          title="Хлеб пшеничный"
          farmer="от Дарьи и Марии"
          :price="95"
          unit="930 г"
          :rating="5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          image="https://s3-alpha-sig.figma.com/img/f826/93c2/5943a5863ee0f98495345e4a0509c080?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=igYIQzcVICG-5ttZdP6rbY7pr2bt1hTXTMDJsrxgAFvL8W3bJNkJd9EvRNn15ghBzaRkbAfHAzjjAb3th6ObqS4-utC5H9tOV2oM4XjxwDnp3C~b9SiMJmmWhE0zp6nzzAm64CA5MSE80wbN5ZcJ5H6oZr6UJTucGW~flyFBV4wDVX6QtQZu15cwTa0YL0UC-fGtAA5ikiGfWkyZGTKvDlq-6NaYQoBjujvK7mJDkVyMKiIgNkvNk2Hcl9uwqXZYng1OZRyAJ6G0032d2xRYgfjrDyIa15jEVfmQ6fiE82bXOXLAiq5Q1DjIRn5HRlW1XuIoEB~SSrriPPKl8Uj-Wg__"
          title="Яйца куриные"
          farmer="от Евгения Рошаль"
          :price="120"
          unit="10 шт"
          :rating="5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          image="https://s3-alpha-sig.figma.com/img/c183/1ba5/c9e3b668b5cdf169065b524d3ba86dcd?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mDVvFGuOgkjJGUnlDQZT8UHkpF5jObYtyEpyozFVgqb0HeCMyJUblipc81z3MrVOK~PfurzMjwGiFMWNPogbsMBas7eqkcMzurHmRcnr59jKK2OnD4~yYcl79DByDotvynGGFf3zf~C~Gky3eNQNRp8heNY24Yf4wSHWZKejOQst0E5OhM8a8oriesMZEkCTTRnYgMdZsBcSbqHv177ybdq--zfBgmgleXcEvPagUtZzrQxkcfuCuEWkd5lpqbmY08WBAn7SiRN2LeBcvQ~4pazC3Vh6P0nM~wNaAD42oGo5V6aAqpOo-XIqRPOoxL8TmIUG1CzTeakvpr8RHwXjKw__"
          title="Масло сливочное 82 %"
          farmer="от Вадима Рошки"
          :price="290"
          unit="250 г"
          :rating="5"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css"; // Убедись, что импорт верный

import Card from "./Card/Card.vue";
</script>

<style scoped>
/* Стили для слайдера */
.slider {
  width: 100%;
}

.slider img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
