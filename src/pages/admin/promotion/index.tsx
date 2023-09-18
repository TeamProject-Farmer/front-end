import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import AdminLayout from '@pages/adminlayout';

const PromotionPage: NextPageWithLayout = () => {
  return(<div></div>)
};

PromotionPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PromotionPage;

