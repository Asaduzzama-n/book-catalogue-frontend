// Define an interface for the Author
interface AuthorName {
  firstName: string;
  lastName: string;
}
// Define an interface for the Image
interface Image {
  publicId: string;
  url: string;
}

interface AuthorInfo {
  id: string;
  name: AuthorName;
  email: string;
  address: string;
  bookPublished: string;
  image: Image;
}

interface Author {
  author1?: AuthorInfo;
  author2?: AuthorInfo;
  author3?: AuthorInfo;
}

// Define an interface for the Publisher
interface Publisher {
  name: string;
  address: string;
}

// Define the main interface for the Book
export interface IBook {
  id: string;
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
