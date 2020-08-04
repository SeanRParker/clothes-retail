<template>
  <ul>
    <li v-for="(item, index) in cart" :key="index">
      {{ item.id }}
      <button @click="removeFromCart(index)">Remove Item</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart() {
      return this.$store.getters.cart.map((cartitems) => {
        return this.$store.getters.products.find((itemForSale) => {
          return cartitems === itemForSale.id;
        });
      });
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
