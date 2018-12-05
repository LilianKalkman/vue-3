<template>
  <div>
    <input type="text" @change="handleInput">
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
    }
  },
  props: ["addQuote", "quotes"]
};
</script>

<style>
</style>
