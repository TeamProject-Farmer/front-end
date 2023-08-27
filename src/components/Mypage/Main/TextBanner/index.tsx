import React from 'react';
import { Styled } from '../../styles';
import Link from 'next/link';

const TextBanner = () => {
  return (
    <Link href="/mypage/myplants">
      <Styled.BoxWrapper>
        <Styled.TextContainer>
          <Styled.h1Text size="500">식물 키우기 어려우시죠?</Styled.h1Text>
          <Styled.h1Text size="700">
            내 반려식물을 등록하고 관리해보세요.
          </Styled.h1Text>
        </Styled.TextContainer>
      </Styled.BoxWrapper>
    </Link>
  );
};

export default TextBanner;
