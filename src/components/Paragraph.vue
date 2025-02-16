<template>
  <p class="paragraph">
    <span class="paragraph__text"
      >This is an example of a paragraph that follows the BEM methodology.</span
    >
    <button class="paragraph__button">Learn More</button>
  </p>
</template>

<script setup></script>

<style scoped>
.paragraph {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin: 20px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.paragraph__text {
  display: inline-block;
  margin-right: 15px;
}

.paragraph__button {
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.paragraph__button:hover {
  background-color: #0056b3;
}
</style>
