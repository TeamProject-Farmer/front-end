import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import ShopDetail from "@components/Shop/ShopDetail";

const CategoryPage: NextPageWithLayout = () => {
  return <ShopDetail />;
}
CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;