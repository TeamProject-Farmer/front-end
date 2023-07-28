import Slider from '@components/Home/Slider';
import Category from '@components/Common/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import { ReactElement } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import {
  getMainBanner,
  getBestProduct,
  getBestReview,
  getNews,
} from 'src/apis/home/home';
import { getProductCategory } from 'src/apis/common/category';
import { IndexPageProps } from 'src/types/home/types';

const IndexPage = ({
  banner,
  category,
  bestPlant,
  bestReview,
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
  return { props: { banner, category, bestPlant, bestReview, news } };
};

export default IndexPage;
