import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { detailLinkOptions } from 'src/utils/shop/sortOption';
import Category from '@components/Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import SortBar from './ContentWrapper/SortBar';
import ContentWrapper from './ContentWrapper';


const DetailPage = () => {
  const [selectList, setSelectList] = useState([]);
  const [selectPrice, setSelectPrice] = useState<number>();

  return (
    <Styled.Wrapper>
      <Category />
      <Panel
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
        setSelectList={setSelectList}
        selectList={selectList}
        setSelectPrice={setSelectPrice}
        selectPrice={selectPrice}
      />
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
