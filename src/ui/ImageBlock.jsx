import styled, { css } from "styled-components";

const Image = styled.img`
  display: block;
  width: 100%;
`;

const StyledImageBlock = styled.div`
  border-radius: var(--small-border-radius);
  overflow: hidden;
  position: relative;

  ${(props) =>
    props.size === "default" &&
    css`
      height: 240px;
      margin-bottom: 8px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      height: 358px;
    `}
`;

function ImageBlock({ size = "default", src, alt, children }) {
  return (
    <StyledImageBlock size={size}>
      <Image src={src} alt={alt} />
      {children}
    </StyledImageBlock>
  );
}

export default ImageBlock;
