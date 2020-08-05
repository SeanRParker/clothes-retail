<template>
  <div>
    <h3 v-if="cart.length">Cart - {{ cart.length }}</h3>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.productName }} - £{{ item.price.toFixed(2) }}
        <button
          @click="removeFromCart(index)"
        >Remove Item</button>
      </li>
    </ul>
    <p v-if="cart.length">Total: £{{ totalPrice.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    totalPrice() {
      let total = this.$store.getters.cart
        .map((item) => item.price)
        .reduce((a, b) => a + b);
      console.log(total);
      return total;
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id);
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style-type: none;
}
</style>
