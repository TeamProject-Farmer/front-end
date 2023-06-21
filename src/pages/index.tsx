import Head from 'next/head';
import Header from '@components/Home/Header';
import Banner from '@components/Home/Banner';
import Category from '@components/Home/Category';
import ShopPrev from '@components/Home/ShopPrev';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Footer from '@components/Home/Footer';

const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <Category />
    <ShopPrev />
    <BestPlant />
    <BestReview />
    <News />
    <Footer />
  </>
);

export default IndexPage;
