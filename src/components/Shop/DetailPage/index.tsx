import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
// import Category from '@components/Common/Category';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import OrderBar from '@components/Shop/Common/OrderBar';
import ContentWrapper from './ContentWrapper';
import { detailLinkOptions } from 'src/types/shop/types';
import { setProductId } from 'store/reducers/productIdSlice';

const DetailPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const menu = router.query.detail;
  let id: number;
  if (menu) {
    id = Number(menu);
  }

  const handleDispatch = () => {
    id == undefined ? "": dispatch(setProductId(id));
  }
  useEffect(() => {
    handleDispatch();
  }, [id]);
  
  return (
    <Styled.Wrapper>
      <Category/>
      <Panel />
      <PreviewPhoto />
      <OrderBar
        optionList={detailLinkOptions}
        width={theme.size.shopDetailWrapper}
      />
      <ContentWrapper/>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
  `,
};

export default DetailPage;
