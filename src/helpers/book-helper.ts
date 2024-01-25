import { IBook } from "@/types/globalTypes";

export const isBestSeller = (book: IBook): boolean => {
  return book.sold > 10;
};

export const isNewArrival = (book: IBook): boolean => {
  const createdAtDate = new Date(book.createdAt);
  const currentDate = new Date();

  // Calculate the difference in months between the current date and the book's creation date
  const monthsDifference =
    (currentDate.getFullYear() - createdAtDate.getFullYear()) * 12 +
    (currentDate.getMonth() - createdAtDate.getMonth());

  return monthsDifference <= 4;
};
