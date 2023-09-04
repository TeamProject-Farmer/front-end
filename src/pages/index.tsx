import Slider from '@components/Home/Slider';
import Category from '@components/Common/Category';
import ShopPrev from '@components/Home/ShopBySize';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Layout from './layout';
import { ReactElement } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const IndexPage = () => {
  const router = useRouter();
  const userSelector = (state: RootState) => state.user;

  useEffect(() => {
    if (router.query.alert) {
      alert(router.query.alert);
      router.push(router.pathname);
    }
  }, [router]);

  return (
    <>
      <Slider />
      <Category />
      <ShopPrev />
      <BestPlant />
      <BestReview />
      <News />
    </>
  );
};

IndexPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default IndexPage;
