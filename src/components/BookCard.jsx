import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageBlock from "../ui/ImageBlock";
import IsViewIcon from "../ui/IsViewIcon";
import Text from "../ui/Text";
import Title from "../ui/Title";

const StyledLink = styled(Link)`
  display: block;

  img {
    transition: transform 0.2s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

function BookCard({ book, isBookViewed }) {
  const { id, author, name, image, rating, maxRating } = book;

  return (
    <StyledLink to={`/books/${id}`}>
      <ImageBlock src={image} alt={name}>
        <IsViewIcon
          isViewed={isBookViewed}
          style={{ position: "absolute", right: "20px", top: "13px" }}
        />
      </ImageBlock>
      <Title as="h4">{author}</Title>
      <Text size="small">{name}</Text>
      <Text size="small">
        {rating}/{maxRating}
      </Text>
    </StyledLink>
  );
}

export default BookCard;
