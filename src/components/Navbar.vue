<template>
  <nav class="main-nav">
    <span></span>
    <img class="site-logo" src="@/assets/bodan.png" />
    <p class="cart" @click="openCart()">
      <img src="@/assets/shopping-bag.png" class="cart-icon" />
      <span
        :class="[$store.getters.cart.length ? 'alert-item-added' : '']"
      >{{this.$store.getters.cart.length}}</span>
    </p>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    openCart() {
      document.getElementById('shopping-bag').style = 'width:28em;';
    },
  },
};
</script>

<style lang="scss" scoped>
img.site-logo {
  width: auto;
  height: 2em;
}
nav.main-nav {
  position: sticky;
  background: white;
  height: 3.5em;
  top: 0;
  border-bottom: solid 1px slategrey;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5em 1em 1em;
}
.cart {
  cursor: pointer;
  span {
    width: 1.3em;
    display: inline-block;
    font-size: 0.8em;
    vertical-align: top;
  }
  .alert-item-added {
    border-radius: 50%;
    background: chocolate;
    color: white;
    width: 1.3em;
  }
}
.cart-icon {
  width: 1em;
  height: auto;
}
</style>