// Define an interface for the Author
interface Author {
  author1: string;
  author2?: string;
  author3?: string;
}

// Define an interface for the Publisher
interface Publisher {
  name: string;
  address: string;
}

// Define an interface for the Image
interface Image {
  publicId: string;
  url: string;
}

// Define the main interface for the Book
export interface IBook {
  title: string;
  isbn: string;
  language: string;
  bookDescription: string;
  author: Author;
  category: string;
  publicationYear: string;
  publisher: Publisher;
  version: string;
  price: number;
  bookUrl: Image;
  coverImg: Image;
  quickViewUrl: Image;
}
