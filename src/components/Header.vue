<template>
  <div
    class="header"
    :style="{width: (quotes.length / maxQuotes) * 100 + '%'}"
  >Aantal quotes: {{ quotes.length }}</div>
</template>

<script>
export default {
  props: ["quotes", "maxQuotes"]
};
</script>

<style>
.header {
  background-color: aquamarine;
  display: flex;
  justify-content: center;
}
</style>
