<template>
  <div>
    <quote v-for="(quote, i) in quotes">
      <div @click="removeQuote(i)">{{ quote }}</div>
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
      this.$emit("quoteDeleted", index);
    }
  },
  components: {
    Quote
  }
};
</script>

<style>
</style>
