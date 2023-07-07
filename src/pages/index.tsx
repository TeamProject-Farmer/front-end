import Slider from '@components/Home/Slider';
import Category from '@components/Home/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react';

const IndexPage: NextPageWithLayout = () => (
  <>
    <Slider />
    <Category />
    <ShopPrev />
    <BestPlant />
    <BestReview />
    <News />
  </>
);

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default IndexPage;
