import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Product from '@components/Common/Product';
import { getMDPickList } from 'src/apis/shop/product';

const MDPick = () => {
  const [MDPickList, setMDPickList] = useState([]);

  const handleMDPickList = async () => {
    const response = await getMDPickList();
    setMDPickList(response);
  };

  useEffect(() => {
    handleMDPickList();
  }, []);
  return (
    <Styled.PickWrapper>
      <Styled.PickTitle>MD's PICK</Styled.PickTitle>
      <Styled.PickItemWrapper>
        {MDPickList &&
          MDPickList.map(i => (
            <Link href={`/shop/MDPick/detail/${i.productId}`}>
              <Product
                key={i.productId}
                thumbnailImg={i.imgUrl}
                name={i.productName}
                discountRate={i.discountRate}
                price={i.price}
                averageStarRating={i.averageStarRating}
                reviewCount={i.reviewCount}
              ></Product>
            </Link>
          ))}
      </Styled.PickItemWrapper>
    </Styled.PickWrapper>
  );
};

const Styled = {
  PickWrapper: styled.div`
    margin-bottom: 65px;
    display: flex;
    flex-direction: column;
    width: ${theme.size.mainWidth};
  `,
  PickTitle: styled.div`
    text-align: left;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 17.76px;
  `,
  PickItemWrapper: styled.div`
    margin: 0 auto;
    width: ${theme.size.mainWidth};
    height: fit-content;
    display: flex;
    justify-content: space-between;
  `,
};
export default MDPick;
