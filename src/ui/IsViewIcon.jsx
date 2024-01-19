import styled from "styled-components";

const IconWrapper = styled.div`
  width: 32px;
`;

const Icon = styled.img`
  width: 100%;
`;

function IsViewIcon({ isViewed, ...props }) {
  return (
    <IconWrapper {...props}>
      {isViewed ? (
        <Icon src="/viewed-icon.svg" alt="viewed icon" />
      ) : (
        <Icon src="/not-viewed-icon.svg" alt="not viewed icon" />
      )}
    </IconWrapper>
  );
}

export default IsViewIcon;
