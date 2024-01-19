import styled, { css } from "styled-components";

const StyledWrapper = styled.section`
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-color);
  background-color: transparent;
`;

const Header = styled.header`
  padding: 24px 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--grey-color);
`;

const Content = styled.div`
  ${(props) =>
    props.type === "small" &&
    css`
      padding: 22px 32px;
    `}

  ${(props) =>
    props.type === "default" &&
    css`
      padding: 40px;
    `}
`;

function ContentWrapper({ type = "default", headerElement, children }) {
  return (
    <StyledWrapper>
      {headerElement && <Header>{headerElement}</Header>}

      <Content type={type}>{children}</Content>
    </StyledWrapper>
  );
}

export default ContentWrapper;
