import { useState } from "react";
import books from "../data/data.json";

const BOOKS_PER_PAGE = 10;

export function useBooks(sortedValue) {
  const [page, setPage] = useState(1);

  function compare(value1, value2) {
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
    return 0;
  }

  const sortedBooks = books.toSorted((item1, item2) => {
    let value1 = item1[sortedValue];
    let value2 = item2[sortedValue];

    if (typeof value1 === "string" && typeof value2 === "string") {
      value1 = value1.toUpperCase();
      value2 = value2.toUpperCase();
      return compare(value1, value2);
    }

    return compare(value2, value1);
  });

  const displayedBooks = sortedBooks.slice(0, page * BOOKS_PER_PAGE);
  const hasMore = displayedBooks.length < sortedBooks.length;
  const booksNumber = books.length;

  function getNextBooks() {
    setTimeout(() => {
      setPage((page) => page + 1);
    }, 1000);
  }

  return { books: displayedBooks, getNextBooks, hasMore, booksNumber };
}
