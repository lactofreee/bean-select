import styled from "styled-components";
import ShowItems from "../components/ShowItems";

const Container = styled.div``;

const ListHeader = styled.div`
  margin-top: 30px;
`;

const ListTitle = styled.h1`
  font-size: 22px;
`;

const Line = styled.hr`
  background-color: black;
  height: 1px;
  border: 0;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  max-width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  padding: 15px;
  background-color: #F0ECE8;
`;

const Section = styled.div``;

const Filter = styled.div`
  background-color: white;
`;

function Beans() {
  return (
    <Main>
      <Section>
        <Container>
          <ListHeader>
            <ListTitle>전체원두</ListTitle>
            <Line />
          </ListHeader>
          <ShowItems />
        </Container>
      </Section>
      <Filter />
    </Main>
  );
}

export default Beans;
