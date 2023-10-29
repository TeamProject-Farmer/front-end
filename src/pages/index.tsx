import { ReactElement, useEffect } from 'react';

import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Layout from './layout';
import Slider from '@components/Home/Slider';
import Category from '@components/Common/Category';
import ShopBySize from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';

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
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.alert) {
      alert(router.query.alert);
      router.push(router.pathname);
    }
  }, [router]);

  return (
    <>
      <Slider banner={banner} />
      <Category />
      <ShopBySize />
      <BestPlant bestPlant={bestPlant} />
      <BestReview bestReview={bestReview} />
      <News news={news} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const banner = await getMainBanner();
  const bestPlant = await getBestProduct();
  const bestReview = await getBestReview();
  const news = await getNews();
  return {
    props: {
      banner,
      bestPlant,
      bestReview,
      news,
    } satisfies IndexPageProps,
    revalidate: 60 * 60 * 24,
  };
};

IndexPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
