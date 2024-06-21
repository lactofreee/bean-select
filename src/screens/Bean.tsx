import { useQuery } from "react-query";
import { fetchProductData } from "../routes/api";
import { ProductData, IBeanDetail, IBean } from "../RecoilAtom/Atom";
import styled from "styled-components";
import { fetchData, fetchProductSearchData } from "../routes/api";
import { IBeansResponse } from "../RecoilAtom/Atom";
import {
  useParams,
  useMatch,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import StarRating from "../components/StarRating";
import Note from "../components/Note";
import ShowProductImg from "../components/ShowProductImg";
import ShowProductInfo from "../components/ShowProductInfo";
import ShowComments from "../components/ShowComments";

const Containner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 1200px;
  min-height: 700px;
  max-width: calc(100% - 30px);
  margin: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  height: 500px;
  padding: 10px 15px 0px 15px;
`;

const Section = styled.div``;

const BadgeWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Badge = styled.span`
  padding: 6px 12px 3px 12px;
`;

const ProcessBadge = styled(Badge)`
  color: white;
  background-color: #829dd2;
  border-radius: 5px;
`;

const MiddleBar = styled.span`
  color: #f4f4f4;
`;

const ProductInfo = styled.div`
  margin-left: 20px;
  margin-top: 40px;
`;

const ProductKrName = styled.div`
  font-size: 28px;
  font-weight: 550;
`;
const ProductEnName = styled.div`
  color: #737373;
  font-size: 20px;
  margin-top: 4px;
`;

const ProductPriceSection = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`;

const ProductPrice = styled.h3`
  font-size: 26px;
  font-weight: 600;
`;

const ProductCapacity = styled.h3`
  margin-left: 4px;
  font-size: 18px;
`;

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 20px;
  gap: 4px;
`;

const Score = styled.h3`
  font-size: 20px;
`;

const Tab = styled.span`
  background-color: #d7d7d0;
  padding: 7px 0px;
  border-radius: 10px;
  min-width: 200px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  color: black;
  margin-bottom: 40px;
`;

const Container = styled.div`
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
`;

const TapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Bean() {
  const { beanId } = useParams();
  const location = useLocation();

  const { isLoading: isBeansLoading, data: beansData } =
    useQuery<IBeansResponse>("allBeans", fetchData); //원두 기본정보 fetching, 선행 페이지에서 페칭 하는데 중복 실행됨, 해결 방법 보기

  const { isLoading: isPDLoading, data: PDData } = useQuery<ProductData>(
    "productData",
    fetchProductData
  ); //원두 세부정보 fetching

  // const { isLoading: isTestLoading, data: testData } = useQuery<IBeanDetail>(
  //   "testBeans",
  //   fetchProductSearchData
  // );

  // console.log(testData);

  const beanData = beansData?.beans.find(
    (data) => data.id === Number(beanId)
  ) as IBean;
  const productData = PDData?.coffees.find(
    (data) => data.id === Number(beanId)
  );

  return isBeansLoading || isPDLoading ? (
    <div>Loading...</div>
  ) : (
    <Containner>
      <Main>
        <GridContainer>
          <ShowProductImg
            src={beanData?.productImage}
            alt={beanData?.enName}
          ></ShowProductImg>
          <Section>
            <BadgeWrapper>
              <ProcessBadge>{beanData?.info.process}</ProcessBadge>
              <MiddleBar>|</MiddleBar>
              <Badge>{beanData?.info.country}</Badge>
              <MiddleBar>|</MiddleBar>
              <Badge>{beanData?.info.roastery}</Badge>
            </BadgeWrapper>
            <ProductInfo>
              <ProductKrName>{beanData?.krName}</ProductKrName>
              <ProductEnName>{beanData?.enName}</ProductEnName>
              <ProductPriceSection>
                <ProductPrice>
                  {`${productData?.price.toLocaleString()}원`}
                </ProductPrice>
                <ProductCapacity>
                  {`(${productData?.capacity}g)`}
                </ProductCapacity>
                <StarRatingWrapper>
                  <StarRating score={beanData?.score}></StarRating>
                  <Score>{`(${beanData?.score})`}</Score>
                </StarRatingWrapper>
              </ProductPriceSection>
              <Note
                flavors={productData?.note.flavor}
                acidity={productData?.note.acidity}
                body={productData?.note.body}
              ></Note>
              <ShowProductInfo info={beanData?.info}></ShowProductInfo>
            </ProductInfo>
          </Section>
        </GridContainer>
        <Container>
          {location.pathname !== `/${beanId}/comment` && (
            <TapWrapper>
              <Tab>
                <Link to="comment">리뷰 작성</Link>
              </Tab>
            </TapWrapper>
          )}
          <Outlet />
          <ShowComments />
        </Container>
      </Main>
    </Containner>
  );
}

export default Bean;
