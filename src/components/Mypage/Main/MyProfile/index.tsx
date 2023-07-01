import React from 'react';
import Profile from '@assets/images/mypage/profile.svg';
import Call from '@assets/images/mypage/call.svg';
import Mail from '@assets/images/mypage/mail.svg';
import { Styled } from '../../styles';
import { useRouter } from 'next/router';
import { IconText } from './Icon';

const MyProfile = () => {
  const route = useRouter();

  // 쿠폰, 포인트 데이터 배열 생성 (임시)
  const data = [
    { label: 'Point', value: '1,000' },
    { label: '쿠폰', value: '0' },
  ];

  return (
    <Styled.BoxWrapper>
      <Styled.TextBox>
        <Styled.HeaderDiv>
          <Styled.HeaderText>내 프로필</Styled.HeaderText>
          <Styled.EditButton onClick={() => route.push('mypage/profile')}>
            수정하기
          </Styled.EditButton>
        </Styled.HeaderDiv>

        <Styled.ProfileWrapper>
          <Styled.ProfileTextWrapper>
            <Profile />

            {/* 프로필 왼쪽 */}
            <Styled.InfoWrapper>
              <Styled.NameText>
                <span>파머</span>님 안녕하세요.
              </Styled.NameText>
              <Styled.AccumulatedAmountText>
                누적 구매금액: <span>0</span>원
              </Styled.AccumulatedAmountText>

              <IconText icon={<Call />} text="+82 10 0***-0***" />
              <IconText icon={<Mail />} text="이메일@이메일.com" />
            </Styled.InfoWrapper>
          </Styled.ProfileTextWrapper>

          {/* 쿠폰, 포인트 */}
          <Styled.FlexDiv>
            {data.map((item, index) => (
              <Styled.Line key={index}>
                <Styled.SubText>{item.label}</Styled.SubText>
                <Styled.NumberText>{item.value}</Styled.NumberText>
              </Styled.Line>
            ))}
          </Styled.FlexDiv>
        </Styled.ProfileWrapper>
      </Styled.TextBox>
    </Styled.BoxWrapper>
  );
};

export default MyProfile;
