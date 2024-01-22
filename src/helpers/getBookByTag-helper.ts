import { IBook } from "@/types/globalTypes";

export function filterBooksByTag(books: IBook[], tag: string) {
  return books.filter((book) => book?.tags && book?.tags.includes(tag));
}
