<template>
  <div id="app">
    <new-quote :addQuote="addQuote" :quotes="quotes" @quoteAdded="addQuote"></new-quote>
    <QuoteGrid :quotes="quotes" :remove="removeQuote"/>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

export default {
  name: "app",
  data() {
    return {
      quotes: ["test quote 1", "test quote 2"],
      maxQuotes: 10
    };
  },
  methods: {
    addQuote: function(data) {
      this.quotes.push(data);
    },
    removeQuote: function(index) {
      this.quotes.splice(index);
    }
  },
  components: {
    QuoteGrid,
    NewQuote
  }
};
</script>

<style>
</style>
