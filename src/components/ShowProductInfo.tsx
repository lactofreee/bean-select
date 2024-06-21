import React from "react";
import styled from "styled-components";

interface Info {
  country: string;
  roastery: string;
  region: string;
  altitude: number;
  producer: string;
  variety: string;
  process: string;
}

interface InfoProps {
  info: Info;
}

const InfoWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const KeyData = styled.div``;
const ValueData = styled.h3`
  padding-left: 10px;
`;

const ShowProductInfo: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      {Object.entries(info).map(([key, value]) => (
        <InfoWrapper key={key}>
          <KeyData>{key}</KeyData>
          <ValueData>{value}</ValueData>
        </InfoWrapper>
      ))}
    </>
  );
};

export default ShowProductInfo;
