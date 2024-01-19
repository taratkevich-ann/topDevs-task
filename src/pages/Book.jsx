import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import books from "../data/data.json";
import BackButton from "../ui/BackButton";
import ContentWrapper from "../ui/ContentWrapper";
import ImageBlock from "../ui/ImageBlock";
import Text from "../ui/Text";
import Title from "../ui/Title";

const StyledBook = styled.div`
  display: flex;
  gap: 52px;
  font-size: 16px;
  text-transform: capitalize;
`;

const TextRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 36px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  flex-basis: 284px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Book() {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === Number(bookId));

  const {
    name,
    image,
    author,
    rating,
    maxRating,
    description,
    downloads,
    review,
  } = book;

  useEffect(() => {
    document.title = name;

    return () => (document.title = "Books");
  }, [name]);

  useEffect(() => {
    const viewedItems = JSON.parse(localStorage.getItem("viewed")) || "";

    if (!viewedItems) {
      localStorage.setItem("viewed", JSON.stringify([bookId]));
      return;
    }

    if (!viewedItems.includes(String(bookId))) {
      localStorage.setItem("viewed", JSON.stringify([...viewedItems, bookId]));
    }
  }, [bookId]);

  return (
    <ContentWrapper headerElement={<BackButton />}>
      <StyledBook>
        <Wrapper>
          <ImageBlock size="large" src={image} alt={`${name} image`} />
          <TextRow>
            <Title as="h3">Downloads:</Title>
            <Text size="default">{downloads}</Text>
          </TextRow>
        </Wrapper>

        <div>
          <TextRow>
            <Title as="h3">Title:</Title>
            <Text size="default">{name}</Text>
          </TextRow>

          <TextRow>
            <Title as="h3">Author:</Title>
            <Text size="default">{author}</Text>
          </TextRow>

          <TextRow>
            <Title as="h3">Rating:</Title>
            <Text size="default">{`${rating}/${maxRating}`}</Text>
          </TextRow>

          <TextRow>
            <Title as="h3">Description:</Title>
            <Text size="default">{description}</Text>
          </TextRow>

          <TextRow>
            <Title as="h3">Reader reviews:</Title>
            <div>
              <Text size="default">
                <q style={{ display: "block" }}>{review.title}</q>
                <span>
                  {review.name}, {review.age} Years Old
                </span>
              </Text>
              <Text size="default">{review.message}</Text>
            </div>
          </TextRow>
        </div>
      </StyledBook>
    </ContentWrapper>
  );
}

export default Book;
