import Slider from '@components/Home/Slider';
import Category from '@components/Home/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { getProductCategory, getShopBySize } from 'src/apis/home/home';
import { TCategoryProps } from 'src/types/home/types';

type IndexPageProps = {
  category: TCategoryProps[];
};

export const getServerSideProps: GetServerSideProps<{
  category: TCategoryProps[];
}> = async () => {
  const category = await getProductCategory();
  return { props: { category } };
};

const IndexPage: NextPageWithLayout<IndexPageProps> = ({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Slider />
      <Category category={category} />
      <ShopPrev />
      <BestPlant />
      <BestReview />
      <News />
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
