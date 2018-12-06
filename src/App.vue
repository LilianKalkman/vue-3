<template>
  <div id="app">
    <Header :quotes="quotes" :maxQuotes="maxQuotes"/>
    <new-quote :addQuote="addQuote" :quotes="quotes" @quoteAdded="addQuote"></new-quote>
    <QuoteGrid :quotes="quotes" :remove="removeQuote" @quoteDeleted="removeQuote"/>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

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
      this.quotes.splice(index, 1);
    }
  },
  components: {
    QuoteGrid,
    NewQuote,
    Header
  }
};
</script>

<style>
</style>
