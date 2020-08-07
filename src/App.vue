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
        :name="product.productName"
        :price="product.price"
        :quantity="product.quantityInStock"
      />
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart.vue';
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';

export default {
  name: 'App',
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
@import '../reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 15em;
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
