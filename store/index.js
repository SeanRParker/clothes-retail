import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        productName: "Almond Toe Court Shoes, Patent Black",
        category: "Women’s Footwear",
        price: 99.0,
        quantityInStock: 5,
      },
      {
        id: 2,
        productName: "Suede Shoes, Blue",
        category: "Women’s Footwear",
        price: 42.0,
        quantityInStock: 4,
      },
      {
        id: 3,
        productName: "Leather Driver Saddle Loafers, Tan",
        category: "Men’s Footwear",
        price: 34.0,
        quantityInStock: 12,
      },
      {
        id: 4,
        productName: "Flip Flops, Red",
        category: "Men’s Footwear",
        price: 19.0,
        quantityInStock: 6,
      },
      {
        id: 5,
        productName: "Flip Flops, Blue",
        category: "Men’s Footwear",
        price: 19.0,
        quantityInStock: 0,
      },
      {
        id: 6,
        productName: "Gold Button Cardigan, Black",
        category: "Women’s Casualwear",
        price: 167.0,
        quantityInStock: 6,
      },
      {
        id: 7,
        productName: "Cotton Shorts, Medium Red",
        category: "Women’s Casualwear",
        price: 30.0,
        quantityInStock: 5,
      },
      {
        id: 8,
        productName: "Fine Stripe Short Sleeve Shirt, Grey",
        category: "Men’s Casualwear",
        price: 49.99,
        quantityInStock: 9,
      },
      {
        id: 9,
        productName: "Fine Stripe Short Sleeve Shirt, Green",
        category: "Men’s Casualwear",
        price: 49.99,
        discountPrice: 39.99,
        quantityInStock: 3,
      },
      {
        id: 10,
        productName: "Sharkskin Waistcoat, Charcoal",
        category: "Men’s Formalwear",
        price: 75.0,
        quantityInStock: 2,
      },
      {
        id: 11,
        productName: "Lightweight Patch Pocket Blazer, Deer",
        category: "Men’s Formalwear",
        price: 175.5,
        quantityInStock: 1,
      },
      {
        id: 12,
        productName: "Bird Print Dress, Black",
        category: "Women’s Formalwear",
        price: 270.0,
        quantityInStock: 10,
      },
      {
        id: 13,
        productName: "Mid Twist Cut-Out Dress, Pink",
        category: "Women’s Formalwear",
        price: 540.0,
        quantityInStock: 5,
      },
    ],
    cart: [],
    fiveoff: false,
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
  mutations: {
    ADD_ITEM(state, id) {
      state.cart.push(state.products[id - 1]);
      state.products[id - 1].quantityInStock--;
    },
    REMOVE_ITEM(state, index) {
      state.products[state.cart[index].id - 1].quantityInStock += 1;
      state.cart.splice(index, 1);
    },
    APPLY_FIVE(state) {
      state.fiveoff = !state.fiveoff;
    },
  },
  actions: {
    addToCart(context, id) {
      context.commit("ADD_ITEM", id);
    },
    removeFromCart(context, id) {
      context.commit("REMOVE_ITEM", id);
    },

    applyFiveOff(context) {
      context.commit("APPLY_FIVE");
    },
  },
  modules: {},
});
