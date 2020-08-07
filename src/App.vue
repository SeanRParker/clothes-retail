<template>
  <div id="app">
    <Navbar />
    <Cart :key="cart.id" :name="cart.name" />
    <div id="body">
      <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :img="product.imgSrc"
        :category="product.category"
        :name="product.productName"
        :price="product.price"
        :quantity="product.quantityInStock"
      />
    </div>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Navbar from "./components/Navbar.vue";
import Product from "./components/Product.vue";

export default {
  name: "App",
  components: {
    Cart,
    Navbar,
    Product,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    cart() {
      return this.$store.getters.cart;
    },
  },
  methods: {
    cartCount() {
      return this.$store.cart.length;
    },
  },
};
</script>

<style lang="scss">
@import "../reset.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4em auto;
  grid-template-areas: "nav" "content";
}
#body {
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1em;
}
@media (min-width: 550px) {
  #app {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: "nav nav nav" ". content .";
  }
  #body {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 750px) {
  #app {
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-areas: "nav nav nav" ". content .";
  }
  #body {
    grid-template-columns: repeat(3, 1fr);
  }
}
img {
  width: 18em;
}
a,
button {
  cursor: pointer;
}
p,
li {
  font-size: 0.9em;
}
</style>
