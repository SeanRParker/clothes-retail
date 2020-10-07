export const addToCart = ({ commit }, id) => {
  commit("addToCart", id);
};
export const removeFromCart = ({ commit }, id) => {
  commit("removeFromCart", id);
};
// export const countItems = ({ commit }) => {
//   commit("countItems");
// };
