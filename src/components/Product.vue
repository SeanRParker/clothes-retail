<template>
  <div class="product">
    <img class="product-img" @click="addToCart(id)" :src="img" />
    <i :id="`prod-${id}-add`" class="add-icon" @click="addToCart(id)">+</i>
    <p :id="`prod-${id}-name`">{{ name }}</p>
    <p :id="`prod-${id}-category`">{{ category }}</p>
    <p :id="`prod-${id}-price`">Price: £{{ price.toFixed(2) }}</p>
    <p :id="`prod-${id}-quantity`">In Stock: {{ quantity }}</p>
    <p class="warning" v-if="quantity === 0">
      Sorry, this item is out of stock, please select another
    </p>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      noStockLeft: false,
    };
  },
  name: "product",
  props: ["id", "img", "category", "name", "quantity", "price"],
  methods: {
    addToCart(id) {
      if (this.$store.getters.products[id - 1].quantityInStock > 0) {
        this.$store.dispatch("addToCart", id);
        this.noStockLeft = false;
      } else {
        this.noStockLeft = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-self: center;
}
.product-img {
  cursor: pointer;
  height: 20em;
  border-radius: 0.2em;
  margin: 0 auto;
}
.add-icon {
  position: relative;
  height: 1.2em;
  display: block;
  font-style: normal;
  font-size: 2em;
  cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.warning {
  color: red;
}
</style>
