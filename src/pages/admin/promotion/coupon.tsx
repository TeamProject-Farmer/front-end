import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import AdminLayout from '@pages/adminlayout';

const BoardCouponPage: NextPageWithLayout = () => {
  return(<div></div>)
};

BoardCouponPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BoardCouponPage;

