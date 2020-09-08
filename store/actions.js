export const addToCart = ({ commit }, id) => {
  commit("addToCart", id);
};
export const removeFromCart = ({ commit }, id) => {
  commit("removeFromCart", id);
};
