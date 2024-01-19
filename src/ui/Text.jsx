import styled, { css } from "styled-components";

const Text = styled.p`
  margin: 0;
  text-transform: capitalize;

  ${(props) =>
    props.size === "default" &&
    css`
      font-size: 16px;
      &:not(:last-of-type) {
        margin-bottom: 26px;
      }
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 14px;
      line-height: 1.71;
    `}

    ${(props) =>
    props.size === "large" &&
    css`
      font-size: 18px;
    `}
`;

export default Text;
