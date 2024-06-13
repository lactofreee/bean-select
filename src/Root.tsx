import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  background-color: #d7d7d0;
  height: 50px;
  width: 100%;
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
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  max-width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  padding: 15px;
  background-color: #ffffff;
`;

const Section = styled.div``;

const Filter = styled.div`
  background-color: white;
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
        <Main>
          <Section>
            <Outlet />
          </Section>
          <Filter></Filter>
        </Main>
      </Wrapper>
    </>
  );
}

export default Root;
