import { ReactElement } from 'react';
import type { NextPageWithLayout } from '@pages/_app';
import AdminLayout from '@pages/adminlayout';

const BoardManagePage: NextPageWithLayout = () => {
  return <div></div>;
};

BoardManagePage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BoardManagePage;
