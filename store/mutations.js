export default {
  addToCart(state, id) {
    state.cart.push(state.products[id - 1]);
    state.products[id - 1].quantityInStock--;
  },
  removeFromCart(state, index) {
    state.products[state.cart[index].id - 1].quantityInStock += 1;
    state.cart.splice(index, 1);
  },
};
