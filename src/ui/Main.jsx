import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  padding: 50px 15px;
`;

const Conatiner = styled.div`
  max-width: 1112px;
  margin: 0 auto;
  width: 100%;
`;

function Main() {
  return (
    <StyledMain>
      <Conatiner>
        <Outlet />
      </Conatiner>
    </StyledMain>
  );
}

export default Main;
