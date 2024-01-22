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
  page: string;
  readTime: string;
  sold: number;
  categoryName: string;
  tags: string[];
}

type userName = {
  firstName: string;
  lastName: string;
};

type image = {
  publicId: string;
  url: string;
};

export type IUser = {
  name: userName;
  email: string;
  password: string;
  contactNo?: string;
  address?: string;
  gender?: "male" | "female";
  dateOfBirth: string;
  image?: image;
  role: string;
  isSubscribe: true | false;
};

export interface IReview {
  id: string;
  title: string;
  review: string;
  book: string;
  user: IUser;
  rating: number;
  helpfulVotes: number;
  unhelpfulVotes: number;
  inappropriateCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type authorName = {
  firstName: string;
  lastName?: string;
};

export type authorImage = {
  publicId: string;
  url: string;
};
export type IAuthor = {
  id: string;
  name: authorName;
  email: string;
  bio: string;
  address: string;
  bookPublished?: string;
  image?: authorImage;
};

export type IReviewResponse = {
  reviews: IReview[] | null;
  avgRating: number;
  ratingCounts: { [key: number]: { count: number; percentage: number } };
  total: number;
};
