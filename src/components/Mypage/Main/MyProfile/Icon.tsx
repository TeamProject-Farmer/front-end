import { Styled } from '@components/Mypage/styles';

export const IconText = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <Styled.TextWrapper>
      {icon}
      <Styled.SubText>{text}</Styled.SubText>
    </Styled.TextWrapper>
  );
};
