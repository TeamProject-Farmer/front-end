import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import Shop from "@components/Shop";


const ShopPage: NextPageWithLayout = () => {
  return <Shop></Shop>;
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ShopPage;