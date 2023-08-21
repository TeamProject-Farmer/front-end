import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import BySize from "@components/Shop/BySize";

const BySizePage: NextPageWithLayout = () => {

  return <BySize/>;
}
BySizePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BySizePage;

