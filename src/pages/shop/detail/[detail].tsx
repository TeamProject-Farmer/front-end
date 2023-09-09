import { useState } from 'react';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import { detailLinkOptions } from 'src/utils/shop/sortOption';
import Category from '@components/Common/Category';
import Panel from '@components/Shop/DetailPage/Panel';
import PreviewPhoto from '@components/Shop/DetailPage/PreviewPhoto';
import SortBar from '@components/Shop/DetailPage/ContentWrapper/SortBar';
import ContentWrapper from '@components/Shop/DetailPage/ContentWrapper';
import { DetailPageStyled as Styled } from '@components/Shop/styles';
import theme from '@styles/theme';

const CategoryDetailPage: NextPageWithLayout = () => {
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
}

CategoryDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryDetailPage;