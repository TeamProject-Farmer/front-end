import Slider from '@components/Home/Slider';
import Category from '@components/Home/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import {
  getProductCategory,
  getBestProduct,
  getBestReview,
  getNews,
} from 'src/apis/home/home';
import { ICategory, IPlant, IReview, INews } from 'src/types/home/types';

type IndexPageProps = {
  category: ICategory[];
  bestPlant: IPlant[];
  bestReview: IReview[];
  news: INews;
};

export const getServerSideProps = async () => {
  const category = await getProductCategory();
  const bestPlant = await getBestProduct();
  const bestReview = await getBestReview();
  // const news = await getNews();
  return { props: { category, bestPlant, bestReview } };
};

const IndexPage = ({ category, bestPlant, bestReview }) => {
  console.log(category);
  return (
    <>
      <Slider />
      <Category category={category} />
      <ShopPrev />
      <BestPlant bestPlant={bestPlant} />
      <BestReview bestReview={bestReview} />
      {/* <News news={news} /> */}
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
