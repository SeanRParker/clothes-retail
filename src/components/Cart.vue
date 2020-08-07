<template>
  <div id="shopping-bag">
    <div class="cart-header">
      <i class="close-icon" @click="closeCart()">&times;</i>
      <p class="empty-cart-msg" v-if="cart.length === 0">Shopping bag is empty.</p>
      <p>Items in Bag - {{ cart.length }}</p>
    </div>
    <div class="cart-container" v-if="cart.length">
      <div class="coupon-group">
        <label for="coupon">Coupon Code:&nbsp;</label>
        <input class="coupon" v-model="offer" name="coupon" placeholder="Offer Code" />
        <p class="coupon-msg" v-if="msg">{{msg}}</p>
      </div>
      <p class="total-amt">Total: £{{ totalPrice().toFixed(2) }}</p>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <span>
            <button @click="removeFromCart(index)">-</button>
            {{ item.productName }} - £{{ item.price.toFixed(2) }}
          </span>
          <img class="cart-img" :src="item.imgSrc" />
        </li>
      </ul>
    </div>
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
    closeCart() {
      document.getElementById('shopping-bag').style = 'width:0;';
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
        return total;
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
#shopping-bag {
  background: snow;
  transition: display 0.4s;
  position: fixed;
  top: 0;
  right: 0;
  width: 1px;
  z-index: 1;
  height: 100vh;
  overflow: scroll;
  box-shadow: 1px 1px 10px black;
  transition: width 0.2s;
  text-align: left;
  .cart-container {
    .cart-img {
      width: 5em;
    }
    ul {
      overflow: auto;
      text-align: right;
      li {
        border-bottom: 1px solid lightgrey;
        padding: 0.5em 0 0.2em;
        display: inline-block;
        width: 100%;
        span {
          display: inline-block;
          text-align: left;
          width: 82%;
          padding-bottom: 0.5em;
        }
      }
    }
    padding: 0 1em;
  }
  .coupon-group {
    vertical-align: middle;
    margin: 2em 0 0;
    padding-bottom: 1em;
    .coupon-msg {
      text-align: center;
      margin-left: 1em;
    }
  }
  .total-amt {
    font-weight: bold;
    font-size: 0.9em;
    text-align: right;
  }
  i {
    font-size: 3em;
    font-style: normal;
  }
}
ul li {
  list-style-type: none;
}
.cart-header {
  text-align: right;
  p {
    text-align: center;
  }
}
.close-icon {
  cursor: pointer;
  font-size: 1em;
  margin-right: 0.2em;
}
</style>
