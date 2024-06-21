import React from 'react';
import styled from 'styled-components';

interface BarChartProps {
  label: string;
  value: number; // value is expected to be a number between 0 and 100
}

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  max-width:550px;
`;

const Label = styled.div`
  width: 50px;
  font-size: 14px;
`;

const Bar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e4e4e4;
  margin-left: 8px;
  position: relative;
`;

const FilledBar = styled.div<{ width: number }>`
  height: 100%;
  background-color: #6F4A3A;
  width: ${props => props.width * 20}%;
`;

const BarChart: React.FC<BarChartProps> = ({ label, value }) => (
  <BarContainer>
    <Label>{label}</Label>
    <Bar>
      <FilledBar width={value} />
    </Bar>
  </BarContainer>
);

export default BarChart;
