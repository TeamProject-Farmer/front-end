import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { setProductId } from 'store/reducers/productIdSlice';
import { setCategoryId } from 'store/reducers/categorySlice';
import { detailLinkOptions } from 'src/utils/shop/sortOption';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import OrderBar from '@components/Shop/Common/OrderBar';
import ContentWrapper from './ContentWrapper';


const DetailPage = () => {
  const [selectList, setSelectList] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const productId = Number(router.query?.detail);
  const cateId = router.query.category?.toString() || '';
  
  const handleDispatch = () => {
    if(productId != undefined){
      dispatch(setProductId(productId));
      dispatch(setCategoryId(cateId));
    }
  }
  useEffect(() => {
    handleDispatch();
  }, [productId]);
  
  return (
    <Styled.Wrapper>
      <Category/>
      <Panel setSelectList={setSelectList} selectList={selectList}/>
      <PreviewPhoto />
      <OrderBar
        optionList={detailLinkOptions}
        width={theme.size.shopDetailWrapper}
      />
      <ContentWrapper setSelectList={setSelectList} selectList={selectList}/>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    min-width: ${theme.size.shopDetailMinWidth};
  `,
};

export default DetailPage;
