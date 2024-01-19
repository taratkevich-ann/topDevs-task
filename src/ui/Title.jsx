import styled, { css } from "styled-components";

const Title = styled.h1`
  font-weight: 600;
  text-transform: capitalize;
  line-height: normal;
  margin: 0;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 18px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 16px;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 14px;
    `}
`;

export default Title;
