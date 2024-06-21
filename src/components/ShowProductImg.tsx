import styled from "styled-components";

interface IProductImgProps {
  src: any;
  alt: any;
}

const ProductImg = styled.img`
  height: 440px;
  width: 340px;
  margin: 0px 30px 0px 0px;
`;

const Section = styled.div``;

const ShowProductImg: React.FC<IProductImgProps> = ({ src, alt }) => (
  <Section>
    <ProductImg src={src} alt={alt} />
  </Section>
);
export default ShowProductImg;
