import styled from "styled-components";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Wrapper = styled.div`
  text-align: center;
`;

function PageNotFound() {
  return (
    <Wrapper>
      <Title>404</Title>

      <Text size="large">page not found</Text>
    </Wrapper>
  );
}

export default PageNotFound;
