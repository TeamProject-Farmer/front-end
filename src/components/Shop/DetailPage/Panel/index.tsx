import Image from 'next/image';
import { useRouter } from 'next/router';
import usePanelStars from 'src/hooks/shop/usePanelStars';
import { PanelProps } from 'src/types/shop/types';
import OptionBox from '../ContentWrapper/OptionBox';
import ProductInfo from './ProductInfo';
import PayInfo from './PayInfo';
import { PanelStyled as Styled } from './styles';

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
  const { totalStar, starRating } = usePanelStars(productId);

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
};


export default Panel;
