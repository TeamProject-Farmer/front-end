import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Product from '@components/Common/Product';
import { getMDPickList } from 'src/apis/shop/product';

const MDPick = () => {
  const { data: MDPickList } = useQuery({
    queryKey: ['MDPick'],
    queryFn: () =>getMDPickList(),
  });

  return (
    <Styled.PickWrapper>
      <Styled.PickTitle>MD's PICK</Styled.PickTitle>
      <Styled.PickItemWrapper>
        {MDPickList &&
          MDPickList.map(i => (
            <Product
              key={i.productId}
              productId={i.productId}
              thumbnailImg={i.imgUrl}
              name={i.productName}
              discountRate={i.discountRate}
              price={i.price}
              averageStarRating={i.averageStarRating}
              reviewCount={i.reviewCount}
            ></Product>
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
