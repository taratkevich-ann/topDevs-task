import { useState } from "react";
import styled from "styled-components";
import { SORT_OPTIONS } from "../constants/dropdownOptions";
import { useBooks } from "../hooks/useBooks";
import ContentWrapper from "../ui/ContentWrapper";
import BooksList from "../components/BooksList";
import Sorting from "../ui/Sorting";
import Text from "../ui/Text";
import Title from "../ui/Title";

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
`;

function Books() {
  const [selectedOption, setSelectedOption] = useState(SORT_OPTIONS[1]);
  const { books, getNextBooks, hasMore, booksNumber } = useBooks(
    selectedOption.value
  );
  const booksAmount = booksNumber;

  return (
    <ContentWrapper
      type="small"
      headerElement={<Title as="h1">Books read this month</Title>}
    >
      <TopInfo>
        <Text size="large">{booksAmount} books</Text>
        <Sorting
          value={selectedOption}
          onSelect={setSelectedOption}
          options={SORT_OPTIONS}
        />
      </TopInfo>
      <BooksList books={books} onNext={getNextBooks} hasMore={hasMore} />
    </ContentWrapper>
  );
}

export default Books;
