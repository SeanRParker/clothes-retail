<template>
  <div id="shopping-bag">
    <div class="cart-header">
      <i class="close-icon" @click="closeCart()">&times;</i>
      <p class="empty-cart-msg" v-if="cart.length === 0">
        Shopping bag is empty.
      </p>
      <p>Items in Bag - {{ countItems() }}</p>
    </div>
    <div class="cart-container" v-if="cart.length">
      <div class="coupon-group">
        <label for="coupon">Coupon Code:&nbsp;</label>
        <input
          class="coupon"
          v-model="offer"
          name="coupon"
          placeholder="Offer Code"
        />
        <p class="coupon-msg" v-if="msg">{{ msg }}</p>
      </div>
      <p
        :class="[totalPrice()[1] > 0 ? 'total-amt strikethrough' : 'total-amt']"
      >
        Total: £{{ totalPrice()[0].toFixed(2) }}
      </p>
      <p v-if="totalPrice()[1] > 0" class="discounted-total-amt">
        Discounted Total: £{{ totalPrice()[1].toFixed(2) }}
      </p>
      <div class="cart-items">
        <div
          class="row"
          @click="removeFromCart(index, id)"
          v-for="(item, index) in cart"
          :key="index"
          :id="item.id"
        >
          <p>
            {{ item.quantityInCart }} {{ item.productName }} - £{{
              item.price.toFixed(2)
            }}
          </p>
          <i class="remove-icon">&minus;</i>
          <img class="cart-img" :src="item.imgSrc" />
        </div>
      </div>
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
    countItems() {
      let cart = this.$store.getters.cart;
      return cart.map((i) => i.quantityInCart).reduce((a, b) => a + b, 0);
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
      let discountedTotal = 0;
      // 'fiveoff' - £5 off your order
      if (this.offer === 'fiveoff') {
        this.msg = 'Enjoy $5 off!';
        discountedTotal = total - 5;
        return [total, discountedTotal];
      }
      // 'tenner' - £10 off order if greater than 50
      if (this.offer === 'tenner' && total < 50) {
        this.msg = 'Sorry, to get £10 off, your purchase must exceed $50!';
        return [total, discountedTotal];
      }
      if (this.offer === 'tenner' && total >= 50) {
        this.msg = 'Enjoy £10 off!';
        discountedTotal = total - 10;
        return [total, discountedTotal];
      }
      // 'flipflop' - cart includes footwear && total > 75
      if (
        this.offer === 'flipflop' &&
        this.checkKeysForString('category', 'Footwear') &&
        total >= 75
      ) {
        this.msg = 'Enjoy £15 off!';
        discountedTotal = total - 15;
        return [total, discountedTotal];
      } else if (this.offer === 'flipflop' && total < 75) {
        this.msg = 'Purchase must exceed £75 for coupon to apply';
        return [total, discountedTotal];
      } else if (
        this.offer === 'flipflop' &&
        this.checkKeysForString('category', 'Footwear') === false &&
        total > 75
      ) {
        this.msg = 'Purchase must include footwear for coupon to apply';
        return [total, discountedTotal];
      } else {
        this.msg = '';
        return [total, discountedTotal];
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
  z-index: 3;
  .cart-container {
    .cart-img {
      width: 5em;
      cursor: pointer;
    }
    .cart-items {
      padding-top: 2em;
      overflow: auto;
      text-align: right;
      .row {
        width: 100%;
        border-bottom: 1px solid lightgrey;
        padding: 0.5em 0 0.2em;
        display: inline-block;
        cursor: pointer;
        p {
          width: 100%;
        }
        .remove-icon {
          text-align: left;
          padding-bottom: 0.5em;
          cursor: pointer;
          position: relative;
          left: -3.5em;
          top: -0.7em;
        }
      }
    }
    padding: 0 1em;
  }
  .coupon-group {
    vertical-align: middle;
    margin: 2em 0 0;
    padding-bottom: 1em;
    input {
      width: 10em;
    }
    .coupon-msg {
      text-align: center;
      margin-left: 1em;
    }
  }
  .strikethrough.total-amt {
    text-decoration: line-through;
    color: darksalmon;
    font-weight: normal;
  }
  .total-amt {
    font-weight: bold;
    font-size: 0.9em;
    text-align: right;
  }
  .discounted-total-amt {
    text-align: right;
    font-weight: 600;
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
