import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Loader from "../ui/Loader";
import BookCard from "./BookCard";

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

function BooksList({ books, onNext, hasMore }) {
  const viewedItems = JSON.parse(localStorage.getItem("viewed")) || "";

  return (
    <InfiniteScroll
      dataLength={books.length}
      next={onNext}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <List>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isBookViewed={viewedItems.includes(String(book.id))}
          />
        ))}
      </List>
    </InfiniteScroll>
  );
}

export default BooksList;
