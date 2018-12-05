import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export const bus = new Vue({
  data: {
    quotes: ["test quote"],
    maxQuotes: 10
  },
  methods: {
    addQuote: function(q) {
      this.quotes.push(q);
      console.log(this.quotes);
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
