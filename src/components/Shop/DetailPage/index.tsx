import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { setProductId } from 'store/reducers/productIdSlice';
import { setCategoryId } from 'store/reducers/categorySlice';
import { detailLinkOptions } from 'src/types/shop/types';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import OrderBar from '@components/Shop/Common/OrderBar';
import ContentWrapper from './ContentWrapper';


const DetailPage = () => {
  const [selectList, setSelectList] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const menu = router.query.detail;
  const cate = router.query.category;
  let id: number;
  let cateId: string;
  if (menu) {
    id = Number(menu);
    cateId = cate.toString();
  }
  
  const handleDispatch = () => {
    if(id != undefined){
      dispatch(setCategoryId(cateId));
      dispatch(setProductId(id));
    }
  }
  useEffect(() => {
    handleDispatch();
  }, [id]);
  
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
  `,
};

export default DetailPage;
