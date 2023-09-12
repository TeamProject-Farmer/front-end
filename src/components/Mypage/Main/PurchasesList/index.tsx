import React from 'react';
import { Styled } from '../../styles';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { PurchaseListProps } from 'src/types/mypage/types';
import { getPurchase } from 'src/apis/mypage/purchase';
import Image from 'next/image';
import Link from 'next/link';

const PurchasesList = () => {
  const route = useRouter();

  const { data: purchaseArray } = useQuery<PurchaseListProps[]>({
    queryKey: ['purchase'],
    queryFn: getPurchase,
  });

  return purchaseArray?.length === 0 ? null : (
    <Styled.BoxWrapper margin="8">
      <Styled.TextBox>
        <Styled.HeaderDiv>
          <Styled.HeaderText>구매목록</Styled.HeaderText>
          <Styled.More onClick={() => route.push('/mypage/purchases')} />
        </Styled.HeaderDiv>
        <Styled.ListWrapper>
          {/* slice 메서드로 렌더링 제한 */}
          {purchaseArray?.slice(0, 7).map((purchase, index) => (
            <Link key={index} href={`shop/detail/${purchase.productId}`}>
              <Styled.ListDiv>
                <Image
                  src={purchase.imgUrl}
                  alt="식물 사진"
                  width="0"
                  height="0"
                  sizes="170px"
                  style={{ width: '170px', height: '170px' }}
                />
                <Styled.Title>{purchase.productName}</Styled.Title>
              </Styled.ListDiv>
            </Link>
          ))}
        </Styled.ListWrapper>
      </Styled.TextBox>
    </Styled.BoxWrapper>
  );
};

export default PurchasesList;
