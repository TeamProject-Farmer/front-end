import Slider from '@components/Home/Slider';
import Category from '@components/Home/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import { ReactElement } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import {
  getMainBanner,
  getMainBanner2,
  getProductCategory,
  getBestProduct,
  getBestReview,
  getNews,
} from 'src/apis/home/home';
import { IndexPageProps } from 'src/types/home/types';

const IndexPage = ({
  banner,
  category,
  bestPlant,
  bestReview,
  news,
  test,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('banner', banner);
  console.log('test', test);
  return (
    <>
      <Slider banner={banner} />
      <Category category={category} />
      <ShopPrev />
      <BestPlant bestPlant={bestPlant} />
      <BestReview bestReview={bestReview} />
      <News news={news} />
    </>
  );
};

IndexPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<
  IndexPageProps
> = async () => {
  const banner = await getMainBanner();
  const category = await getProductCategory();
  const bestPlant = await getBestProduct();
  const bestReview = await getBestReview();
  const news = await getNews();
  const test = await getMainBanner();
  return { props: { banner, category, bestPlant, bestReview, news, test } };
};

export default IndexPage;
