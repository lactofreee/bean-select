import React from "react";
import BarChart from "./BarChart";
import styled from "styled-components";

interface NoteProps {
  flavors: any;
  acidity: any;
  body: any;
}
//data type 지정 부분 수정 요망

const NoteContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const FlavourContainner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const FlavourBadge = styled.div`
  font-size: 14px;
`;

const FlavorList = styled.div`
  font-size: 14px;
  margin-left: 8px;
`;

const Note: React.FC<NoteProps> = ({ flavors, acidity, body }) => (
  <NoteContainer>
    <FlavourContainner>
      <FlavourBadge>Flavour</FlavourBadge>
      <FlavorList>{flavors.join(", ")}</FlavorList>
    </FlavourContainner>
    <BarChart label="Acidity" value={acidity} />
    <BarChart label="Body" value={body} />
  </NoteContainer>
);

export default Note;
