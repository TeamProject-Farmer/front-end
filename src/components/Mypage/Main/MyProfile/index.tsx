import React, { useEffect, useState } from 'react';
import Profile from '@assets/images/mypage/profile.svg';
import Mail from '@assets/images/mypage/mail.svg';
import { Styled } from '../../styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconText } from './Icon';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const selectUser = (state: RootState) => state.user;

const MyProfile = () => {
  const route = useRouter();

  const user = useSelector(selectUser);

  const data = [
    { label: 'Point', value: user.point },
    { label: '쿠폰', value: user.memberCoupon },
  ];

  //링크를 넣기 위해 추가한 부분
  const handleComponents = (item: { label: string; value: number }) => {
    if (item.label === '쿠폰') {
      return (
        <Link href="/mypage/mycoupons">
          <Styled.SubText>{item.label}</Styled.SubText>
          <Styled.NumberText>{item.value}</Styled.NumberText>
        </Link>
      );
    } else {
      return (
        <>
          <Styled.SubText>{item.label}</Styled.SubText>
          <Styled.NumberText>{item.value}</Styled.NumberText>
        </>
      );
    }
  };
  //
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
                <span>{user.nickname}</span>님 안녕하세요.
              </Styled.NameText>
              <Styled.AccumulatedAmountText>
                누적 구매금액: <span>{user.cumulativeAmount}</span>원
              </Styled.AccumulatedAmountText>

              <IconText icon={<Mail />} text={user.email} />
            </Styled.InfoWrapper>
          </Styled.ProfileTextWrapper>

          {/* 쿠폰, 포인트 <- 이 부분 변경됨*/}
          <Styled.FlexDiv>
            {data.map((item, index) => (
              <Styled.Line key={index}>
                <>{handleComponents(item)}</>
              </Styled.Line>
            ))}
          </Styled.FlexDiv>
        </Styled.ProfileWrapper>
      </Styled.TextBox>
    </Styled.BoxWrapper>
  );
};

export default MyProfile;
