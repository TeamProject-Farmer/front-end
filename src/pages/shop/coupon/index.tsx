import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import Layout from "@pages/layout";
import FirstCoupon from '@components/FirstCoupon';

const BySizePage: NextPageWithLayout = () => {
  return <FirstCoupon />;
}
BySizePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BySizePage;

