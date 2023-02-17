export const addToWishlist = (data) => {
  console.warn("action called", data);
  return {
    type: "Add_To_Wishlist",
    data: data,
  };
};
