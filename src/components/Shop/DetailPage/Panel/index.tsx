import styled from '@emotion/styled';
import theme from '@styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import usePanelStars from 'src/hooks/shop/usePanelStars';
import { PanelProps } from 'src/types/shop/types';
import OptionBox from '../ContentWrapper/OptionBox';
import ProductInfo from './ProductInfo';
import PayInfo from './PayInfo';

const Panel = (props: PanelProps) => {
  const {
    productData,
    optionList,
    selectList,
    setSelectList,
    selectPrice,
    setSelectPrice,
  } = props;

  const router = useRouter();
  const productId = Number(router.query?.detail);
  const { totalStar, starRating} = usePanelStars(productId);

  if (totalStar && starRating) {
    return (
      <Styled.Wrapper>
        <Styled.InnerBox>
          <Styled.ImageBox>
            <Image
              src={productData.thumbnailImg}
              alt="Thumbnail-Imgage"
              className="imageStyle"
              width={548.55}
              height={547.55}
              priority={true}
            ></Image>
          </Styled.ImageBox>
          <Styled.ContentWrapper>
            <ProductInfo
              productId={productId}
              name={productData.name}
              totalStar={totalStar}
              starRating={starRating}
              discountRate={productData.discountRate}
              price={productData.price}
            />
            <PayInfo />
            <Styled.VerticalLine />
            <OptionBox
              isPanel={true}
              optionList={optionList}
              setSelectList={setSelectList}
              selectList={selectList}
              setSelectPrice={setSelectPrice}
              selectPrice={selectPrice}
            />
          </Styled.ContentWrapper>
        </Styled.InnerBox>
      </Styled.Wrapper>
    );
  }
};
const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 712px;
    border-top: 2px solid ${theme.colors.green1};
    border-bottom: 2px solid ${theme.colors.green1};
    align-items: center;
    justify-content: center;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
  InnerBox: styled.div`
    width: ${theme.size.mainWidth};
    display: flex;
    justify-content: space-between;
  `,
  ImageBox: styled.div`
    width: 548.55px;
    height: 547.55px;
    border-radius: 15px;
    background-color: ${theme.colors.lightGray};
    margin-right: 56px;
    overflow: hidden;
    .imageStyle {
      width: 548.55px;
      height: 547.55px;
      object-fit: cover;
    }
  `,
  ContentWrapper: styled.div`
    width: 548px;
    color: ${theme.colors.black};
    & > div {
      margin-bottom: 8px;
    }
  `,
  VerticalLine: styled.hr`
    width: 100%;
    height: 1px;
    background-color: #585858;
    border: none;
  `,
};
export default Panel;
