import Styled from './styles';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.ShrinkWrapper>
        <Link href="/">
          <Image
            src="/assets/images/home/footerLogo.png"
            alt="footerLogo"
            width={176}
            height={207}
          />
        </Link>
      </Styled.ShrinkWrapper>
      <Styled.ShrinkWrapper>
        <Styled.InfoWrapper>
          <Styled.Info>
            <Styled.BoldContent>파머(주)</Styled.BoldContent>
            <Styled.Content>
              owner. 파머 프로젝트 팀 tel. 031-000-0000
            </Styled.Content>
            <Styled.Content>
              주소 : 서울시 영등포구 은평로 123 파머하이테크시티 3층 203호{' '}
            </Styled.Content>
            <Styled.AccountBox>
              <Styled.Content>무통장 입금 계좌 :</Styled.Content>
              <Styled.Content>
                <Styled.Content>국민 123456-12-123456 파머(주)</Styled.Content>
                <Styled.Content>신한 123-456-123456 파머(주)</Styled.Content>
                <Styled.Content>농협 321-1234-4567-12 파머(주)</Styled.Content>
              </Styled.Content>
            </Styled.AccountBox>
          </Styled.Info>
        </Styled.InfoWrapper>
      </Styled.ShrinkWrapper>
    </Styled.Wrapper>
  );
};

export default Footer;
