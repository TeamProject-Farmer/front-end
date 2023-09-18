import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import AdminLayout from '@pages/adminlayout';

const BoardPage: NextPageWithLayout = () => {
  return(<div></div>)
};

BoardPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BoardPage;

