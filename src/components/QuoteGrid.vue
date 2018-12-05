<template>
  <div>
    <quote v-for="(quote, i) in quotes">
      <div @click="remove(i)">{{ quote }}</div>
    </quote>
  </div>
</template>

<script>
import bus from "../main.js";
import Quote from "./Quote.vue";

export default {
  props: ["quotes", "remove"],
  methods: {
    removeQuote: function(index) {
      this.quotes.splice(index);
      console.log(this.quotes);
    }
  },
  components: {
    Quote
  }
};
</script>

<style>
</style>
