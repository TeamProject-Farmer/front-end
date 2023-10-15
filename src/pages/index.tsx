import Slider from '@components/Home/Slider';
import Category from '@components/Common/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import { ReactElement } from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import {
  getMainBanner,
  getBestProduct,
  getBestReview,
  getNews,
} from 'src/apis/home/home';
import { IndexPageProps } from 'src/types/home/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = ({
  banner,
  bestPlant,
  bestReview,
  news,
  time,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  function revalidate() {
    fetch('/api/revalidate');
  }
  const router = useRouter();

  useEffect(() => {
    if (router.query.alert) {
      alert(router.query.alert);
      router.push(router.pathname);
    }
  }, [router]);

  const handleClick = () => {
    console.log('click');
    revalidate();
  };
  return (
    <>
      <div>
        {time} <button onClick={handleClick}>revalidate</button>
      </div>
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
      time: new Date().toString(),
    },
    revalidate: 60,
  };
};

export default IndexPage;
