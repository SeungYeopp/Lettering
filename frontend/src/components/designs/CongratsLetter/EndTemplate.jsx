import React from 'react';
import styled from 'styled-components';

import EnvelopeBottomImg from '../../../assets/images/congratsLetter/bottom_fold.png';
import LetterImg from '../../../assets/images/congratsLetter/letter_paper.png';
import EnvelopeTopImg from '../../../assets/images/congratsLetter/top_fold.png';

const EndTemplate = ({ images }) => {
  const mainImg = images?.imageLowUrl;
  const angle = (90 + 3.71) * (Math.PI / 180); // 라디안 변환
  const distance = 200;

  const x = Math.cos(angle) * distance;
  const y = -Math.sin(angle) * distance;

  return (
    <StWrapper>
      <StEnvelopeWrapper>
        <StEnvelopeTop src={EnvelopeTopImg} alt="편지 봉투 윗부분" />

        <StLetter src={LetterImg} alt="편지지" />
        <StLetterImage src={mainImg} alt="편지 사진" />

        <StEnvelope src={EnvelopeBottomImg} alt="편지 봉투" />
      </StEnvelopeWrapper>
    </StWrapper>
  );
};

export default EndTemplate;

const StWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StEnvelopeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StEnvelopeTop = styled.img`
  position: absolute;
  left: 0.7rem;
  width: 22rem;
  z-index: 1;
`;

const StLetter = styled.img`
  position: absolute;
  left: 2.8rem;
  top: -12rem;
  width: 17rem;
  z-index: 2;
`;

const StStampImage = styled.img`
  position: absolute;
  top: -10.2rem;
  right: 5.5rem;
  width: 3.5rem;
  transform: rotate(-3.7deg);
  z-index: 4;
`;

const StTextImage = styled.img`
  position: absolute;
  top: -3rem;
  left: 3.2rem;
  width: 17rem;
  transform: rotate(-3.7deg);
  z-index: 4;
`;

const StLetterImage = styled.img`
  position: absolute;
  top: -8.5rem;
  left: 6.3rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  transform: rotate(-3.7deg);
  z-index: 3;
`;

const StEnvelope = styled.img`
  position: absolute;
  width: 20.1rem;
  top: -1.9rem;
  left: 2.16rem;
  z-index: 5;
`;
