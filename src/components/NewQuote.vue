<template>
  <div>
    <input type="text" @change="handleInput">
    <input type="text" @change="createNew">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newQuote: ""
    };
  },
  methods: {
    handleInput(event) {
      this.newQuote = event.target.value;
      this.quotes.push(this.newQuote);
    },
    createNew(event) {
      this.newQuote = event.target.value;
      this.$emit("quoteAdded", this.newQuote);
      this.newQuote = " ";
    }
  },
  props: ["addQuote", "quotes"]
};
</script>

<style>
</style>
