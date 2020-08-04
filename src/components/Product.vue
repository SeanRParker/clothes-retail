<template>
  <div>
    <ul :key="id">
      <li>
        {{ name }} - £{{ price.toFixed(2) }} - Quantity: {{ quantity }}

        <!-- <label for="quantity">Quantity:</label>
        <select name="quantity">
          <option>{{ quantity }}</option> 
        </select> -->
        <button @click="addToCart(id)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "product",
  props: ["id", "name", "quantity", "price"],

  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
    // ...mapActions(["addToCart(id)"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
