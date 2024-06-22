import React from "react";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

// 스타일드 컴포넌트를 사용하여 별 모양 정의
const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Star = styled.span`
  font-size: 16px;
`;

// StarRating 컴포넌트
const ShowStarRating = ({ score }: { score: number }) => {
  // 5점 만점의 별을 생성
  const stars = [];
  const maxStars = 5;
  const filledStars = Math.floor(score);
  const hasHalfStar = score - filledStars >= 0.5;

  for (let i = 0; i < maxStars; i++) {
    if (i < filledStars) {
      stars.push(
        <Star key={i}>
          <FaStar color="#6F4A3A" />
        </Star>
      );
    } else if (i === filledStars && hasHalfStar) {
      stars.push(
        <Star key={i}>
          <FaStarHalfAlt color="#6F4A3A" />
        </Star>
      );
    } else {
      stars.push(
        <Star key={i}>
          <FaRegStar color="#6F4A3A" />
        </Star>
      );
    }
  }

  return <StarContainer>{stars}</StarContainer>;
};

export default ShowStarRating;
