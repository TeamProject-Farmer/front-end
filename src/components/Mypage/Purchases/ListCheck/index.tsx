import { Styled } from '@components/Mypage/styles';
import React from 'react';
import Search from '@assets/images/mypage/search.svg';
import Option from '@assets/images/mypage/option.svg';
import { timeIntervals } from 'src/utils/mypage/orderTimeList';

const ListCheck = () => {
  return (
    <Styled.CheckWrapper>
      <Styled.ListText>구매목록</Styled.ListText>
      <Styled.CheckButton>주문내역 조회</Styled.CheckButton>
      <Styled.InfoText>
        기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 지난 주문내역을
        조회하실 수 있습니다.
      </Styled.InfoText>

      <Styled.Checkbox>
        {timeIntervals.map(interval => (
          <Styled.InfoText key={interval}>{interval}</Styled.InfoText>
        ))}
        <Styled.IconWrapper>
          <Styled.SearchInput placeholder="23-02-06 ~ 23-05-07" />
          <Search className="relative cursor-pointer right-8" />
        </Styled.IconWrapper>
        <Styled.IconWrapper>
          {/* 클릭시 리스트 옵션 나와야할듯 */}
          <Styled.SearchInput placeholder="전체 주문처리상태" />
          <Option className="relative cursor-pointer right-10" />
        </Styled.IconWrapper>
      </Styled.Checkbox>
    </Styled.CheckWrapper>
  );
};

export default ListCheck;
