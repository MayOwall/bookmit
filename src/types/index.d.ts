import { ReactNode } from "react";

interface ReadingBookShelf {
  books?: ReactNode;
}

interface LargeButton {
  children: ReactNode;
  type?: "fill" | "line";
  onClick?: () => any;
}

interface BookSearchbar {
  handleBookitems: (bookitems: bookitems[]) => void;
}

interface bookinfo {
  isbn: string;
  title: string;
  image: string;
  author: string;
  publisher: string;
}

interface BookInfoCard {
  bookinfo: bookinfo;
  type?: "small" | "large";
}
