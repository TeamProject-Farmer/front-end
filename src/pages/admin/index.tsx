import { ReactElement } from 'react';
import type { NextPageWithLayout } from "@pages/_app";
import AdminLayout from '@pages/adminlayout';
import Home from '@components/Admin/Home';

const AdminPage: NextPageWithLayout = () => {
  return(<Home />)
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;

