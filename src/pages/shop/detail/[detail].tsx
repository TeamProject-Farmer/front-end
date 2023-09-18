import theme from '@styles/theme';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { setOrderData } from 'store/reducers/orderDataSlice';
import type { NextPageWithLayout } from '@pages/_app';
import Layout from '@pages/layout';
import { getDetail } from 'src/apis/shop/product';
import { detailLinkOptions } from 'src/utils/shop/sortOption';
import Category from '@components/Common/Category';
import Panel from '@components/Shop/DetailPage/Panel';
import PreviewPhoto from '@components/Shop/DetailPage/PreviewPhoto';
import SortBar from '@components/Shop/Common/OptionBars/SortBar';
import ContentWrapper from '@components/Shop/DetailPage/ContentWrapper';
import NoProduct from '@components/Shop/DetailPage/NoProduct';
import { DetailPageStyled as Styled } from '@components/Shop/styles';

const CategoryDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productId = Number(router.query?.detail);
  const [selectList, setSelectList] = useState([]);
  const [selectPrice, setSelectPrice] = useState<number>();

  //상세페이지 데이터 호출
  const {
    data: productData,
    isLoading,
    isError: detailError,
  } = useQuery({
    queryKey: ['detailData', productId],
    queryFn: () => getDetail(productId),
    retry: 0,
    onSuccess: data => {
      if (data.name != undefined){
        dispatch(
          setOrderData([
            {
              imgUrl: data.thumbnailImg,
              productName: data.name,
              productPrice: data.price,
            },
          ]),
        );
      }
    }
  });

  if (isLoading) return <div></div>;
  if (detailError) return <NoProduct />;
  else {
    return (
      <Styled.Wrapper>
        <Category />
        <Panel
          productData={productData}
          optionList={productData.options}
          setSelectList={setSelectList}
          selectList={selectList}
          selectPrice={selectPrice}
          setSelectPrice={setSelectPrice}
        />
        <PreviewPhoto />
        <SortBar
          optionList={detailLinkOptions}
          width={theme.size.shopDetailWrapper}
        />
        <ContentWrapper
          optionList={productData.options}
          setSelectList={setSelectList}
          selectList={selectList}
          setSelectPrice={setSelectPrice}
          selectPrice={selectPrice}
        />
      </Styled.Wrapper>
    );
  }
};

CategoryDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryDetailPage;
