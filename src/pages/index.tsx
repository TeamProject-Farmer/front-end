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
import { IndexPageProps } from 'src/types/home/types';

const IndexPage = ({
  banner,
  bestPlant,
  bestReview,
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Slider banner={banner} />
      <Category />
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
  const bestPlant = await getBestProduct();
  const bestReview = await getBestReview();
  const news = await getNews();
  return { props: { banner, bestPlant, bestReview, news } };
};

export default IndexPage;
