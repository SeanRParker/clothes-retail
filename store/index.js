import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/20waut_a0740_blk.jpg",
        productName: "Almond Toe Court Shoes, Patent Black",
        category: "Women’s Footwear",
        price: 99.0,
        quantityInStock: 5,
      },
      {
        id: 2,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/20waut_a0740_nav.jpg",
        productName: "Suede Shoes, Blue",
        category: "Women’s Footwear",
        price: 42.0,
        quantityInStock: 4,
      },
      {
        id: 3,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/19maut_mb184_brn.jpg",
        productName: "Leather Driver Saddle Loafers, Tan",
        category: "Men’s Footwear",
        price: 34.0,
        quantityInStock: 12,
      },
      {
        id: 4,
        imgSrc:
          "https://d3d71ba2asa5oz.cloudfront.net/12017362/images/20prflipflopsmenwo_77d5c_red_muk6eu39__1.jpg",
        productName: "Flip Flops, Red",
        category: "Men’s Footwear",
        price: 19.0,
        quantityInStock: 6,
      },
      {
        id: 5,
        imgSrc:
          "https://static.paragonfootwear.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/h/w/hw0001g_blue_1_1.jpg",
        productName: "Flip Flops, Blue",
        category: "Men’s Footwear",
        price: 19.0,
        quantityInStock: 0,
      },
      {
        id: 6,
        imgSrc:
          "https://www.bodenimages.com/productimages/productlarge/20waut_k0320_yel.jpg",
        productName: "Gold Button Cardigan, Black",
        category: "Women’s Casualwear",
        price: 167.0,
        quantityInStock: 6,
      },
      {
        id: 7,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/19wspr_t0301_lrd_w01.jpg",
        productName: "Cotton Shorts, Medium Red",
        category: "Women’s Casualwear",
        price: 30.0,
        quantityInStock: 5,
      },
      {
        id: 8,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/20maut_m0623_mul.jpg",
        productName: "Fine Stripe Short Sleeve Shirt, Grey",
        category: "Men’s Casualwear",
        price: 49.99,
        quantityInStock: 9,
      },
      {
        id: 9,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/20msum_m0503_dgr.jpg",
        productName: "Fine Stripe Short Sleeve Shirt, Green",
        category: "Men’s Casualwear",
        price: 49.99,
        discountPrice: 39.99,
        quantityInStock: 3,
      },
      {
        id: 10,
        imgSrc:
          "https://i.pinimg.com/originals/40/5e/1b/405e1b4a3df6119a1ae0ed0bb8afa81c.jpg",
        productName: "Sharkskin Waistcoat, Charcoal",
        category: "Men’s Formalwear",
        price: 75.0,
        quantityInStock: 2,
      },
      {
        id: 11,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/19mxms_m0394_nav_w01.jpg",
        productName: "Lightweight Patch Pocket Blazer, Deer",
        category: "Men’s Formalwear",
        price: 175.5,
        quantityInStock: 1,
      },
      {
        id: 12,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/20whsm_w0489_ros_w01.jpg",
        productName: "Bird Print Dress, Black",
        category: "Women’s Formalwear",
        price: 270.0,
        quantityInStock: 10,
      },
      {
        id: 13,
        imgSrc:
          "https://www.bodenimages.com/productimages/productxlarge/20wsum_j0681_bpk_w01.jpg",
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
