import Event from '@components/Home/Event';
import Header from '@components/Home/Header';
import Slider from '@components/Home/Slider';
import Category from '@components/Home/Category';
import ShopPrev from '@components/Home/ShopPrev';
import BestPlant from '@components/Home/BestPlant';
import BestReview from '@components/Home/BestReview';
import News from '@components/Home/News';
import Footer from '@components/Home/Footer';

const IndexPage = () => (
  <>
    <Event/>
    <Header />
    <Slider />
    <Category />
    <ShopPrev />
    <BestPlant />
    <BestReview />
    <News />
    <Footer />
  </>
);

export default IndexPage;
