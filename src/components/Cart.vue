<template>
  <div class="shopping-bag" v-if="cart.length">
    <div class="cart-header">
      <h3>Cart - {{ cart.length }}</h3>
    </div>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.productName }} - £{{ item.price.toFixed(2) }}
        <button
          @click="removeFromCart(index)"
        >-</button>
      </li>
    </ul>
    <p>Total: £{{ totalPrice().toFixed(2) }}</p>
    <label for="coupon">Coupon Code:</label>
    <input v-model="offer" name="coupon" placeholder="Offer Code" />
    <p v-if="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      offer: '',
      msg: '',
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id);
    },
    checkKeysForString(type, str) {
      let foundKeys = this.$store.getters.cart.map((item) => item[type]);
      return foundKeys.map((item) => item.includes(str)).includes(true);
    },
    totalPrice() {
      let total = this.$store.getters.cart
        .map((item) => item.price)
        .reduce((a, b) => a + b);
      // 'fiveoff' - £5 off your order
      if (this.offer === 'fiveoff') {
        this.msg = 'Enjoy $5 off!';
        return total - 5;
      }
      // 'tenner' - £10 off order if greater than 50
      if (this.offer === 'tenner' && total < 50) {
        this.msg = 'Sorry, to get £10 off, your purchase must exceed $50!';
        return total;
      }
      if (this.offer === 'tenner' && total >= 50) {
        this.msg = 'Enjoy £10 off!';
        return total - 10;
      }
      // 'flipflop' - cart includes footwear && total > 75
      if (
        this.offer === 'flipflop' &&
        this.checkKeysForString('category', 'Footwear') &&
        total >= 75
      ) {
        this.msg = 'Enjoy £15 off!';
        return total - 15;
      } else if (this.offer === 'flipflop' && total < 75) {
        this.msg = 'Purchase must exceed £75 for coupon to apply';
      } else if (
        this.offer === 'flipflop' &&
        this.checkKeysForString('category', 'Footwear') === false &&
        total > 75
      ) {
        this.msg = 'Purchase must include footwear for coupon to apply';
        return total;
      } else {
        this.msg = '';
        return total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style-type: none;
}
.cart-header {
  text-align: right;
  h3 {
    text-align: center;
  }
}
.close-icon {
  cursor: pointer;
}
#shopping-bag {
  background: snow;
  transition: display 0.4s;
  // position: fixed;
  // right: 0;
  width: 50em;
  z-index: 1;
  height: 100vh;
  // box-shadow: 1px 1px 10px black;

  i {
    font-size: 3em;
    font-style: normal;
  }
}
</style>
