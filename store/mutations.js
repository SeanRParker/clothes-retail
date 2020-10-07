export default {
  addToCart(state, index) {
    let foundItem = state.cart.find((item) => item.id === index);

    if (foundItem) {
      console.log("Found ");
      foundItem.quantityInCart += 1;
      console.log(foundItem);
    } else {
      state.cart.push(state.products[index - 1]);
      state.cart.find((item) => item.id === index).quantityInCart++;
    }

    state.products[index - 1].quantityInStock--;
  },
  removeFromCart(state, index) {
    let foundItem = state.cart[index];

    if (foundItem) {
      state.products[state.cart[index].id - 1].quantityInStock += 1;
      foundItem.quantityInCart -= 1;
      state.cart.find((item) => item.quantityInCart === 0)
        ? state.cart.splice(index, 1)
        : "";
    }
  },
};
