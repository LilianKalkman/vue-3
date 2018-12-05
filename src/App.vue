<template>
  <div id="app">
    <new-quote :addQuote="addQuote" :quotes="quotes"></new-quote>
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
    addQuote: function() {
      return function(q) {
        this.quotes.push(q);
      };
      console.log(this.quotes);
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
