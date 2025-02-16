<template>
  <div class="from-where">
    <div class="from-where__text">
      <p>
        Томаты на ветке красные (помидоры) - более плотные, яркие и ароматные по
        сравнению с обычными. Они славятся низкой калорийностью и высоким
        содержанием витаминов, клетчатки, пектина и минеральных веществ. В них
        содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.
      </p>
      <p>
        Помидор - незаменимый продукт в мировой кулинарии. Он - основа
        многочисленных соусов, маринадов, кетчупа, испанского холодного супа
        Гаспачо или итальянской закуски Капрезе.
      </p>
    </div>

    <div class="hero">
      <div class="hero__img-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/ab94/45d4/643b7d01235b6db96eeb79fbd0a4803b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P3kl1Nq3A02nVen5wnQo-nKn6G-6IaLfS7BobwQpTjdUYdZhGQjcFsE8IcEFuMy0GoKwhL72Ony5q5WfYSLySl0Lqt4mqhZzGypQRorCDoMDZpki~LVqhcI-7aL~sxybjuyPrMoTEm2FNzbOAlg0udv5~eMbQjbmM1JoxJ1u9MUpb45DtoRQ0nrcS-UMlP4qNNLLHz4oMh9CNENlTMOiHRzMTNSUaCn8FPzR0XFLK~j1k6m6mo7mw0iQ8wUYoGcrhGnUyLnSyeXhSvy9-l2STPtegbfVh-nUN5FW5KKTfjcgvT6QnocRgULApsUfm-r3kAZr713TManuk5BoKJFv6w__"
        />
      </div>
      <div class="hero__buttons">
        <button class="hero__button">Сертификаты</button>
        <button class="hero__button">О поставщике</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  margin-bottom: 25px;
}

.from-where {
  display: flex;
  justify-content: space-between;
}

.from-where__text {
  width: 50%;
  text-align: start;
  font-size: 0.875rem;
}

.hero__img-container {
  aspect-ratio: 10/7;
  overflow: hidden;

  margin-bottom: 25px;
}

.hero__img-container img {
  width: 100%;
}

.hero__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.hero__button {
  border: #444444 1px solid;
  background: white;
}

@media screen and (width <= 700px) {
  .from-where__text {
    width: 100%;
  }

  .hero {
    width: 100%;
  }

  .hero__img-container {
    margin-bottom: 34px;
  }

  .from-where {
    display: flex;
    flex-direction: column;
  }
}
</style>
