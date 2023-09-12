import Image from 'next/image';
import theme from '@styles/theme';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setOrderData } from 'store/reducers/orderDataSlice';
import { getDetail } from 'src/apis/shop/product';
import { getReview, getReviewStar } from 'src/apis/shop/review';
import { selectOptionProps, OptionBoxProps } from 'src/types/shop/types';
import NoProduct from '../ContentWrapper/NoProduct';
import OptionBox from '../ContentWrapper/OptionBox';
import ProductInfo from './ProductInfo';
import PayInfo from './PayInfo';

const Panel = (props: OptionBoxProps) => {
  const { selectList, setSelectList, selectPrice, setSelectPrice } = props;

  const router = useRouter();
  const dispatch = useDispatch();
  const productId = Number(router.query?.detail);
  const [thumbnailImg, setThumbnailImg] = useState<string>();
  const [name, setName] = useState<string>();
  const [discountRate, setDiscountRate] = useState<number>();
  const [price, setPrice] = useState<number>(0);
  const [totalStar, setTotalStar] = useState(0);
  const [options, setOptions] = useState<selectOptionProps[]>([]);
  const [noProduct, setNoProduct] = useState<boolean>(false);

  //상세페이지 데이터 호출
  const handleDetailData = async () => {
    try {
      const response = await getDetail(productId).then(data => {
        setOptions(data.options);
        setName(data.name);
        setThumbnailImg(data.thumbnailImg);
        setPrice(data.price);
        setDiscountRate(data.discountRate);
        if (data.name != undefined)
          dispatch(
            setOrderData([
              {
                imgUrl: data.thumbnailImg,
                productName: data.name,
                productPrice: data.price,
              },
            ]),
          );
      });
    } catch (err) {
      if (err.response.data.message === '해당 상품이 존재하지 않습니다.')
        setNoProduct(true);
    }
  };

  //리뷰 갯수 출력 api
  const handleReviewData = async () => {
    try {
      const response = await getReview({
        productId,
        currentIndex: 1,
        sortOption: null,
        starOption: null,
      });
      setTotalStar(response.totalElements);
    } catch (err) {
      console.log('err');
    }
  };

  //리뷰 별점 출력 api
  const handleReviewStar = async () => {
    try {
      const response = await getReviewStar(productId);
      setTotalStar(response.averageStarRating);
    } catch (err) {
      if (
        err.response.data.message ==
        '해당 상품에 대한 리뷰가 존재하지 않습니다.'
      )
        setTotalStar(0);
    }
  };

  useEffect(() => {
    handleDetailData();
    handleReviewData();
    handleReviewStar();
  }, [router]);

  return (
    <>
      {noProduct ? (
        <NoProduct />
      ) : (
        <Styled.Wrapper>
          <Styled.InnerBox>
            <Styled.ImageBox>
              {thumbnailImg && (
                <Image
                  src={thumbnailImg}
                  alt="Thumbnail-Imgage"
                  className="imageStyle"
                  width={548.55}
                  height={547.55}
                  priority={true}
                ></Image>
              )}
            </Styled.ImageBox>
            <Styled.ContentWrapper>
              <ProductInfo
                productId={productId}
                name={name}
                totalStar={totalStar}
                discountRate={discountRate}
                price={price}
              />
              <PayInfo />
              <Styled.VerticalLine />
              <OptionBox
                isPanel={true}
                setSelectList={setSelectList}
                selectList={selectList}
                setSelectPrice={setSelectPrice}
                selectPrice={selectPrice}
              />
            </Styled.ContentWrapper>
          </Styled.InnerBox>
        </Styled.Wrapper>
      )}
    </>
  );
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
