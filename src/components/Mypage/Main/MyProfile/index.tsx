import React from 'react';
import Profile from '@assets/images/mypage/profile.svg';
import Call from '@assets/images/mypage/call.svg';
import Mail from '@assets/images/mypage/mail.svg';
import { Styled } from '../../styles';

const MyProfile = () => {
  return (
    <Styled.BoxWrapper>
      <Styled.TextBox>
        <Styled.HeaderDiv>
          {/* 수정하기 클릭시 수정 페이지로 이동 */}
          <Styled.HeaderText>내 프로필</Styled.HeaderText>
          <Styled.EditButton>수정하기</Styled.EditButton>
        </Styled.HeaderDiv>

        <Styled.ProfileWrapper>
          <Styled.ProfileTextWrapper>
            <Profile />

            <Styled.InfoWrapper>
              <Styled.NameText>
                <span>파머</span>님 안녕하세요.
              </Styled.NameText>
              <Styled.AccumulatedAmountText>
                누적 구매금액: <span>0</span>원
              </Styled.AccumulatedAmountText>

              <Styled.TextWrapper>
                <Call />
                <Styled.SubText>+82 10 0***-0***</Styled.SubText>
              </Styled.TextWrapper>
              <Styled.TextWrapper>
                <Mail />
                <Styled.SubText>이메일@이메일.com</Styled.SubText>
              </Styled.TextWrapper>
            </Styled.InfoWrapper>
          </Styled.ProfileTextWrapper>

          <Styled.FlexDiv>
            <Styled.Line>
              <Styled.SubText>Point</Styled.SubText>
              <Styled.NumberText>1,000</Styled.NumberText>
            </Styled.Line>
            <Styled.Line>
              <Styled.SubText>쿠폰</Styled.SubText>
              <Styled.NumberText>0</Styled.NumberText>
            </Styled.Line>
          </Styled.FlexDiv>
        </Styled.ProfileWrapper>
      </Styled.TextBox>
    </Styled.BoxWrapper>
  );
};

export default MyProfile;
