import { Styled } from '@components/Mypage/styles';
import { ReactNode } from 'react';

export const IconText = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <Styled.TextWrapper>
      {icon}
      <Styled.SubText>{text}</Styled.SubText>
    </Styled.TextWrapper>
  );
};
