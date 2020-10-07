export default {
  addToCart(state, index) {
    console.log("empty");
    console.log(index);

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
    let foundItem = state.cart.find((item) => item.id === item[index]);
    console.log(index);
    console.log(foundItem);

    if (foundItem) {
      state.products[state.cart[index].id - 1].quantityInStock += 1;
      foundItem.quantityInCart -= 1;
      state.cart.splice(index, 1);
    } else {
      console.log("item NOT found, can't be removed");
    }
  },
};
