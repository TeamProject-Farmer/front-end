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
import { getProductCategory, getBestProduct } from 'src/apis/home/home';
import { TCategoryProps, IPlantProps } from 'src/types/home/types';

type IndexPageProps = {
  category: TCategoryProps[];
  bestPlant: IPlantProps[];
};

export const getServerSideProps: GetServerSideProps<{
  category: TCategoryProps[];
  bestPlant: IPlantProps[];
}> = async () => {
  const category = await getProductCategory();
  const bestPlant = await getBestProduct();
  return { props: { category, bestPlant } };
};

const IndexPage: NextPageWithLayout<IndexPageProps> = ({
  category,
  bestPlant,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Slider />
      <Category category={category} />
      <ShopPrev />
      <BestPlant bestPlant={bestPlant} />
      <BestReview />
      <News />
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
