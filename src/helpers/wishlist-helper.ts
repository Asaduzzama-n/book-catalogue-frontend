export const isWishListed = (wishlist: any, bookId: string): boolean => {
  return wishlist?.some((wish: any) => wish.book === bookId);
};

// interface IWishlistOption {
//   data: {
//     book: string;
//     user: string;
//   };
// }

// export const handleAddAndRemoveWishlist = async (
//   operation: string,
//   { data }: IWishlistOption
// ) => {
//   if (operation === "add") {
//     return await instance({
//       url: `${getBaseUrl()}/wishlist`,
//       method: "POST",
//       data,
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     });
//   } else if (operation == "remove") {
//     return await instance({
//       url: `${getBaseUrl()}/wishlist`,
//       method: "DELETE",
//       data,
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     });
//   }
// };
