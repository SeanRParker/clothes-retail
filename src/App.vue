<template>
  <div id="app">
    <Navbar />
    <Product
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.productName"
      :price="product.price"
      :quantity="product.quantityInStock"
    />
    <p v-if="cart.length">Cart - {{ cart.length }}</p>
    <Cart :key="cart.id" :name="cart.name" />
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Product from "./components/Product.vue";
import Navbar from "./components/Navbar.vue";

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
