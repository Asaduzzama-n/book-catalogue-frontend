export const isBookBought = (userBooks: string[], bookId: string): boolean => {
  return userBooks?.includes(bookId);
};
