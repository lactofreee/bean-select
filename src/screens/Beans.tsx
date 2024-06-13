import styled from "styled-components";
import dummy from "../dB/data.json";
import { Link } from "react-router-dom";

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

const ItemCard = styled.div`
  display: flex;
`;

const ItemCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductImg = styled.img`
  height: 150px;
  width: 130px;
  margin: 0px 30px 0px 0px;
`;

const Info = styled.div`
  padding: 10px 0px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

const InfoSubTitle = styled(InfoTitle)`
  color: #999999;
  padding-top: 10px;
  font-weight: 400;
`;

const InfoText = styled(InfoSubTitle)`
  font-size: 13px;
  margin-bottom: 4px;
`;
const InfoTag = styled.span`
  background-color: #829dd2;
  font-size: 13px;
  color: white;
  padding: 2px 5px;
`;

function Beans() {
  dummy.beans.map((data) => console.log(data.productImage));

  return (
    <Container>
      <ListHeader>
        <ListTitle>전체원두</ListTitle>
        <Line />
      </ListHeader>
      <ItemCards>
        {dummy.beans.map((bean) => (
          <ItemCard key={bean.id}>
            <Link to={`/${bean.enName}`}>
              <ProductImg src={bean.productImage} alt={bean.enName} />
            </Link>
            <Info>
              <Link to={`/${bean.enName}`}>
                <InfoTitle>{bean.krName}</InfoTitle>
                <InfoSubTitle>{bean.enName}</InfoSubTitle>
              </Link>
              <InfoText>
                {bean.info.roastery} | {bean.info.variety}
              </InfoText>
              <InfoTag>{bean.info.process}</InfoTag>
            </Info>
          </ItemCard>
        ))}
      </ItemCards>
    </Container>
  );
}

export default Beans;
