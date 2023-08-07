import React from 'react';
import { Styled } from '../../styles';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { PurchaseListProps } from 'src/types/mypage/types';
import { getPurchase } from 'src/apis/mypage/purchase';
import Image from 'next/image';

const PurchasesList = () => {
  const route = useRouter();

  const { data: purchaseArray } = useQuery<PurchaseListProps[]>(
    'purchase',
    getPurchase,
  );

  return (
    <Styled.BoxWrapper margin="8">
      <Styled.TextBox>
        <Styled.HeaderDiv>
          <Styled.HeaderText>구매목록</Styled.HeaderText>
          <Styled.More onClick={() => route.push('/mypage/purchases')} />
        </Styled.HeaderDiv>
        <Styled.ListWrapper>
          {/* slice 메서드로 렌더링 제한 */}
          {purchaseArray?.slice(0, 7).map((purchase, index) => (
            <Styled.ListDiv key={purchase.productId}>
              <Image
                src={purchase.imgUrl}
                alt="식물 사진"
                width="130"
                height="130"
              />
              <Styled.Title>
                {purchase.productName}
                {index}
              </Styled.Title>
              {/* 클릭시 리뷰 작성 페이지로 route 구현 하는건지? */}
              {/* <Styled.ReviewText>{purchase.review}</Styled.ReviewText> */}
            </Styled.ListDiv>
          ))}
        </Styled.ListWrapper>
      </Styled.TextBox>
    </Styled.BoxWrapper>
  );
};

export default PurchasesList;
