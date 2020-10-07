export const addToCart = ({ commit }, id) => {
  commit("addToCart", id);
};
export const removeFromCart = ({ commit }, index) => {
  commit("removeFromCart", index);
};
