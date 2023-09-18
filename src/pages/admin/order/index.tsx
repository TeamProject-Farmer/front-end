import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import AdminLayout from '@pages/adminlayout';

const CartPage: NextPageWithLayout = () => {
  return(<div></div>)
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CartPage;

