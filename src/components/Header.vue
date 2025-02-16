<template>
  <header class="header">
    <nav class="header__nav">
      <router-link
        class="header__link"
        to="/"
        active-class="header__link--active"
        >Описание</router-link
      >
      <router-link
        class="header__link"
        to="/reviews"
        active-class="header__link--active"
        >Отзывы</router-link
      >
      <router-link
        class="header__link"
        to="/fromWhere"
        active-class="header__link--active"
        >Откуда?</router-link
      >
    </nav>
  </header>
</template>

<style>
.header {
  margin-top: 12px;
  margin-bottom: 56px;

  height: 2.5em;

  border-bottom: solid 1px #b2b2b2;
}

.header__nav {
  display: flex;

  height: 2.5em;

  justify-content: center;
  gap: 6rem;
}

.header__link {
  display: block;
  position: relative;
  height: 100%;

  color: #444444;
  font-weight: 600;

  text-decoration: none;
}

.header__link--active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background-color: #28a745;
  border-radius: 2px;
}

.header__link:hover {
  color: #007bff;
}

@media screen and (width <= 510px) {
  .header__nav {
    justify-content: space-between;
    gap: 0;
  }
}
</style>
