<template>
  <div>
    <ul :key="id">
      <li>
        {{ name }} - £{{ price.toFixed(2) }} - Quantity: {{ quantity }}
        <!-- <label for="quantity">Quantity:</label>
        <select name="quantity">
          <option>{{ quantity }}</option> 
        </select>-->
        <button @click="addToCart(id)">+</button>
        <p
          class="warning"
          v-if="noStockLeft"
        >Sorry, this item is out of stock, please select another</p>
      </li>
    </ul>
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
  name: 'product',
  props: ['id', 'name', 'quantity', 'price'],
  methods: {
    addToCart(id) {
      if (this.$store.getters.products[id - 1].quantityInStock > 0) {
        this.$store.dispatch('addToCart', id);
      } else {
        this.noStockLeft = true;
      }
    },
    // ...mapActions(["addToCart(id)"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
