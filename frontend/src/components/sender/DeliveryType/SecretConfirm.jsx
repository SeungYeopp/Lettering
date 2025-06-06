// SecretConfirm.jsx
import React from 'react';
import styled from 'styled-components';

import CancelButton from '../../common/button/CancelButton';
import ConfirmButton from '../../common/button/ConfirmButton';
import ConfirmModal from '../../common/modal/ConfirmModal';

export default function SecretConfirm({ question, hint, answer, onBack, onConfirm, onClose }) {
  return (
    <ConfirmModal
      isOpen={true}
      onClose={onClose}
      title={
        <Wrapper>
          <ModalTitle>확인하기</ModalTitle>
          <ModalDesc>입력한 내용이 올바른지 확인해주세요!</ModalDesc>
        </Wrapper>
      }
    >
      <ContentWrapper>
        <Label>질문</Label>
        <GrayBox>{question}</GrayBox>
        {hint && (
          <>
            <Label>힌트</Label>
            <GrayBox>{hint}</GrayBox>
          </>
        )}

        <Label>정답</Label>
        <GrayBox>{answer}</GrayBox>
      </ContentWrapper>

      <ButtonWrapper>
        <CancelButton btnName="이전" onClick={onBack} />
        <ConfirmButton btnName="전송하기" onClick={onConfirm} />
      </ButtonWrapper>
    </ConfirmModal>
  );
}

// styled-components
const Wrapper = styled.div`
  text-align: center;
`;

const ModalTitle = styled.div`
  ${({ theme }) => theme.fonts.Title2};
  color: ${({ theme }) => theme.colors.Black};
  margin-bottom: 0.4rem;
`;

const ModalDesc = styled.div`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.Gray2};
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  // margin-top: 2rem;
`;

const Label = styled.div`
  font-size: 3 rem;
  ${({ theme }) => theme.fonts.Saeum3};
  color: ${({ theme }) => theme.colors.Gray2};
  margin-bottom: 0.4rem;
`;

const GrayBox = styled.div`
  background-color: ${({ theme }) => theme.colors.Gray7};
  padding: 1.2rem;
  padding-left: 1rem;
  border-radius: 999px;
  text-align: center;
  margin-bottom: 1.6rem;
  ${({ theme }) => theme.fonts.Saeum3};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
