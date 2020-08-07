<template>
  <nav class="main-nav">
    <h3 class="title">Shopping Cart</h3>
    <img class="site-logo" src="@/assets/bodan.png" />
    <p>{{this.$store.getters.cart.length}} cart</p>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    openCart() {
      console.log('openCART!');
      // document.getElementById('shopping-bag').style = 'width:24em;';
    },
  },
};
</script>

<style lang="scss" scoped>
img.site-logo {
  width: auto;
  height: 2em;
}
nav {
  border-bottom: solid 1px slategrey;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>