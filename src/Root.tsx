import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  background-color: #f4f4f4;
  height: 50px;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.22);
`;

const TitleContainner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

function Root() {
  return (
    <>
      <Header>
        <TitleContainner>
          <Link to={"/"}>
            <Title>Bean Select</Title>
          </Link>
        </TitleContainner>
      </Header>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default Root;
