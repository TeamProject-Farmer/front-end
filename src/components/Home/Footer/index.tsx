import Styled from './styles';
import Image from 'next/image';
import Button from '../Common/Button';

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Image
        src="/assets/images/home/footerLogo.png"
        alt="footerLogo"
        width={176}
        height={207}
        style={{ objectFit: 'contain' }}
      />
      <Styled.InfoBox>
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
        <Styled.Info>
          <Styled.BoldContent>고객센터</Styled.BoldContent>
          <Styled.Tel>1234-1234</Styled.Tel>
          <Styled.Content>
            평일 AM 09:00 ~ PM 05:30 / 주말, 공휴일 휴무
          </Styled.Content>
          <Styled.Content>점심 AM 12:00 ~ PM 01:00</Styled.Content>
          <Button content="채팅상담" color="#285430" />
        </Styled.Info>
      </Styled.InfoBox>
    </Styled.Wrapper>
  );
};

export default Footer;
