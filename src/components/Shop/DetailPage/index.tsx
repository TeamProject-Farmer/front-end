import { useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <Category />
      <Panel setSelectList={setSelectList} selectList={selectList} />
      <PreviewPhoto />
      <SortBar
        optionList={detailLinkOptions}
        width={theme.size.shopDetailWrapper}
      />
      <ContentWrapper setSelectList={setSelectList} selectList={selectList} />
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
